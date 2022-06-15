import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { primaryBg, themeText } from './constants/colors';
import { Header } from './src/components';
import GameOver from './src/screens/GameOver';
import GameScreen from './src/screens/GameScreen';
import StartGame from './src/screens/StartGame';

export default function App() {

  const [guessRounds, setGuessRounds] = useState(0);
  const [headerMessage, setHeaderMessage] = useState('Bienvenido!');
  const [userNumber, setUserNumber] = useState();

  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
  });

  if (!loaded) return <ActivityIndicator size="large" color={themeText} />;

  const handleStartGame = selectedNumber => setUserNumber(selectedNumber);
  const handleGameOver = rounds => setGuessRounds(rounds);
  const handleRestartGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
    setHeaderMessage('Podrás sobrevivir más rondas?')
  };

  let content = <StartGame onStartGame={handleStartGame} />

  if (userNumber && guessRounds === 0){
    content = <GameScreen userNumber={userNumber} handleGameOver={handleGameOver} />;
    if (headerMessage !== 'Adivina el número!') setHeaderMessage('Adivina el número!');
  }

  if(guessRounds > 0){
    content = <GameOver choise={userNumber} handleRestartGame={handleRestartGame} guessRounds={guessRounds} />;
    if (headerMessage === 'Adivina el número!') setHeaderMessage('Terminó el juego!');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={primaryBg} />
      <Header title={headerMessage} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});