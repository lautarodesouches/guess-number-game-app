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
    text:{
        color: themeText,
        fontSize: 25,
    },
    cardText: {
        color: secondaryText,
        fontSize: 20,
        paddingVertical: 5,
    },
    highScoreContainer: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'crimson',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
    },
    highScoreText: {
        fontSize: 20,
        paddingVertical: 5,
        color: 'white',
    }
});