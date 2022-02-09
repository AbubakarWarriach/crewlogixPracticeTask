import React from "react";
import { } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TaskThree from "../taskThree/TaskThree";
import TaskTwo from "../taskTwo/TaskTwo";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="SignUp"
                    component={TaskThree}
                />
                <Tab.Screen
                    name="Login"
                    component={TaskTwo}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TopTabNavigation;