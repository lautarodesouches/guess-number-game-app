import { Modal, View } from "react-native";
import { styles } from "./styles";

const CustomModal = ({ children, closeFunction }) => {
    return (
        <Modal animationType="slide" onRequestClose={() => closeFunction()} >
            <View style={styles.container}>
                {children}
            </View>
        </Modal>
    );
}

export default CustomModal;