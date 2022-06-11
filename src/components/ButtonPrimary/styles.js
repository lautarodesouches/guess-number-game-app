import { StyleSheet } from "react-native";
import { primaryBg, primaryText } from "../../../constants/colors";

export const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: primaryBg,
  },
  buttonPrimary__text: {
    color: primaryText,
    textAlign: 'center',
    fontSize: 17,
  },
});