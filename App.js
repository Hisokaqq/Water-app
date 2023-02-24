import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './screens/OnBoardScreen';
import DailyScreen from './screens/DailyScreen';
import MeditationScreen from './screens/MeditationScreen';
const Stack = createNativeStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "#222222"
  },
  headerTitleStyle: {
    color: "#fff",
  },
  headerTintColor: "#fff", 
}
import store from './store';
import { Provider } from 'react-redux'
import { useEffect } from 'react';



export default function App() {
  useEffect(() => {
    

    async function checkIfFirstTime() {
      try {
        const value = await AsyncStorage.getItem('ml');
        if (value === null) {
          await AsyncStorage.setItem('ml', '0');
          await AsyncStorage.setItem('cs', '0');
          await AsyncStorage.setItem('ls', '0');
          await AsyncStorage.setItem('sl', '0');
        }
      } catch (error) {
        console.log(error);
      }
    }
    checkIfFirstTime();
  }, []);
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={globalScreenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Daily" component={DailyScreen} />
          <Stack.Screen name="Meditation" component={MeditationScreen}  />
          <Stack.Screen name="OnBoard" component={OnBoardScreen}  />
          </Stack.Navigator>
      <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}

