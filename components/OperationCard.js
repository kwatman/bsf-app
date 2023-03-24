import {Button, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/global";

export default function OperationCard(props)  {
    
    return(
        <View style={styles.container}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={{color: 'black', textAlign: 'center',fontSize:25}} >{props.title}</Text>
            <Text style={{color: 'black', textAlign: 'center',textDecorationLine: 'underline'}}>{props.date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        padding: 5,
        margin: 10
    }
});

