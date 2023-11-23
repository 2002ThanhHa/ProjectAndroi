import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
const diaChi = [
    {
        name: 'GO! ĐÀ NẴNG',
        des: 'Khu thương mại Vĩnh Trung, 255-257 Hùng Vương, quận Thanh Khê, TP.Đà Nẵng',
        location: 'Miễn phí giao hàng trong bán kính 7km'
    },
    {
        name: 'GO! HUẾ',
        des: 'T174 Bà Triệu, phường Phú Hội, TP.Huế, tỉnh Thừa Thiên Huế',
        location: 'Miễn phí giao hàng trong bán kính 7km'
    },
    {
        name: 'GO! NHA TRANG',
        des: 'Lô số 4, đường 19/5, khu đô thị Vĩnh Điềm Trung, xã Vĩnh Hiệp, TP Nha Trang, tỉnh Khánh Hòa',
        location: 'Miễn phí giao hàng trong bán kính 7km'
    },
]
export default function DiaChiT({ navigation }) {

    const [diachi, setDiaChi] = useState(diaChi);
    return (

        <View style={{ backgroundColor: '#f8f4f4' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Chọn siêu thị của bạn</Text>
                <Pressable onPress={() => { navigation.navigate("Home") }}>
                    <AntDesign name="close" size={30} color="black" style={{ marginLeft: 50 }} />
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Pressable onPress={() => { navigation.navigate("DiaChi") }}>
                    <View style={{  height: 30, width: 110, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5,borderColor: 'red', borderWidth: 1,  }}>
                        <Text style={{ color: "red" }}>Miền Bắc</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate("DiaChiT") }}>
                    <View style={{  backgroundColor: 'red', height: 30, width: 110, alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 1 }}>
                        <Text style={{ color: "white" }}>Miền Trung</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate("DiaChiN") }}>
                    <View style={{ height: 30, width: 110, alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                        <Text style={{ color: "red" }}>Miền Nam</Text>
                    </View>
                </Pressable>
            </View>
            <View style={{ width: '100%', padding: 10, flexDirection: 'row' }}>
                <Pressable onPress={() => navigation.navigate('TimKiem')}
                    style={{ width: 360, height: 40, borderRadius: 10, backgroundColor: 'white', marginLeft: 5, flexDirection: 'row', borderWidth: 1 }}
                > <FontAwesome name="search" size={18} color="gray" style={{ margin: 10 }} />
                    <Text style={{ fontSize: 14, margin: 10, color: 'gray' }}>Tìm siêu thị của bạn</Text>
                </Pressable>

            </View>
            <FlatList data={diaChi} renderItem={({ item }) => {
                return (
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 5, width: '98%', margin: 5, height: 150, paddingTop: 20 }}>
                        <View style={{ width: 60, paddingLeft: 10 }}>
                            <Ionicons name="location-sharp" size={40} color="black" />

                        </View>
                        <View style={{ position: 'absolute' }}>
                            <View style={{ marginLeft: 70 }}>
                                <Text style={{ color: "#464648", fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                                <Text style={{ fontWeight: '450', fontSize: 15 }}>{item.des}</Text>
                                <View style={{ backgroundColor: '#D9D9D9', height: 30, width: 300, marginTop: 20, borderRadius: 20, flexDirection: 'row', alignItems: 'center', marginLeft: -10 }}>
                                    <View style={{ backgroundColor: 'red', borderRadius: 100, width: 20, height: 20, alignItems: 'center', justifyContent: 'center', marginLeft: 8 }} >
                                        <MaterialCommunityIcons name="cart-plus" size={14} color="white" />
                                    </View>
                                    <Text style={{ fontSize: 12, fontWeight: '500', marginLeft: 10 }}> {item.location}</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                )
            }}

            >
            </FlatList>
        </View>


    );
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
    },
    btn: {

        height: 40,
        borderRadius: 5,
        borderColor: '#E9414187',
        borderWidth: 1,
        marginRight: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E94141',
        color: '#fff',
        fontSize: 13,
        padding: 10
    },


})