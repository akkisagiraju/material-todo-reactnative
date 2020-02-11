import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import BottomTabsNavigator from './src/navigators/BottomTabsNavigator';
import Header from './src/components/Header';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3F51B5',
    accent: '#FF9800'
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" headerMode="none">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerTitle: 'Welcome' }}
          />
          <Stack.Screen
            name="Todos"
            component={BottomTabsNavigator}
            options={{
              headerTitle: 'Todos',
              header: ({ scene, previous, navigation }) => (
                <Header
                  scene={scene}
                  previous={previous}
                  navigation={navigation}
                />
              )
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
