import { Text, TouchableOpacity } from "react-native";
import { styles } from "../CustomButton/styles";

const CustomButton = ({ children, onPressF, styleButton, styleText }) => {
  return (
    <TouchableOpacity style={[styles.customButton, { ...styleButton }]} onPress={onPressF}>
      <Text style={[styles.text, { ...styleText }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;