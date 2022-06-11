import { StyleSheet } from "react-native";
import { secondaryBg } from "../../../constants/colors";

export const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        alignItems: "center",
        backgroundColor: secondaryBg,
        borderRadius: 5,
        padding: '10%',
        marginVertical: 30,
        justifyContent: 'space-evenly',
        width: '100%',
    }
});