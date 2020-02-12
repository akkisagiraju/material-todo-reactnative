import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import Header from '../components/Header';

const Settings = () => {
  return (
    <View>
      <Header title="Profile" />
      <Title>This is profile screen.</Title>
    </View>
  );
};

export default Settings;
