import { Modal, View } from "react-native";
import ButtonPrimary from "../ButtonPrimary";
import { styles } from "./styles";

const CustomModal = ({ children, closeFunction, confirmText, confirmFunction }) => {
    return (
        <Modal animationType="slide" onRequestClose={() => closeFunction()} >
            <View style={styles.container}>
                {children}
                <ButtonPrimary onPressF={confirmFunction}>{confirmText}</ButtonPrimary>
            </View>
        </Modal>
    );
}

export default CustomModal;