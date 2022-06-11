import { useState } from "react";
import { Text, View } from "react-native";
import { ButtonPrimary, Card } from "../../components";
import { styles } from "./styles";

const GameScreen = ({ userNumber }) => {

    const generateRandomNumber = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        if (randomNumber === exclude) {
            return generateRandomNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    };

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userNumber));

    return (
        <View style={styles.container}>
            <Text style={styles.text}>La suposición del oponente:</Text>
            <Card>
                <Text style={styles.number}>{currentGuess}</Text>
                <View style={styles.buttonContainer}>
                    <ButtonPrimary onPressF={() => { }}>Menor</ButtonPrimary>
                    <ButtonPrimary onPressF={() => { }}>Mayor</ButtonPrimary>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;