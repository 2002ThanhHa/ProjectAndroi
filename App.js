import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DanhMuc from './Screen/DanhMuc';
import Home from './Screen/Home';

import ThuongHieu from './Screen/ThuongHieu';
import TheThanhVien from './Screen/TheThanhVien';
import TimKiem1 from './Screen/TimKiem1';
import TimKiem2 from './Screen/TimKiem2';
import TaiKhoan from './Screen/TaiKhoan';
import MaGiamGia from './Screen/MaGiamGia';



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
import CuaHang from './Screen/CuaHang';
import SanPhamGo from './Screen/SanPhamGo';
import SanPhamFlashSale from './Screen/SanPhamFlashSale';
const stack = createNativeStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>

      <stack.Navigator >
        <stack.Screen options={{headerShown: false}} name ="Home" component={Home}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="ThuongHieu" component={ThuongHieu}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="TheThanhVien" component={TheThanhVien}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="TimKiem1" component={TimKiem1}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="TimKiem2" component={TimKiem2}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="TaiKhoan" component={TaiKhoan}></stack.Screen>
        <stack.Screen options={{headerShown: false}} name ="MaGiamGia" component={MaGiamGia}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="DanhMuc" component={DanhMuc}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="SanPham" component={SanPham}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="SanPhamGo" component={SanPhamGo}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="SanPhamFlashSale" component={SanPhamFlashSale}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="GioHang" component={GioHang}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="ChiTietSanPham" component={ChiTietSanPham}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="ThongBao" component={ThongBao}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="ThongBaoDH" component={ThongBaoDH}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="NhanHangGo" component={NhanHangGo}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="KiemTraGia" component={KiemTraGia}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="FlashSale" component={FlashSale}></stack.Screen>
        <stack.Screen options={{ headerShown: false }} name="FlashSale2" component={FlashSale2}></stack.Screen>
      
         <stack.Screen options={{ headerShown: false }} name="DiaChi" component={DiaChi}></stack.Screen>
         <stack.Screen options={{ headerShown: false }} name="DiaChiT" component={DiaChiT}></stack.Screen>
         <stack.Screen options={{ headerShown: false }} name="DiaChiN" component={DiaChiN}></stack.Screen>
         <stack.Screen options={{ headerShown: false }} name="CuaHang" component={CuaHang}></stack.Screen> 
      </stack.Navigator>
    </NavigationContainer>);

}

