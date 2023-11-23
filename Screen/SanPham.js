
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons, AntDesign, FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';


export default function SanPham({ navigation, route }) {
    const [item, setItem] = useState(
        route.params?.item || {
            img: require('../image_Ha/Danh Mục/bánh bao/bánh bao kim sa.png'),
        name: 'Bánh bao kim sa BamBoo 240g - 10262',
        price: '', /*giachuagiam*/
        price_up: '42,900đ', /*giaban*/
        thuong_hieu: '',
        xuat_xu: '',
        trong_luong: '',
        thanh_phan: '',
        dac_tinh: '',
        bao_quan: '',
        hsd: '',
        phan_phoi: '',
        type_DM: 'BanhBao'
        }
    );
    return (
        <View style={styles.component}>
            <View style={{ backgroundColor: "#fff" }}>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={() => { navigation.navigate("DanhMuc") }}>
                        <AntDesign name="arrowleft" size={32} color="red" />
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate("GioHang") }} style={{ backgroundColor: 'red', flexDirection: 'row', marginLeft: 250, width: 120, borderRadius: 10 }}>
                        <AntDesign name="shoppingcart" size={32} color="white" style={{ margin: 5 }} />
                        <Fontisto name="share-a" size={28} color="white" style={{ marginLeft: 10, marginTop: 7 }} />
                    </Pressable>

                </View>
                <View style={styles.imageComponenet}>

                    <Image source={item.img} style={{ width: 210, height: 210, resizeMode: 'contain' }} />

                    <Image source={item.img} style={{ width: 80, height: 80, resizeMode: 'contain', marginLeft: -300, borderRadius: 5, borderWidth: 1, borderColor: 'red' }} />
                </View>

                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15 }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 15, color: 'orange' }}>{item.price_up}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 15, color: 'gray' }}><s>{item.price}</s></Text>
                    <MaterialCommunityIcons name="heart-outline" size={30} color="red" style={{ marginLeft: 220 }} />
                </View>

            </View>

            <View style={{ marginTop: 5, backgroundColor: "#fff" }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 15 }}>Khuyến mãi</Text>
            </View>
            <View style={{ marginTop: 5, backgroundColor: "#fff" }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 15 }}>Chi tiết sản phẩm</Text>
                <View style={{ backgroundColor: '#c6d0d4', flexDirection: 'row', width: '90%', marginLeft: 20, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Hình ảnh sản phẩm </Text></View>
                    <View style={{ borderRightWidth: 1, width: 180 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.hasp}</Text></View>

                </View>
                <View style={{ flexDirection: 'row', width: '90%', marginLeft: 20, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Thương hiệu/ Xuất xứ thương hiệu </Text></View>
                    <View style={{ borderRightWidth: 1, width: 180 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.thuong_hieu}</Text></View>

                </View>

                <Pressable onPress={ ()=> {navigation.navigate({ name: 'ChiTietSanPham', params: { item } })}} style={{flexDirection: "row", alignItems:'center', justifyContent:'center'}}>
                    

                        <Text> Xem Thêm</Text>
                        <AntDesign name="down" size={13} color="black"  style={{ marginLeft: 5}}/>
                    

                </Pressable>
                
            </View>


            <Pressable onPress={() => { navigation.navigate({ name: 'GioHang', params: { item } }) }} 
            style={{ backgroundColor: 'red', flexDirection: 'row', marginLeft: 8, width: "95%", borderRadius: 10 , alignItems:'center', justifyContent:'center'}}>
                        <AntDesign name="shoppingcart" size={32} color="white" style={{ margin: 5 }} />
                        <Text style={{color: "white", fontWeight: '600'}}> Thêm vào giỏ hàng</Text>
                    </Pressable>

        </View>
    );
}



const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: '#f8f4f4'
    },
    imageComponenet: {
        width: '100%',
        height: 300,

        alignItems: 'center',
    },
    
})
