import AuthContext from '../context/AuthContext';
import React, {useContext} from "react";
import AppSettings from "../AppSettings";

export default function useFetch(){
    const {auth, doLogin} = useContext(AuthContext);

    let urlPrefix = AppSettings.serverUrl

    const doFetch = async (method,url,body) => {
        let token = auth ?  auth.token  : undefined
        if(body != null) console.log('making a request with body: ' + body)
        console.log('Making request to ' + urlPrefix + url)
        const response = await fetch(urlPrefix + url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  token ? 'Bearer ' + token : '',
            },
            body: body,
          });
        let res = await response.json();
        console.log("request done results: ")
        console.log(res);
        return res
}
    return [doFetch]
}