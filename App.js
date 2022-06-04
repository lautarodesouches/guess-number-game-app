import { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Modal } from 'react-native';
import { primaryBg, primaryText, secondaryBg, themeBg } from './constants/colors.js';

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

  const handleDelete = (id) => {
    setTaskList(taskList.filter( item => item.id !== id));
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.list__item} key={item.id}>
        <Text style={styles.list__text}>- {item.value}</Text>
        <TouchableOpacity style={styles.list__close} onPress={() => handleDelete(item.id)}>
          <Text style={styles.list__closeText}>X</Text>
        </TouchableOpacity>
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list__item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  list__text: {
    fontSize: 20,
  },
  list__close: {
    padding: 5,
    backgroundColor: secondaryBg,
    borderRadius: 100,
    width: '10%',
  },
  list__closeText: {
    textAlign: 'center',
    color: '#fff',
  }
});