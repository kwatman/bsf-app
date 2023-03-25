import {Button, Pressable, SafeAreaView, ScrollView, Text, View,RefreshControl} from "react-native";
import {globalStyles} from "../styles/global";
function Operation({ route,navigation })  {

    const { operation } = route.params;

    return(
        <SafeAreaView style={globalStyles.baseContainer}>
             <ScrollView style={{width: '100%', paddingLeft: 20, paddingRight: 20}} contentContainerStyle={{ alignItems: 'center'}}>
                <Text style={globalStyles.title} >{operation.Title}</Text>
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