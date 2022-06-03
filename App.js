import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import { useState } from 'react';
import { primaryBg, primaryText, themeBg } from './constants/colors.js';

export default function App() {

  const [value, setValue] = useState('Valor')

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text>{ value }</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Escribir tarea" />
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => {setValue('Otro valor')}}>
          <Text style={styles.buttonPrimary__Text}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: themeBg,
    flex: 1,
    justifyContent: 'space-between',
    padding: 50,
  },
  list: {
    marginTop: 20,
  },
  textInput: {
    borderColor: primaryBg,
    borderBottomWidth: 1,
    fontSize: 20,
  },
  buttonPrimary: {
    backgroundColor: primaryBg,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  buttonPrimary__Text: {
    color: primaryText,
    fontSize: 15,
    textAlign: 'center',
  }
});