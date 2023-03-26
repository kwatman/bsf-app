import React, {useContext, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import notifee, {  TriggerType,TimeUnit  } from '@notifee/react-native';

import Home from "./screens/Home";
import Login from "./screens/Login";
import Header from "./components/Header";
import AuthContext from "./context/AuthContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import Operations from "./screens/Operations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OperationsStackScreen from "./screens/OperationsStackScreen";
import Profile from './screens/Profile';
import messaging from '@react-native-firebase/messaging';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let channelId;
async function onAppBootstrap() {
    channelId = await notifee.createChannel({
        id: 'ops',
        name: 'opsc'
    });
    console.log(channelId)
}

async function onMessageReceived(message) {
    console.log(message.notification)
    await notifee.displayNotification({
        title: message.notification.title,
        body: message.notification.body,
        android: {
          channelId
        },
    });
}
  
messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

onAppBootstrap()
function App() {
    const {auth,doLogin} = useContext(AuthContext)

    return auth ? (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home'
                    }
                    if (route.name === 'Operations') {
                        iconName = 'game-controller'
                    }
                    if (route.name === 'Profile') {
                        iconName = 'person-circle'
                    }
                    // You can return any component that you like here
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: true,
                tabBarStyle: {
                    backgroundColor: '#1E1E1E',
                    borderTopWidth: 0,
                }
            })}>
                <Tab.Screen name="Home" component={Home} options={{header: (props) => <Header title="Home" {...props}/>}}/>
                <Tab.Screen name="Operations" component={OperationsStackScreen} options={{header: (props) => <Header title="Operations" {...props}/>}}/>
                <Tab.Screen name="Profile" component={Profile} options={{header: (props) => <Header title="Profile" {...props}/>}}/>
            </Tab.Navigator>
        </NavigationContainer>
    ): (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" 
                              component={Login} 
                              options={{header: (props) => <Header title="Login" {...props}/>}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;
