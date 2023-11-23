import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screen/Home';
import ThuongHieu from './Screen/ThuongHieu';
import TheThanhVien from './Screen/TheThanhVien';
import TimKiem1 from './Screen/TimKiem1';
import TimKiem2 from './Screen/TimKiem2';
import TaiKhoan from './Screen/TaiKhoan';
import MaGiamGia from './Screen/MaGiamGia';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    //<Home/>
    //<ThuongHieu/>
    //<TheThanhVien/>
    //<TimKiem1/>
    //<TimKiem2/>
    //<TaiKhoan/>
    //<MaGiamGia/>
    //<CuaHang/>
    <NavigationContainer>
      <stack.Navigator mode='Home'>
        <stack.Screen options={{headerShown: false}} name ="Home" component={Home}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="ThuongHieu" component={ThuongHieu}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="TheThanhVien" component={TheThanhVien}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="TimKiem1" component={TimKiem1}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="TimKiem2" component={TimKiem2}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="TaiKhoan" component={TaiKhoan}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="MaGiamGia" component={MaGiamGia}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>

  );
}

