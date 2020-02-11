import React from 'react';
import TodoItem from './TodoItem';
import { FlatList } from 'react-native';

const TodoItems = props => {
  return (
    <FlatList
      data={props.todoList}
      keyExtractor={item => item}
      renderItem={({ item }) => <TodoItem todo={item} />}
    />
  );
};

export default TodoItems;
