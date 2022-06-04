import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, FlatList, Modal } from 'react-native';
import { primaryBg, primaryText, themeBg } from './constants/colors.js';
import { ButtonPrimary, ConfirmDelete, Item } from './src/components/index';

export default function App() {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({});

  const handleSumbit = () => {
    // Clear input value
    setTask('');
    // Add task to list
    task && setTaskList([...taskList, { id: Math.random(), value: task }]);
  }

  const ListHeaderComponent = () => {
    return <Text style={styles.list__title}>Tareas:</Text>
  }

  const handleModal = (item) => {
    setItemToDelete(item);
    setModalVisible(true);
  }

  const handleDelete = (id) => {
    setTaskList(taskList.filter(item => item.id !== id));
    setModalVisible(false);
  }

  const renderItem = ({ item }) => <Item item={item} handleModal={handleModal} />

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
        <TextInput style={styles.textInput} placeholder="Escribir tarea" value={task} autoCapitalize='words' onChangeText={e => setTask(e)} />
        <ButtonPrimary onPressF={() => handleSumbit()}>
          Agregar
        </ButtonPrimary>
      </View>
      <ConfirmDelete handleDelete={handleDelete} itemToDelete={itemToDelete} modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
  list__title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});