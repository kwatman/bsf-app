import {Button, Pressable, SafeAreaView, ScrollView, Text, View,RefreshControl} from "react-native";
import {globalStyles} from "../styles/global";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthContext from "../context/AuthContext";
import React, {useContext, useEffect, useState} from "react";
function Operation({ route,navigation })  {

    const {opid, operation,date,time } = route.params;

    const {auth,doLogin} = useContext(AuthContext)

    return(
        <SafeAreaView style={globalStyles.baseContainer}>
             <ScrollView style={{width: '100%', paddingLeft: 20, paddingRight: 20}} contentContainerStyle={{ alignItems: 'center'}}>
                {auth.role === "Admin" ?     
                    <Pressable style={globalStyles.button} onPress={() => navigation.navigate('AddParticipant',{operation: opid})}>
                        <Text style={globalStyles.buttonText}>add participants</Text>
                    </Pressable>
                    :
                    null
                }
                <Text style={globalStyles.title} >{operation.Title}</Text>
                <View>
                    <View style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center' }} >
                        <Ionicons name="calendar" size={30} color="white" style={{marginRight: 5}} />
                        <Text style={{color: 'white', textAlign: 'center'}}>{date}</Text>
                    </View>
                    <View style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center' }} >
                        <Ionicons name="time" size={30} color="white" style={{marginRight: 5}} />
                        <Text style={{color: 'white', textAlign: 'center'}}>{time}</Text>
                    </View>
                </View>

                <Text style={globalStyles.whiteText} > Sitrep </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                        width: '80%'
                    }}
                />
                <Text style={globalStyles.whiteText} > {operation.Description} </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Operation;