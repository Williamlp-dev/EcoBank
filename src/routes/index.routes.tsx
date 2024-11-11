import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";
import GetStart from "../pages/getstart";

export default function Routes() {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="GetStart"
            screenOptions={{
                headerShown: false
            }}

        >
            <Stack.Screen
                name="GetStart"
                component={GetStart}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />

        </Stack.Navigator>
    )

}