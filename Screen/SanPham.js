
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons, AntDesign, FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';


export default function SanPham({ navigation, route }) {
    const [item, setItem] = useState(
        route.params?.item || {
            image: require('../image_Ha/Danh Mục/bánh bao/bánh bao kim sa.png'),
            name: 'Thùng 30 mì Hảo Hảo tôm chua cay 75g',
            price: '115,900đ', /*giachuagiam*/
            price_up: '36,900d', /*giaban*/
            thuong_hieu: 'Hảo Hảo',
            xuat_xu: 'Việt Nam',
            trong_luong: '75g x 30 gói',
            thanh_phan: 'VẮT MÌ - Bột mì (bổ sung vi chất (kẽm, sắt)), dầu thực vật (dầu cọ, chất chống oxy hoá (BHA (320), BHT (321))), tinh bột, muối, chất ổn định (pentanatri triphosphat (451(i)), kali carbonat (501(i))), chất nhũ hoá (natri cacbonxymethyl cellulose (466)), chất điều chỉnh acid (natri carbonat (500(i))), bột nghệ, chất tạo màu tự nhiên (curcumin (100(i))).CÁC GÓI GIA VỊ - Dầu thực vật (dầu cọ, chất chống oxy hoá (BHA (320), BHT (321))), đường, muối, hành, các gia vị, chất điều vị (mononatri glutamat (621), dinatri 5 -inosinat (631), dinatri 5 -guanylat (627), disodium succinate), cà chua, me, maltodextrin, tôm 2,75 g/kg, hành lá sấy, chất tạo màu tổng hợp (caramen nhóm I (150a), paprika oleoresin (160c)), thịt heo, lá chanh, chất tạo ngọt tổng hợp (acesulfam kali (950)), chất bảo quản (kali sorbat (202)).',
            dac_tinh: 'Sợi dai ngon, thấm đẫm nước sốt chua ngọt hài hòa, mang đến hương vị quyến rũ khiến bạn không thể ngừng đũa.',
            bao_quan: 'Để nơi khô ráo, thoáng mát tránh ánh nắng mặt trời.',
            hsd: '6 tháng kể từ ngày sản xuất.',
            phan_phoi: ' CTY CO PHAN AECOOK VIET NAM - P.Tan Thanh, Q.Tan Phu'
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
