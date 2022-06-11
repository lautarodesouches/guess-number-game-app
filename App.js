import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components';
import GameScreen from './src/screens/GameScreen';
import StartGame from './src/screens/StartGame';

export default function App() {

  const [userNumber, setUserNumber] = useState('');
  const [headerMessage, setHeaderMessage] = useState('Bienvenido!');

  const handleStartGame = selectedNumber => setUserNumber(selectedNumber);

  let content = <StartGame onStartGame={handleStartGame} />

  if (userNumber) content = <GameScreen userNumber={userNumber} />;
  if (userNumber && headerMessage === 'Bienvenido!') setHeaderMessage('Adivina el número!');

  return (
    <View style={styles.container}>
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