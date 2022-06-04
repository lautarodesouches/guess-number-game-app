import { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Modal } from 'react-native';
import { primaryBg, primaryText, secondaryBg, secondaryText, themeBg } from './constants/colors.js';

export default function App() {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({});

  const handleSumbit = () => {
    // Clear task
    setTask('');
    // Add task to list
    setTaskList([...taskList, { id: Math.random(), value: task }]);
  }

  const ListHeaderComponent = () => {
    return <Text style={styles.list__title}>Tareas:</Text>
  }

  const handleModal = (item) => {
    setItemToDelete(item)
    setModalVisible(true);
  }

  const handleDelete = (id) => {
    setTaskList(taskList.filter(item => item.id !== id));
    setModalVisible(false);
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.list__item} key={item.id}>
        <Text style={styles.list__text}>- {item.value}</Text>
        <TouchableOpacity style={styles.list__close} onPress={() => handleModal(item)}>
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
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal__container}>
          <Text style={styles.modal__text}>Estas seguro que queres eliminar {itemToDelete.value}?</Text>
          <TouchableOpacity style={styles.buttonDanger} onPress={() => handleDelete(itemToDelete.id)}>
            <Text style={styles.buttonDanger__text}>Eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonSecondary__text}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  },
  modal__container: {
    flex: 1,
    padding: 50,
    backgroundColor: primaryBg,
  },
  modal__text: {
    textAlign: 'center',
    color: primaryText,
    fontSize: 25,
  },
  buttonDanger: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  buttonDanger__text:{
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonSecondary: {
    backgroundColor: secondaryBg,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  buttonSecondary__text: {
    color: secondaryText,
    fontSize: 15,
    textAlign: 'center',
  },
});