import { Text } from "react-native";
import { styles } from "../ButtonDanger/styles";
import CustomButton from "../CustomButton";

const ButtonDanger = ({ children, onPressF }) => {
    return (
        <CustomButton style={styles.buttonDanger} onPressF={() => onPressF()}>
            <Text style={styles.buttonDanger__text}>
                {children}
            </Text>
        </CustomButton>
    );
}

export default ButtonDanger;