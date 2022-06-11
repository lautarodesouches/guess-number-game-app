import { View, Text, TextInput, Button } from "react-native";
import { secondaryText } from "../../../constants/colors";
import { styles } from "./styles";

const StartGame = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Elija un número</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={secondaryText}
                    placeholder={(Math.round(Math.random()*100)).toString()}
                    keyboardType='numeric' />
                <View style={styles.buttonContainer}>
                    <Button title="Limpiar" onPress={() => {}} />
                    <Button title="Confirmar" onPress={() => {}} />
                </View>
            </View>
        </View>
    );
}

export default StartGame;