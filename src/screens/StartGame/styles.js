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
        fontSize: 20,
    },
    inputContainer: {
        alignItems: "center",
        backgroundColor: secondaryBg,
        borderRadius: 5,
        padding: '5%',
        marginVertical: 30,
        justifyContent: 'space-evenly',
        width: '100%',
    },
    text: {
        color: secondaryText,
        fontSize: 20,
        textAlign: 'center',
    },
    input: {
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
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});