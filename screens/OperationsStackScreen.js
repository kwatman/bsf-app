import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Operations from "./Operations";
import AddOperation from "./AddOperation";
import Operation from "./Operation";
const OperationsStack = createNativeStackNavigator();

function OperationsStackScreen() {
    return (
        <OperationsStack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
            <OperationsStack.Screen name="OperationsList" component={Operations} />
            <OperationsStack.Screen name="AddOperation" component={AddOperation} />
            <OperationsStack.Screen name="Operation" component={Operation} />
        </OperationsStack.Navigator>
    );
}
export default OperationsStackScreen

