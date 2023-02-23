import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './screens/OnBoardScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoard'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OnBoard" component={OnBoardScreen}  />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
      
  );
}

