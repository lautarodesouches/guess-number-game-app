import { StyleSheet } from "react-native";
import { primaryBg, primaryText } from "../../../constants/colors";

export const styles = StyleSheet.create({
  confirmDelete__container: {
    flex: 1,
    padding: 50,
    justifyContent: 'space-around',
    backgroundColor: primaryBg,
  },
  confirmDelete__text: {
    textAlign: 'center',
    color: primaryText,
    fontSize: 25,
  },
});