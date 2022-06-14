import { styles } from "../ButtonDanger/styles";
import CustomButton from "../CustomButton";

const ButtonDanger = ({ children, onPressF }) => {
    return (
        <CustomButton
            styleButton={styles.buttonDanger}
            styleText={styles.buttonDanger__text}
            onPressF={onPressF}
        >
            {children}
        </CustomButton>
    );
}

export default ButtonDanger;