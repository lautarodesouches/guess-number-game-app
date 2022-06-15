import { StyleSheet } from "react-native";
import { primaryBg, primaryText } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '10%',
        backgroundColor: primaryBg,
    },
    text: {
        color: primaryText,
        fontSize: 25,
        paddingBottom: 20,
        fontFamily: 'open-sans-light',
    }
});