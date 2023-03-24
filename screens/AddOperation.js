import {Button, Pressable, ScrollView, Text, TextInput, View,  RefreshControl,} from "react-native";
import {globalStyles} from "../styles/global";
import React, {useContext} from "react";
import DatePicker from "react-native-date-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppSettings from "../AppSettings";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";

function AddOperation({ navigation })  {
    const [operationName, setOperationName] = React.useState("");
    const [sitrep, setSitrep] = React.useState("");
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    const {auth,doLogin} = useContext(AuthContext)
    const [doFetch] = useFetch()

    

    const saveOperation = async() => {
        let response =  await doFetch('POST','/api/operations', JSON.stringify({
            data: {
                Title: operationName,
                Description: sitrep,
                date: date,
            }
        }))
        console.log(response)
        navigation.navigate('OperationsList')
    }
    
    return(
        <View style={globalStyles.baseContainer}>
            <ScrollView style={{width: '100%'}} contentContainerStyle={{ alignItems: 'center'}} >
                <TextInput
                    style={globalStyles.textInput}
                    onChangeText={setOperationName}
                    value={operationName}
                    placeholder="Operation name"
                />
                <View style={{ flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center', width: '80%'}}>
                    <Pressable style={{...globalStyles.buttonNoWidth, alignSelf: 'center'}} onPress={() => setOpen(true)}>
                        <Ionicons name="time-outline" size={30}  color="black" />
                    </Pressable>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <Text style={{color: 'white'}}>{date.toLocaleString()}</Text>
                </View>
                
                
                <TextInput
                    multiline
                    style={globalStyles.multilineInput}
                    onChangeText={setSitrep}
                    value={sitrep}
                    placeholder="sitrep"
                />
                

                <Pressable style={globalStyles.button} onPress={saveOperation} >
                    <Text style={globalStyles.buttonText}>Save</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}

export default AddOperation