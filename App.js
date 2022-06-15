import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { primaryBg } from './constants/colors';
import { Header } from './src/components';
import GameScreen from './src/screens/GameScreen';
import StartGame from './src/screens/StartGame';

export default function App() {

  const [headerMessage, setHeaderMessage] = useState('Bienvenido!');

  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
  });
  const [userNumber, setUserNumber] = useState();

  if (!loaded) return <ActivityIndicator size="large" color={'white'} />;

  const handleStartGame = selectedNumber => setUserNumber(selectedNumber);

  let content = <StartGame onStartGame={handleStartGame} />

  if (userNumber) content = <GameScreen userNumber={userNumber} />;
  if (userNumber && headerMessage === 'Bienvenido!') setHeaderMessage('Adivina el número!');

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