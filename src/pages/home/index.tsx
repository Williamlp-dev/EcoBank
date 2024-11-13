import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { style } from "./styles";
import { Back, Logo, } from "@/src/constants/Icons";




export default function Home() {

    return (
        <View style={style.container}>
            <View style={style.logo}>
                <Logo width={100} height={100} />
            </View>

            <Text style={style.title}>Home</Text>
        </View>
    );
}
