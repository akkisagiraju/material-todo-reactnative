import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Header from '../components/Header';
import globalStyles from '../styles/globalStyles';
import TodoItems from '../components/TodoItems';
import { uuid } from 'uuidv4';

const Todos = () => {
  const [todoList, setTodoList] = useState([
    { id: uuid(), title: 'Eat' },
    { id: uuid(), title: 'code like a maniac' },
    { id: uuid(), title: 'sleep until you cannot' }
  ]);

  const onItemDelete = id => {
    const tempList = todoList.filter(todo => todo.id !== id);
    setTodoList(tempList);
  };

  return (
    <>
      <Header title="Add Todos" />
      <View style={styles.container}>
        <TodoItems todoList={todoList} onItemDelete={onItemDelete} />
        <FAB style={styles.fab} icon="plus" label="Add Todo" />
      </View>
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
