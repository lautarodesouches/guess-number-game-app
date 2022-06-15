import { useState, useRef, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import { ButtonPrimary, Card } from "../../components";
import { styles } from "./styles";

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

const GameScreen = ({ userNumber, gameOver }) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userNumber));

    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const handleNextGuess = direction => {

        const lower = direction === 'lower';
        const greater = direction === 'greater';

        if ((lower && currentGuess < userNumber) || (greater && currentGuess > userNumber)) {
            Alert.alert('No mientas', 'Eso no es verdad :|', [{ text: 'Disculpa!', style: 'cancel' }]);
            return;
        }

        if (lower) {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);

        setCurrentGuess(nextNumber);

        setRounds(current => current + 1);

    }

    useEffect(() => {
        if (currentGuess == userNumber) gameOver(rounds);
    }, [currentGuess, userNumber, gameOver]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>La suposición del oponente:</Text>
            <Card>
                <Text style={styles.number}>{currentGuess}</Text>
                <View style={styles.buttonContainer}>
                    <ButtonPrimary onPressF={() => handleNextGuess('lower')}>Menor</ButtonPrimary>
                    <ButtonPrimary onPressF={() => handleNextGuess('greater')}>Mayor</ButtonPrimary>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;