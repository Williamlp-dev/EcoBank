import Color from "@/src/constants/Color";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BgColor,
    },

    logo: {
        width: 100,
        height: 100,
        paddingTop: 20,
    },

});
