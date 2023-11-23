import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DanhMuc from './Screen/DanhMuc';
import Home from './Screen/Home';
import SanPham from './Screen/SanPham'
import GioHang from './Screen/GioHang';
import ChiTietSanPham from './Screen/ChiTietSanPham';
import ThongBao from './Screen/ThongBao'
import ThongBaoDH from './Screen/ThongBaoDH';
import NhanHangGo from './Screen/NhanHangGo';
import KiemTraGia from './Screen/KiemTraGia';
import FlashSale from './Screen/FlashSale';
import FlashSale2 from './Screen/FlashSale2';
import DiaChi from './Screen/Daichi';
import DiaChiN from './Screen/DiajChiN';
import DiaChiT from './Screen/DiaChiT';
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator >
        {/* <stack.Screen options={{ headerShown: false }} name="Home" component={Home}></stack.Screen> 
        <stack.Screen options={{ headerShown: false }} name="DanhMuc" component={DanhMuc}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="SanPham" component={SanPham}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="GioHang" component={GioHang}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="ChiTietSanPham" component={ChiTietSanPham}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="ThongBao" component={ThongBao}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="ThongBaoDH" component={ThongBaoDH}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="NhanHangGo" component={NhanHangGo}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="KiemTraGia" component={KiemTraGia}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="FlashSale" component={FlashSale}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="FlashSale2" component={FlashSale2}></stack.Screen> */}
      
         <stack.Screen options={{ headerShown: false }} name="DiaChi" component={DiaChi}></stack.Screen>
         <stack.Screen options={{ headerShown: false }} name="DiaChiT" component={DiaChiT}></stack.Screen>
         <stack.Screen options={{ headerShown: false }} name="DiaChiN" component={DiaChiN}></stack.Screen>
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
