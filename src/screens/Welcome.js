import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Title, Subheading } from 'react-native-paper';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/welcome.png')}
      />
      <View style={styles.infoView}>
        <View>
          <Title style={styles.infoText}>Welcome to Todos</Title>
          <Subheading>Keep track of things you aim to get done.</Subheading>
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.buttonContent}
          mode="contained"
          onPress={() => navigation.navigate('Todos')}>
          Get Started
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#FFF'
  },
  image: {
    width: 400,
    height: 300,
    alignSelf: 'center'
  },
  infoView: {
    alignItems: 'center'
  },
  infoText: {
    fontSize: 24,
    textAlign: 'center'
  },
  button: {
    alignSelf: 'center',
    height: 50,
    marginVertical: 40
  },
  buttonContent: {
    height: 50
  }
});

export default Welcome;
