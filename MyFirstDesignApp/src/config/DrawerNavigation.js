import React from "react";
import { } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TaskThree from "../taskThree/TaskThree";
import TaskTwo from "../taskTwo/TaskTwo";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRoute="SignUp"
            >
                <Drawer.Screen name="SignUp" component={TaskThree} />
                <Drawer.Screen name="Login" component={TaskTwo} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default DrawerNavigation;