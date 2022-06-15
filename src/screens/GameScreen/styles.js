import { StyleSheet } from "react-native";
import { secondaryText, themeBg, themeText } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: themeBg,
        flex: 1,
        padding: 30,
        justifyContent: "center",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    text: {
        color: themeText,
        fontSize: 20,
        marginTop: 10,
    },
    number: {
        color: secondaryText,
        fontSize: 25,
        marginBottom: 10,
    }
});