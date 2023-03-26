import Home from "./Home";
import {Text, StyleSheet, TextInput, View, Button, Pressable, Alert} from "react-native";
import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";
import {globalStyles} from "../styles/global";
import AppSettings from "../AppSettings.js";
import useFetch from "../hooks/useFetch";
import messaging from '@react-native-firebase/messaging';

const Login =  () => {

    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");
    const {auth,doLogin} = useContext(AuthContext)

    const [doFetch] = useFetch()

    const login =  async () => {
        try {
            let response = await doFetch('POST','/api/auth/local',JSON.stringify({
                identifier: user,
                password: pass
            }))
            let data = response

            await messaging().registerDeviceForRemoteMessages();
  
            // Get the token
            const token = await messaging().getToken();
            let fcmResponse = await useFetch('POST', '/api/auth/local/fcm',JSON.stringify({
                "token": token
            }))
            if(data.error){
                Alert.alert(
                    "Invalid credentials",
                    data.message,
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]);
            }else{
                doLogin(data.jwt)
            }
        }catch (error) {
            console.error(error);
        }
    }
    return(
        <View style={styles.loginContainer}>
            <Text style={{color: 'white'}}>Please log in to your account</Text>
            <TextInput
                style={globalStyles.textInput}
                onChangeText={setUser}
                value={user}
                placeholder="username"
            />
            <TextInput
                style={globalStyles.textInput}
                onChangeText={setPass}
                value={pass}
                placeholder="password"
            />
            <Pressable style={globalStyles.button} onPress={login}>
                <Text style={globalStyles.buttonText}>LOGIN</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2A2C2E'
    }
});

export default Login