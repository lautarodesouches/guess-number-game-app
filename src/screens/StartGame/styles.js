import { StyleSheet } from "react-native";
import { secondaryText, themeBg, themeText } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: themeBg,
        flex: 1,
        justifyContent: "center",
        padding: 30,
    },
    title: {
        color: themeText,
        fontSize: 25,
        textAlign: 'center',
    },
    text: {
        color: secondaryText,
        fontSize: 25,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        width: '100%',
    },
    modalText:{
        fontSize: 20,
        marginBottom: 10,
    },
});