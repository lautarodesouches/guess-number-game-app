import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, Modal } from "react-native";
import { ButtonDanger, ButtonPrimary, Card, CustomInput, CustomModal } from "../../components";
import { styles } from "./styles";

const StartGame = () => {

    const [inputValue, setInputValue] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [error, setError] = useState(false);

    const handleInput = value => setInputValue(value.replace(/[^0-9]/g, ""));

    const handleCleanInput = () => setInputValue('');

    const handleConfirmInput = () => {
        if (isNaN(inputValue) || inputValue <= 0 || inputValue > 99) {
            setError('Número no valido!')
            setInputValue('');
            return;
        }
        setSelectedNumber(parseInt(inputValue));
        setInputValue('');
        setConfirmed(true);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Comenzar Juego</Text>
                <Card>
                    <Text style={styles.text}>Elija un número</Text>
                    <CustomInput
                        style={styles.input}
                        placeholderTextColor='#e1e1e1'
                        placeholder={'Ej: ' + Math.round(Math.random() * 100)}
                        keyboardType='numeric'
                        autoCapitali
                        maxLength={2}
                        autoCapitalize='none'
                        autoCorrect={false}
                        blurOnSubmit
                        onChangeText={handleInput}
                        value={inputValue}
                    />
                    <View style={styles.buttonContainer}>
                        <ButtonDanger onPressF={handleCleanInput}>
                            Limpiar
                        </ButtonDanger>
                        <ButtonPrimary onPressF={handleConfirmInput}>
                            Confirmar
                        </ButtonPrimary>
                    </View>
                </Card>
                {
                    error
                        ?
                        <CustomModal closeFunction={() => setError()}>
                            <Text style={styles.modalText}>{error}</Text>
                            <ButtonPrimary onPressF={() => setError()}>Entendido</ButtonPrimary>
                        </CustomModal>
                        :
                        null
                }
                {
                    confirmed
                        ?
                        <CustomModal closeFunction={() => setConfirmed(false)}>
                            <Text style={styles.modalText}>El número que seleccionaste es: {selectedNumber}</Text>
                            <ButtonPrimary onPressF={() => null}>Empezar Juego</ButtonPrimary>
                        </CustomModal>
                        :
                        null
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGame;