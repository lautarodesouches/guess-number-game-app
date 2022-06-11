import { View, Text } from "react-native";
import { Header } from "../../components";
import { styles } from "./styles";

const StartGame = () => {
    return(
        <View style={styles.container}>
            <Header title={'Bienvenidos!'} />
            <Text>
                Start Game
            </Text>
        </View>
    );
}

export default StartGame;