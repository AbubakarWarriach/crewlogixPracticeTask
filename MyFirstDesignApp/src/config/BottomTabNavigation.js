import React from "react";
import { } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskThree from "../taskThree/TaskThree";
import TaskTwo from "../taskTwo/TaskTwo";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'SignUp') {
                            iconName = 'sign-out-alt';
                            size = focused ? 25 : 20;
                            color = focused ? '#e84118' : '#353b48'
                        } else if (route.name === 'Login') {
                            iconName = 'sign-in-alt';
                            size = focused ? 25 : 20;
                            color = focused ? '#e84118' : '#353b48'
                        }
                        return (
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    }
                })}
                backBehavior={{
                    tabBarActiveTintColor: '#3867d6',
                    tabBarInactiveTintColor: '#4b7bec',
                    tabBarActiveBackgroundColor: '#d1d8e0',
                    tabBarInactiveBackgroundColor: '#a5b1c2',
                }}
            >
                <BottomTab.Screen
                    name="SignUp"
                    component={TaskThree}
                    options={{
                        header: () => null
                    }}
                />
                <BottomTab.Screen
                    name="Login"
                    component={TaskTwo}
                    options={{
                        header: () => null
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer >
    )
}
export default BottomTabNavigation;