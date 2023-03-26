import {Button, Pressable, SafeAreaView, ScrollView, Text, View,RefreshControl} from "react-native";
import {globalStyles} from "../styles/global";
import OperationCard from "../components/OperationCard";
import React, {useContext, useEffect, useState} from "react";
import AppSettings from "../AppSettings";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";

function Operations({ navigation })  {

    const [operations,setOperations] = useState({pastOperations: null, upcomingOperations: null})
    const {auth,doLogin} = useContext(AuthContext)
    const [doFetch] = useFetch()
    const [refreshing, setRefreshing] = React.useState(false);

    const operationPressed = (operation) => {
        console.log(operation)
        navigation.navigate('Operation',{operation: operation.attributes,date: operation.date, time: operation.time})
    }
    
    const loadOps = async () => {
        try {
            let response = await doFetch('GET', '/api/operations', null)
            let pastOperations= []
            let upcomingOperations =[]
            response.data.forEach((operation) => {
                    let zerohour = new Date(operation.attributes.date)
                    operation.date = zerohour.getFullYear() + "/" + ('0' + (zerohour.getMonth() + 1)).slice(-2) + "/" + ('0' + (zerohour.getDate())).slice(-2) 
                    operation.time = ('0' + (zerohour.getHours())).slice(-2)  + ":" + ('0' + (zerohour.getMinutes())).slice(-2)
                }
            );
            response.data.forEach((operation) => {
                var now = new Date();
                if (new Date(operation.attributes.date) < now) {
                    pastOperations.push(
                        <Pressable key={operation.id} style={{width: '80%', alignItems: 'center'}} onPress={() => operationPressed(operation)}>
                            <OperationCard key={operation.id} title={operation.attributes.Title} date={operation.date} time={operation.time}/>
                        </Pressable>
                    )
                }else{
                    upcomingOperations.push(
                        <Pressable key={operation.id} style={{width: '80%', alignItems: 'center'}} onPress={() => operationPressed(operation)}>
                            <OperationCard key={operation.id} title={operation.attributes.Title} date={operation.date} time={operation.time}/>
                        </Pressable>
                    )
                }
            });
            
            let operations = {
                pastOperations: pastOperations,
                upcomingOperations: upcomingOperations
            }
            setOperations(operations)
        }catch (error) {
            console.error(error);
        }
    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadOps()
        setRefreshing(false);
      }, []);

    useEffect(() => {
        loadOps()
    }, [])
    
    return(
        <SafeAreaView style ={globalStyles.baseContainer}>
            <ScrollView style={{width: '100%'}} contentContainerStyle={{ alignItems: 'center'}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                {auth.role === "Admin" ?     
                    <Pressable style={globalStyles.button} onPress={() => navigation.navigate('AddOperation')}>
                        <Text style={globalStyles.buttonText}>add new opperation</Text>
                    </Pressable>
                    :
                    null
                }

                <Text style={{color: 'white'}}> Upcoming Operation</Text>
                {operations.upcomingOperations != null ? operations.upcomingOperations :  <Text style={{color: 'white'}}> There are no upcoming operations</Text>}
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                        margin:20,
                        width: '80%'
                    }}
                />
                {operations.pastOperations}
            </ScrollView> 
        </SafeAreaView>
    )
}

export default Operations