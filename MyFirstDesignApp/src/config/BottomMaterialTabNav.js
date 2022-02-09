import React from "react";
import { } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TaskThree from "../taskThree/TaskThree";
import TaskTwo from "../taskTwo/TaskTwo";

const MaterialBottomTab = createMaterialBottomTabNavigator();

const BottomMaterialTabNav = () => {
    return (
        <NavigationContainer
        // screenOptions={({ route }) => ({
        //     tabBarIcon: ({ focused, color, size }) => {
        //         let iconName;
        //         if (route.name === 'SignUp') {
        //             iconName = 'sign-out-alt';
        //             size = focused ? 25 : 20;
        //             color = focused ? '#e84118' : '#353b48'
        //         } else if (route.name === 'Login') {
        //             iconName = 'sign-in-alt';
        //             size = focused ? 25 : 20;
        //             color = focused ? '#e84118' : '#353b48'
        //         }
        //         return (
        //             <FontAwesome5
        //                 name={iconName}
        //                 size={size}
        //                 color={color}
        //             />
        //         )
        //     }
        // })}
        // tabBarActiveTintColor='#3867d6'
        // tabBarInactiveTintColor='#4b7bec'
        // tabBarActiveBackgroundColor='#d1d8e0'
        // tabBarInactiveBackgroundColor='#a5b1c2'
        >
            <MaterialBottomTab.Navigator
                initialRouteName="SignUp"
                activeColor="#f0edf6"
                inactiveColor="#bdc3c7"
                barStyle={{
                    backgroundColor: '#e74c3c',
                }}
            >
                <MaterialBottomTab.Screen
                    name="SignUp"
                    component={TaskThree}
                />
                <MaterialBottomTab.Screen
                    name="Login"
                    component={TaskTwo}
                />
            </MaterialBottomTab.Navigator>
        </NavigationContainer>
    )
}
export default BottomMaterialTabNav;