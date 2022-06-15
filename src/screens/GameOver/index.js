import { Text, View } from "react-native";
import { ButtonPrimary, Card } from "../../components";
import { styles } from "./styles";

const GameOver = ({guessRounds, choise, handleRestartGame}) => {
    return(
        <View style={styles.container}>
            <Card>
                <Text style={styles.cardText}>Intentos: {guessRounds}</Text>
                <Text style={styles.cardText}>El número era: {choise}</Text>
            </Card>
            <ButtonPrimary onPressF={() => handleRestartGame()}>Reiniciar</ButtonPrimary>
        </View>
    );
}

export default GameOver;