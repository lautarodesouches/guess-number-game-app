import { styles } from "../ButtonPrimary/styles";
import CustomButton from "../CustomButton";

const ButtonPrimary = ({ children, onPressF }) => {
    return (
        <CustomButton
            styleButton={styles.buttonPrimary}
            styleText={styles.buttonPrimary__text}
            onPressF={onPressF}
        >
            {children}
        </CustomButton>
    );
}

export default ButtonPrimary;