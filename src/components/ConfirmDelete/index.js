import { Modal, View, Text } from "react-native";
import { styles } from "./styles";
import ButtonDanger from "../ButtonDanger";
import ButtonSecondary from "../ButtonSecondary";

const ConfirmDelete = ({ modalVisible, setModalVisible, handleDelete, itemToDelete }) => {
    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.confirmDelete__container}>
                <View>
                    <Text style={styles.confirmDelete__text}>Estas seguro que queres eliminar {itemToDelete.value}?</Text>
                </View>
                <View>
                    <ButtonDanger onPressF={() => handleDelete(itemToDelete.id)}>
                        Eliminar
                    </ButtonDanger>
                    <ButtonSecondary onPressF={() => setModalVisible(false)}>
                        Cancelar
                    </ButtonSecondary>
                </View>
            </View>
        </Modal>
    );
}

export default ConfirmDelete;