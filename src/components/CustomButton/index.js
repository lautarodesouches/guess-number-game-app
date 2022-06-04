import { TouchableOpacity } from "react-native";
import { styles } from "../CustomButton/styles";

const CustomButton = ({ children, onPressF, style }) => {
  return (
    <TouchableOpacity style={[styles.customButton, { ...style }]} onPress={() => onPressF()}>
      {children}
    </TouchableOpacity>
  );
}

export default CustomButton;