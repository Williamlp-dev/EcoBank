import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { style } from "@/src/pages/steps/styles";
import { Logo, Arrow } from "@/src/constants/Icons";
import Onboarding from "@/src/components/Onboarding";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/types";


type GetStartNavigationProp = StackNavigationProp<RootStackParamList, "GetStart">;

export default function Steps() {
    const navigation = useNavigation<GetStartNavigationProp>();

    const goToNextScreen = () => {
        navigation.navigate("Register");
    };

    return (
        <View style={style.container}>
            <View style={style.logo}>
                <Logo width={100} height={100} />
            </View>

            <TouchableOpacity onPress={goToNextScreen}>

            </TouchableOpacity>
        </View>
    );
}
