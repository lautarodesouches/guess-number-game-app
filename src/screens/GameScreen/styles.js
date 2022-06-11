import { StyleSheet } from "react-native";
import { secondaryText, themeBg } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
        padding: 30,
        alignItems: "center",
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text: {
        fontSize: 20,
        marginTop: 10,
    },
    number: {
        fontSize: 20,
        marginBottom: 10,
        color: secondaryText,
    }
});