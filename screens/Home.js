import {Button, Text, TextInput, View} from "react-native";
import {globalStyles} from "../styles/global";
import React from "react";

function Home({ navigation })  {
    const loadOps = async () => {
        try {
            let response = await doFetch('GET', '/api/announcements', null)

        }catch (error) {
            console.error(error);
        }
    }
    return(
        <View style={globalStyles.baseContainer}>
        </View>
    )
}

export default Home