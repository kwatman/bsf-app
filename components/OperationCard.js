import {Button, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/global";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function OperationCard(props)  {
    
    return(
        <View style={styles.container}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={{color: 'black', textAlign: 'center',fontSize:25}} >{props.title}</Text>
            <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginTop: 5,
                        marginBottom: 5,
                        width: '80%'
                    }}
                />
            <View>
                <View style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center' }} >
                    <Ionicons name="calendar" size={30} color="black" style={{marginRight: 5}} />
                    <Text style={{color: 'black', textAlign: 'center'}}>{props.date}</Text>
                </View>
                <View style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center' }} >
                    <Ionicons name="time" size={30} color="black" style={{marginRight: 5}} />
                    <Text style={{color: 'black', textAlign: 'center'}}>{props.time}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        padding: 5,
        margin: 10,
        alignItems: 'center'
    }
});

