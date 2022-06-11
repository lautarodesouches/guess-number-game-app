import { Text } from "react-native";
import { styles } from "../ButtonPrimary/styles";
import CustomButton from "../CustomButton";

const ButtonPrimary = ({ children, onPressF }) => {
    return (
        <CustomButton style={styles.buttonPrimary} onPressF={() => onPressF()}>
            <Text style={styles.buttonPrimary__text}>
                {children}
            </Text>
        </CustomButton>
    );
}

export default ButtonPrimary;