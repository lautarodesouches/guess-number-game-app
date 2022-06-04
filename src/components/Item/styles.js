import { StyleSheet } from "react-native";
import { secondaryBg } from "../../../constants/colors";

export const styles = StyleSheet.create({
  list__item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  list__text: {
    fontSize: 20,
  },
  list__close: {
    padding: 5,
    backgroundColor: secondaryBg,
    borderRadius: 100,
    width: '10%',
  },
  list__closeText: {
    textAlign: 'center',
    color: '#fff',
  },
});