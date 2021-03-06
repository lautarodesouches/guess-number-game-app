import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    customButton: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontFamily: 'open-sans-semibold',
        textAlign: 'center',
        fontSize: 17,
    },
});