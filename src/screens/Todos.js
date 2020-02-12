import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { FAB, TextInput, Snackbar } from 'react-native-paper';
import Header from '../components/Header';
import globalStyles from '../styles/globalStyles';
import TodoItems from '../components/TodoItems';
import { uuid } from 'uuidv4';

const Todos = () => {
  const [isAddingTodo, setAddingTodo] = useState(false);
  const [todo, setTodo] = useState('');
  const [displaySnack, setDisplaySnack] = useState(false);

  const [todoList, setTodoList] = useState([
    { id: uuid(), title: 'Eat' },
    { id: uuid(), title: 'code like a maniac' },
    { id: uuid(), title: 'sleep until you cannot' }
  ]);

  const onItemDelete = id => {
    const tempList = todoList.filter(todo => todo.id !== id);
    setTodoList(tempList);
    setDisplaySnack(true);
  };

  const startAddingTodo = () => {
    setAddingTodo(true);
  };

  const dismissAddition = () => {
    Keyboard.dismiss();
    setAddingTodo(false);
  };

  const onItemAdd = () => {
    let tempList = [...todoList];
    tempList.push({ id: uuid(), title: todo });
    setTodoList(tempList);
    setAddingTodo(false);
    setTodo('');
  };

  return (
    <>
      <Header title="My Todos" />
      <TouchableWithoutFeedback onPress={dismissAddition}>
        <View style={styles.container}>
          <TodoItems todoList={todoList} onItemDelete={onItemDelete} />
          <Snackbar
            visible={displaySnack}
            duration={3000}
            style={{ marginBottom: 80 }}
            onDismiss={() => setDisplaySnack(false)}
            action={{
              label: 'Undo',
              onPress: () => {
                console.log('Undo delete');
              }
            }}>
            Todo deleted
          </Snackbar>
          {isAddingTodo ? (
            <KeyboardAvoidingView enabled behavior="padding">
              <TextInput
                placeholder="New todo"
                value={todo}
                onChangeText={text => setTodo(text)}
                onEndEditing={onItemAdd}
                // multiline={true}
                // numberOfLines={3}
                underlineColor="rgb(255,255,255)"
              />
            </KeyboardAvoidingView>
          ) : (
            <FAB
              style={styles.fab}
              icon="plus"
              label="Add Todo"
              onPress={startAddingTodo}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    justifyContent: 'center'
  },
  fab: {
    position: 'absolute',
    marginVertical: 20,
    marginHorizontal: 140,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default Todos;
