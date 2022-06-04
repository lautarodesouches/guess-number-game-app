import { Text } from "react-native";
import { styles } from "../ButtonSecondary/styles";
import CustomButton from "../CustomButton";

const ButtonSecondary = ({ children, onPressF }) => {
    return (
        <CustomButton style={styles.buttonSecondary} onPressF={() => onPressF()}>
            <Text style={styles.buttonSecondary__text}>
                {children}
            </Text>
        </CustomButton>
    );
}

export default ButtonSecondary;