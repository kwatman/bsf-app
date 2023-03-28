import {globalStyles} from "../styles/global";
import {Button, Pressable, SafeAreaView, ScrollView, Text, View,RefreshControl} from "react-native";
import { useEffect,useState } from "react";
import useFetch from "../hooks/useFetch";

function AddParticipant({ route,navigation }){

    const { operation} = route.params;

    const [users, setUsers] = useState([])
    const [doFetch] = useFetch()

    const LoadUsers = async () => {
        let allUsers = await doFetch('GET','/api/users?fields[0]=operations&fields[1]=username&populate[operations][fields][0]=id',null)
        console.log(operation)
        let newUsers = []
        allUsers.forEach(user => {
            user.hasParticipated = false
            if(user.operations.find(op => op.id == operation)) user.hasParticipated = true;
            console.log(user)
            newUsers.push(
                <View key={user.id} style={{display: "flex", backgroundColor: 'white',width: '80%', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                    <Text style={{color: 'black'}} >{user.username}</Text>
                    <Pressable style={globalStyles.button} >
                         <Text style={globalStyles.buttonText}>{ user.hasParticipated ?  'Remove' :'Add'}</Text>
                    </Pressable>
                </View>
            )
        });
        setUsers(newUsers)
    }


    useEffect(() => {
        LoadUsers()
    },[])

    return(
        <SafeAreaView style={globalStyles.baseContainer}>
             <ScrollView style={{width: '100%', paddingLeft: 20, paddingRight: 20}} contentContainerStyle={{ alignItems: 'center'}}>
                {users}
             </ScrollView>
        </SafeAreaView>
    )
}

export default AddParticipant;