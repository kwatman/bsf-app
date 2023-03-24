import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    button:{
        backgroundColor: '#D0AE34',
        width: '70%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonNoWidth:{
        backgroundColor: '#D0AE34',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black'
    },
    textInput: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    multilineInput: {
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    baseContainer: {
        paddingTop: 20,
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2A2C2E'
    }
});