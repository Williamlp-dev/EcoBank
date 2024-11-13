import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/types";
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
                gestureEnabled: true,
                transitionSpec: {
                    open: { animation: 'timing', config: { duration: 300 } },
                    close: { animation: 'timing', config: { duration: 300 } },
                },
            }}
        >
            <Stack.Screen
                name="GetStart"
                component={GetStart}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />

            <Stack.Screen
                name="Steps"
                component={Steps}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-layouts.screen.width, 0], // Animação de translação horizontal
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />

            <Stack.Screen
                name="Success"
                component={Sucess}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />
        </Stack.Navigator>
    );
}