import { View, Text, TextInput} from "react-native";
import { ButtonDanger, ButtonPrimary } from "../../components";
import { styles } from "./styles";

const StartGame = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Elija un número</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor='#e1e1e1'
                    placeholder={'Ej: ' + Math.round(Math.random()*100)}
                    keyboardType='numeric' />
                <View style={styles.buttonContainer}>
                    <ButtonDanger onPressF={() => {}}>
                        <Text>Limpiar</Text>
                    </ButtonDanger>
                    <ButtonPrimary onPressF={() => {}}>
                        <Text>Confirmar</Text>
                    </ButtonPrimary>
                </View>
            </View>
        </View>
    );
}

export default StartGame;