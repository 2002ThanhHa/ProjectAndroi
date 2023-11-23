import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
export default function ChiTietSanPham({ navigation, route }) {
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
            <View style={{ flexDirection: 'row', margin: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Chi tiết sản phẩm</Text>
                <Pressable style={{ marginLeft: 150, }} onPress={() => { navigation.navigate("SanPham") }}>
                    <AntDesign name="closecircleo" size={24} color="red" />
                </Pressable>
            </View>

            <View style={{ marginTop: 5, backgroundColor: "#fff" }}>
                <View style={{ backgroundColor: '#c6d0d4', flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Hình ảnh sản phẩm </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.hasp}</Text></View>

                </View>
                <View style={{ flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Thương hiệu/ Xuất xứ thương hiệu </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.thuong_hieu}</Text></View>

                </View>
                <View style={{ backgroundColor: '#c6d0d4', flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Sản xuất tại </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.xuat_xu}</Text></View>

                </View>
                <View style={{ flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Trọng lượng/ Dung tích  </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.trong_luong}</Text></View>

                </View>
                <View style={{ backgroundColor: '#c6d0d4', flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Thành phần </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.thanh_phan}</Text></View>

                </View>
                <View style={{ flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Đặc tính hàng hóa </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.dac_tinh}</Text></View>

                </View>
                <View style={{ backgroundColor: '#c6d0d4', flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Hướng dẫn sử dụng </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.sudung}</Text></View>

                </View>
                <View style={{ flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Hướng dẫn bảo quản </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.bao_quan}</Text></View>

                </View>
                <View style={{ backgroundColor: '#c6d0d4', flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Hạn sử dụng </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.hsd}</Text></View>

                </View>
                <View style={{ flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 }}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Lưu ý </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.luuy}</Text></View>

                </View>
                <View style={{ backgroundColor: '#c6d0d4', flexDirection: 'row', width: '90%', marginLeft: 10, borderTopWidth: 1 ,borderBottomWidth:1}}>
                    <View style={{ borderLeftWidth: 1, borderRightWidth: 1, width: 170 }}> <Text style={{ margin: 5, fontSize: 13 }}>Tổ chức/ địa chỉ tổ chức chịu trách nhiệm về hàng hóa </Text></View>
                    <View style={{ borderRightWidth: 1, width: 155 }}><Text style={{ margin: 5, fontSize: 13 }}> {item.phan_phoi}</Text></View>

                </View>
               


                
                
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageComponenet: {
        width: '100%',
        height: 300,

        alignItems: 'center',
    },

})