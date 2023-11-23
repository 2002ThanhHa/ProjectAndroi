import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
export default function ThongBaoDH({ navigation }) {

    return (

        <View style={{ backgroundColor: '#f8f4f4' }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#ea1717', borderBottomWidth: 1 }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '500', margin: 15 }}> Thông báo </Text>
                <View style={{ marginLeft: 180 }}> <FontAwesome5 name="align-justify" size={20} color="white" style={{ margin: 20 }} /></View>

            </View>
            <View style={{ flexDirection: 'row', backgroundColor: '#ea1717', borderBottomWidth: 5, padding: 15, borderColor: 'gray' }}>
                <Pressable onPress={() => { navigation.navigate("ThongBao") }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 40, }}> Khuyến mãi </Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate("ThongBaoDH") }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', marginLeft: 100, borderBottomWidth: 3, borderColor: 'white' }}> Đơn hàng </Text>
                </Pressable>
            </View>
            <View style={{ height: 490, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require("../image_Ha/Group 116.png")} style={{ height: 80, width: 80, resizeMode: 'contain' }} />
                <Text> Không có thông báo nào </Text>
            </View>
            {/* footer */}
            <View /*End*/ style={{ width: '100%', height: 80, flexDirection: 'row' }}>
                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                    <Pressable
                        onPress={() => { navigation.navigate('Home') }}
                    >
                        <Image source={require('../image/goden.jpg')} style={{ width: '90%', height: 40, margin: 15, marginLeft: 3 }} />
                        <Text style={{ fontSize: 13, fontWeight: '500', margin: -10, marginLeft: 4, }}>Trang chủ</Text>
                    </Pressable>
                </View>

                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                    <Pressable
                        onPress={() => { navigation.navigate('DanhMuc') }}
                    >
                        <Feather name="layers" size={44} color="gray" style={{ margin: 12, marginLeft: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 8, color: 'gray' }}>Danh mục</Text>
                    </Pressable>

                </View>

                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                    <Pressable
                        onPress={() => { navigation.navigate('ThuongHieu') }}
                    >
                        <Feather name="shopping-bag" size={44} color="gray" style={{ margin: 12, marginLeft: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 1, }}>Thương hiệu</Text>
                    </Pressable>

                </View>

                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                    <Pressable
                        onPress={() => { navigation.navigate('ThongBao') }}
                    >
                        <FontAwesome5 name="bell" size={45} color="red" style={{ margin: 12, marginLeft: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 4, color: "red" }}>Thông báo</Text>
                    </Pressable>

                </View>

                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                    <Pressable
                        onPress={() => { navigation.navigate('TaiKhoan') }}

                    >
                        <MaterialCommunityIcons name="account-outline" size={50} color="gray" style={{ margin: 12, marginLeft: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 9, }}>Tài khoản</Text>
                    </Pressable>

                </View>
            </View>
        </View>


    );
}