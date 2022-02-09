import React from "react";
import { } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskThree from "../taskThree/TaskThree";
import TaskTwo from "../taskTwo/TaskTwo";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">
                <Stack.Screen
                    name='SignUp'
                    component={TaskThree}
                    options={{
                        title: 'SignUp'
                    }}
                />
                <Stack.Screen
                    name='Login'
                    component={TaskTwo}
                    options={{
                        title: 'Login'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;