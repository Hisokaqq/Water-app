import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './screens/OnBoardScreen';
import DailyScreen from './screens/DailyScreen';
import MeditationScreen from './screens/MeditationScreen';
const Stack = createNativeStackNavigator();

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
export default function App() {
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

