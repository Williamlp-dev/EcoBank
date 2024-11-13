import Color from "@/src/constants/Color";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BgColor,
        paddingHorizontal: 20,
    },

    logo: {
        width: 100,
        height: 100,
        top: -20,
    },

    title: {
        fontSize: 24,
        fontFamily: 'PoppinsSemiBold',
        color: Color.white,
        paddingHorizontal: 32,
        textAlign: 'center',
        marginBottom: 10,
        letterSpacing: 1,
    },


});
