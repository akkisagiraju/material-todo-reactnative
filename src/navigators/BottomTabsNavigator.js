import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../screens/Profile';
import TodoScreen from '../screens/Todos';

const MaterialTab = createMaterialBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <MaterialTab.Navigator
      initialRouteName="Todos"
      sceneAnimationEnabled={false}
      activeColor="#3F51B5"
      barStyle={{
        backgroundColor: '#FFF'
      }}>
      <MaterialTab.Screen
        name="Todos"
        component={TodoScreen}
        options={{
          tabBarIcon: 'note-plus'
        }}
      />
      <MaterialTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: 'face'
        }}
      />
    </MaterialTab.Navigator>
  );
};

export default BottomTabsNavigator;
