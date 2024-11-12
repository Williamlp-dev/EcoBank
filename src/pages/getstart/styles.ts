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

    button: {
        backgroundColor: Color.tintColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 80,
        borderRadius: 25,
        marginTop: 0,
        marginBottom: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'PoppinsSemiBold',
        marginRight: 15,
    },
});
