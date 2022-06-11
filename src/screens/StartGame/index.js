import { View, Text, TextInput } from "react-native";
import { ButtonDanger, ButtonPrimary } from "../../components";
import Card from "../../components/Card";
import { styles } from "./styles";

const StartGame = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <Card>
                <Text style={styles.text}>Elija un número</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor='#e1e1e1'
                    placeholder={'Ej: ' + Math.round(Math.random() * 100)}
                    keyboardType='numeric' />
                <View style={styles.buttonContainer}>
                    <ButtonDanger onPressF={() => { }}>
                        Limpiar
                    </ButtonDanger>
                    <ButtonPrimary onPressF={() => { }}>
                        Confirmar
                    </ButtonPrimary>
                </View>
            </Card>
        </View>
    );
}

export default StartGame;