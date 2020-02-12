import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { List, Checkbox, IconButton } from 'react-native-paper';

const TodoItem = ({ onItemDelete, todo }) => {
  const [checked, setChecked] = useState(false);
  return (
    <List.Item
      style={styles.list}
      titleStyle={checked ? styles.checked : null}
      title={todo.title}
      left={() => (
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
      )}
      right={props => (
        <IconButton
          icon="delete"
          size={18}
          onPress={() => onItemDelete(todo.id)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 5
  },
  checked: {
    textDecorationLine: 'line-through'
  }
});

export default TodoItem;
