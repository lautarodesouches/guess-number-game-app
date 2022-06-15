import { Text, View } from "react-native";
import { ButtonPrimary, Card } from "../../components";
import { styles } from "./styles";

const GameOver = ({ guessRounds, choise, handleRestartGame, highScore }) => {

    const newHighScore = guessRounds === highScore;

    return (
        <View style={styles.container}>
            <View style={styles.highScoreContainer}>
                {newHighScore && <Text style={styles.highScoreText}>Puntuación Alta!</Text>}
                <Text style={styles.highScoreText}>Juego más largo: {highScore} rondas</Text>
            </View>
            <Card>
                <Text style={styles.cardText}>Tu número era: {choise}</Text>
                <Text style={styles.cardText}>Duración del juego: {guessRounds} rondas</Text>
            </Card>
            <ButtonPrimary onPressF={() => handleRestartGame()}>Reiniciar</ButtonPrimary>
        </View>
    );
}

export default GameOver;