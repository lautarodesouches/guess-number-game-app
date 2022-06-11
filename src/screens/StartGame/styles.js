import { StyleSheet } from "react-native";
import { secondaryBg, secondaryText, themeBg } from "../../../constants/colors";

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
        fontSize: 20,
        textAlign: 'center',
    },
    input: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        color: secondaryText,
        fontSize: 20,
        marginHorizontal: 'auto',
        marginTop: 40,
        maxWidth: '50%',
        textAlign: 'center',
        width: 300,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});