import { StyleSheet } from "react-native";
import { secondaryText, themeBg } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
        padding: 30,
        alignItems: "center",
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
    },
    text: {
        color: secondaryText,
        fontSize: 25,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    modalText:{
        fontSize: 20,
        marginBottom: 10,
    },
});