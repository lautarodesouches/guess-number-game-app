import { StyleSheet } from "react-native";
import { secondaryBg, secondaryText } from "../../../constants/colors";

export const styles = StyleSheet.create({
  buttonSecondary: {
    backgroundColor: secondaryBg,
  },
  buttonSecondary__text: {
    color: secondaryText,
    textAlign: 'center',
    fontSize: 17,
  },
});