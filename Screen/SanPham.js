
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';


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
            phan_phoi: ' CTY CO PHAN AECOOK VIET NAM - P.Tan Thanh, Q.Tan Phu',
        }
    );
    return (
        <View style={styles.component}>

            <View style={styles.imageComponenet}>
                <Image source={item.img} style={{ marginTop: 5, width: 120, height: 120 }} />

                <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 15 }}>{item.name}</Text>
            </View>



            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>

                <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50 }}>{item.price}</Text>
            </View>

        </View>
    );
}



const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageComponenet: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image1: {
        width: 350,
        height: 350,
        resizeMode: 'contain'
    },
    add: {
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1B000',
        borderRadius: 10,
        marginLeft: 20,
        fontSize: 25,
        fontWeight: 500,
        color: '#FFFDFD'
    }
})
