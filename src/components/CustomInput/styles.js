import { StyleSheet } from "react-native";
import { secondaryText } from "../../../constants/colors";

export const styles = StyleSheet.create({
    input: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        color: secondaryText,
        fontSize: 20,
        marginHorizontal: 'auto',
        marginTop: 30,
        maxWidth: '50%',
        textAlign: 'center',
        width: 300,
    },
});