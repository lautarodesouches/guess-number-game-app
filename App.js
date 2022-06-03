import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import { useState } from 'react';
import { primaryBg, primaryText, themeBg } from './constants/colors.js';

export default function App() {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleSumbit = () => {
    // Clear task
    setTask('');
    // Add task to list
    setTaskList([...taskList, { id: Math.random(), value: task }]);
  }

  const ListHeaderComponent = () => {
    return <Text style={styles.list__title}>Tareas:</Text>
  }

  const renderItem = ({ item }) => {
    return (
      <View styke={styles.list__item} key={item.id}>
        <Text styke={styles.list__text}>{item.value}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={taskList}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          style={styles.list}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Escribir tarea" value={task} onChangeText={e => setTask(e)} />
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => handleSumbit()}>
          <Text style={styles.buttonPrimary__text}>Agregar</Text>
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
  buttonPrimary__text: {
    color: primaryText,
    fontSize: 17,
    textAlign: 'center',
  },
  list__title: {
    fontSize: 20,
    marginBottom: 10,
  },
  list__item: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  list__text: {
    fontSize: 15,
  }
});