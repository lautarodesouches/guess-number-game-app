import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../Item/styles";

const Item = ({ item, handleModal }) => {
    return (
        <View style={styles.list__item} key={item.id}>
            <Text style={styles.list__text}>- {item.value}</Text>
            <TouchableOpacity style={styles.list__close} onPress={() => handleModal(item)}>
                <Text style={styles.list__closeText}>X</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Item;