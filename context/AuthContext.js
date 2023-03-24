import {createContext, useContext, useEffect, useState} from "react";
import AppSettings from "../AppSettings";
const AuthContext = createContext({});
import jwtDecode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function AuthProvider({children}){
    const [auth, setAuth] = useState(null);
    const [isReady, setIsReady] = useState(false);

    let urlPrefix = AppSettings.serverUrl

    const doLogin = async (token) => {
        let decoded = jwtDecode(token)

        let newAuth = {
            token: token,
            data: decoded
        }
        await AsyncStorage.setItem('token', token)
        let response = await fetch(urlPrefix + '/api/users/me?populate=role', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
        let user = await response.json()
        newAuth.role = user.role.name
        console.log(newAuth)
        setAuth(newAuth);

    }

    useEffect(() => {
        async function loadAuth(){
            try {
                let token = await AsyncStorage.getItem('token')

                if(token !== null && token){
                    await doLogin(token)
                }
                setIsReady(true)
            } catch (e) {
                console.log(e)
            }
        }
        loadAuth()
    }, [])
    return(
        <AuthContext.Provider  value={{auth,setAuth,doLogin}}>
            {isReady ? children : null}
        </AuthContext.Provider>
    )
}



export default AuthContext