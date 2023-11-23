import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Ionicons, Fontisto, FontAwesome } from '@expo/vector-icons';
export default function CuaHang({ navigation }) {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View>
                <Image source={require("../image_Ha/CuaHang/ch.jpg")} style={{ height: 200, resizeMode: 'contain', width: '100%' }} />
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: -180 }}>
                    <Pressable onPress={() => { navigation.navigate("Home") }}>
                        <Fontisto name="close" size={24} color="gray" style={{ backgroundColor: '#fff', borderRadius: 100 }} />
                    </Pressable>
                    <Text style={{ fontWeight: '600', fontSize: 22, marginLeft: 50, color: '#fff' }}> GO! GÒ VẤP</Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 160 }}>
                <Text style={{ fontWeight: '600', fontSize: 22, marginLeft: 10 }}> GO! GÒ VẤP</Text>
                <FontAwesome name="exchange" size={15} color="red" style={{ marginLeft: 100, marginTop: 5 }} />
                <Pressable onPress={() => { navigation.navigate("DiaChi") }}>
                <Text style={{ fontWeight: '600', fontSize: 15, color: 'red', marginTop: 3 }}> Đổi siêu thị</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 10 }}>
                <Fontisto name="stopwatch" size={22} color="gray" />
                <Text style={{ fontWeight: '400', fontSize: 15, color: 'gray', marginTop: 3 }}> Từ 08:00 đến 22:00</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 10 }}>
                <View style={{ flexDirection: 'row', marginTop: 10, backgroundColor: "#ea1616", borderRadius: 5, width: 150, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="location-sharp" size={20} color="white" />
                    <Text style={{ fontWeight: '400', fontSize: 14, color: 'white', marginTop: 3 }}> CHỈ ĐƯỜNG</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, backgroundColor: "#ea1616", borderRadius: 5, width: 150, height: 40, alignItems: 'center', justifyContent: 'center', marginLeft: 30 }}>
                    <FontAwesome name="phone" size={24} color="white" />
                    <Text style={{ fontWeight: '400', fontSize: 15, color: 'white', marginTop: 3 }}> LIÊN HỆ</Text>
                </View>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 16, margin: 10 }}> Các dịch vụ tại siêu thị</Text>
            <View style={{ flexDirection: 'row' , marginLeft:20 }}>
                <Image source={require("../image_Ha/CuaHang/ship.jpg")} style={{ width: 40, height: 40 }} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Giao Hàng</Text>
                <Image source={require("../image_Ha/CuaHang/wifi.jpg")} style={{ width: 40, height: 40 ,marginLeft:50}} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Truy Cập</Text>
            </View>
            <View style={{ flexDirection: 'row' , marginLeft:20 }}>
                <Image source={require("../image_Ha/CuaHang/park.jpg")} style={{ width: 40, height: 40 }} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Gửi Xe</Text>
                <Image source={require("../image_Ha/CuaHang/phone.jpg")} style={{ width: 40, height: 40 ,marginLeft:80}} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Đặt Hàng</Text>
            </View>
            <View style={{ flexDirection: 'row' , marginLeft:20 }}>
                <Image source={require("../image_Ha/CuaHang/receip.jpg")} style={{ width: 40, height: 40 }} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Xuất Hóa Đơn Đỏ</Text>
                <Image source={require("../image_Ha/CuaHang/pay.jpg")} style={{ width: 40, height: 40 ,marginLeft:5}} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Thanh Toán</Text>
            </View>
            <View style={{ flexDirection: 'row' , marginLeft:20 }}>
                <Image source={require("../image_Ha/CuaHang/phieuMH.jpg")} style={{ width: 40, height: 40 }} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Phiếu Mua Hàng</Text>
                <Image source={require("../image_Ha/CuaHang/ATM.jpg")} style={{ width: 40, height: 40 ,marginLeft:10}} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Trạm ATM</Text>
            </View>
            <View style={{ flexDirection: 'row' , marginLeft:20 }}>
                <Image source={require("../image_Ha/CuaHang/fix.jpg")} style={{ width: 40, height: 40 }} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Sửa Đồ</Text>
                <Image source={require("../image_Ha/CuaHang/treEm.jpg")} style={{ width: 40, height: 40 ,marginLeft:80}} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Khu Vực Trẻ Em</Text>
            </View>
            <View style={{ flexDirection: 'row' , marginLeft:20 }}>
                <Image source={require("../image_Ha/CuaHang/gilf.jpg")} style={{ width: 40, height: 40 }} />
                <Text style={{  fontSize: 16, marginTop: 15 }}> Gói Quà</Text>
               
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 16, margin: 10 }}> Các thương hiện đồng hành</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image source={require("../image_Ha/CuaHang/KFC.jpg")} style={{ width: 100, height: 100 }} />
                <Image source={require("../image_Ha/CuaHang/PNJ.jpg")} style={{ width: 100, height: 100 }} />

            </View>


        </View>

    )
}