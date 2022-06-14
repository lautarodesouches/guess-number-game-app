import { styles } from "../ButtonSecondary/styles";
import CustomButton from "../CustomButton";

const ButtonSecondary = ({ children, onPressF }) => {
    return (
        <CustomButton
            styleButton={styles.buttonSecondary}
            styleText={styles.buttonSecondary__text}
            onPressF={onPressF}
        >
            {children}
        </CustomButton>
    );
}

export default ButtonSecondary;