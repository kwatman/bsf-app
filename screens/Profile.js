import {Button, Pressable, SafeAreaView, ScrollView, Text, View,RefreshControl} from "react-native";
import {globalStyles} from "../styles/global";
import AuthContext from "../context/AuthContext";
import React, {useContext, useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";


function Profile({ route,navigation })  {
    const {auth,doLogin} = useContext(AuthContext)

    const [doFetch] = useFetch()
    const [participations,setParticipations] = useState(0)

    const loadPaticipations = async () => {
        let response = await doFetch('GET', '/api/users/me?fields[0]=operations&populate[operations][fields][0]=id', null)
        setParticipations(response.operations.length)
    }


    useEffect(() => {
        loadPaticipations()
    },[])

    return(
        <SafeAreaView style={globalStyles.baseContainer}>
            <ScrollView style={{width: '100%', paddingLeft: 20, paddingRight: 20}} contentContainerStyle={{ alignItems: 'center'}}>
                <Text style={globalStyles.title} >{auth.person.username}</Text>
                <Text style={globalStyles.whiteText}>participations: {participations}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;