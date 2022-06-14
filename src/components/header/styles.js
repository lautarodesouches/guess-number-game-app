import { StyleSheet } from "react-native";
import { primaryBg, primaryText } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '15%',
        minHeight: 125,
        backgroundColor: primaryBg,
        marginBottom: 25,
    },
    text: {
        color: primaryText,
        fontSize: 25,
        paddingBottom: 20,
        fontFamily: 'open-sans-light',
    }
});