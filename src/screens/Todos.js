import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Header from '../components/Header';
import globalStyles from '../styles/globalStyles';
import TodoItems from '../components/TodoItems';

const Todos = () => {
  const [todoList, setTodoList] = useState([
    'Eat',
    'code like a maniac',
    'sleep until you cannot'
  ]);
  return (
    <>
      <Header title="Add Todos" />
      <View style={styles.container}>
        <TodoItems todoList={todoList} />
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
