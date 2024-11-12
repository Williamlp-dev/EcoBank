import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/types"; // Importe o tipo de navegação
import Home from "../pages/home";
import GetStart from "../pages/getstart";
import Steps from "../pages/steps";
import Login from "../pages/login";
import Register from "../pages/register";
import Sucess from "../pages/sucess";

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
    return (
        <Stack.Navigator
            initialRouteName="GetStart"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="GetStart"
                component={GetStart}
            />
            <Stack.Screen
                name="Steps"
                component={Steps}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Sucess"
                component={Sucess}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    );
}
