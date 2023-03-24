import {StyleSheet, Text, View} from "react-native";

export default function Header(props){
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 5,
        backgroundColor: '#1E1E1E',
        width: '100%'
    },
    text: {
        color: '#5B5B5B'
    }
})