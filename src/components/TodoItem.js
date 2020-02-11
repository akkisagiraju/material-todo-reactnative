import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { List, Checkbox } from 'react-native-paper';

const TodoItem = props => {
  const [checked, setChecked] = useState(false);
  return (
    <List.Item
      style={styles.list}
      titleStyle={checked ? styles.checked : null}
      title={props.todo}
      left={() => (
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
      )}
      right={props => <List.Icon {...props} icon="delete" />}
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
