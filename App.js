import { StyleSheet, View } from 'react-native';
import StartGame from './src/screens/start-game';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});