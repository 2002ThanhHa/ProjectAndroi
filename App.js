import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DanhMuc from './Screen/DanhMuc';
import Home from './Screen/Home';
import SanPham from './Screen/SanPham'

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator >
        {/* <stack.Screen options={{ headerShown: false }} name="Home" component={Home}></stack.Screen> */}
        <stack.Screen options={{ headerShown: false }} name="DanhMuc" component={DanhMuc}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="SanPham" component={SanPham}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
