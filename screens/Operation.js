import {Button, Pressable, SafeAreaView, ScrollView, Text, View,RefreshControl} from "react-native";
import {globalStyles} from "../styles/global";
import Ionicons from "react-native-vector-icons/Ionicons";

function Operation({ route,navigation })  {

    const { operation,date,time } = route.params;

    return(
        <SafeAreaView style={globalStyles.baseContainer}>
             <ScrollView style={{width: '100%', paddingLeft: 20, paddingRight: 20}} contentContainerStyle={{ alignItems: 'center'}}>
                <Text style={globalStyles.title} >{operation.Title}</Text>
                <View>
                    <View style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center' }} >
                        <Ionicons name="calendar" size={30} color="white" style={{marginRight: 5}} />
                        <Text style={{color: 'white', textAlign: 'center'}}>{date}</Text>
                    </View>
                    <View style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center' }} >
                        <Ionicons name="time" size={30} color="white" style={{marginRight: 5}} />
                        <Text style={{color: 'white', textAlign: 'center'}}>{time}</Text>
                    </View>
                </View>

                <Text style={globalStyles.whiteText} > Sitrep </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                        width: '80%'
                    }}
                />
                <Text style={globalStyles.whiteText} > {operation.Description} </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Operation;