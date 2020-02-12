import React from 'react';
import TodoItem from './TodoItem';
import { FlatList } from 'react-native';

const TodoItems = props => {
  return (
    <FlatList
      data={props.todoList}
      renderItem={({ item }) => (
        <TodoItem todo={item} onItemDelete={props.onItemDelete} />
      )}
    />
  );
};

export default TodoItems;
