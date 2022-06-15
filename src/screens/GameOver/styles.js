import { StyleSheet } from "react-native";
import { secondaryText, themeBg } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: themeBg,
        flex: 1,
        padding: 30,
        justifyContent: "center",
    },
    cardText: {
        color: secondaryText,
        fontSize: 23,
        paddingVertical: 10,
    }
});