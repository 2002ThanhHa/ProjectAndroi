import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
const sanPham = [
    {

        img: require('../image_Ha/FSALE/mandu.jpg'),
        name: 'Bánh Mandu CJ Bibigo thịt bắp 350g - 01350',
        price: '53,500đ', /*giachuagiam*/
        price_up: '31,900đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà sản xuất',
        sale: '40,4%',
        thuong_hieu: 'Bibigo (Hàn Quốc)',
        xuat_xu: 'Việt Nam',
        trong_luong: '350g',
        thanh_phan: 'Thịt heo 26.8%, bột mì, củ sắn, bắp 8.8%, nước, đạm đậu nành, bắp cải, tinh bột bắp, hành tím, hành lá, đậu đũa, bột năng, nước tương, dầu hào, đường, tỏi, bột lòng trắng trứng, hạt nêm, dầu cọ, dầu mè, hương bắp tổng hợp, chất điều vị',
        sudung: 'Chiên giòn, chiên áp chảo, hấp...',
        ban: '149',

        bao_quan: 'Ở nhiệt độ 18 độ C hoặc ngăn đá tủ lạnh',
        hsd: '12 tháng kể từ ngày sản xuất.',
        phan_phoi: 'CTY TNHH CJ FOODS VN- CN HIEP PHUOC-125/208 Luong The Vinh, P.Tan Thoi, Hoa, Q. Tan Phu, tphcm',
        type_DM: 'uong'
    },
    {

        img: require('../image_Ha/FSALE/om.jpg'),
        name: 'Nước giặt Omo matic lọc mùi ẩm móc túi 3,6kg ',
        price: '', /*giachuagiam*/
        price_up: '212,500đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà sản xuất',
        sale: '12,7%',
        thuong_hieu: 'unilever (Viet Nam)',
        xuat_xu: 'Việt Nam',
        trong_luong: '3.6kg',
        thanh_phan: 'Sodium Linear Alkylbenzene Sulfonate, Alcohol Ethoxylate, Sodium Laureth Sulphate, TEA, Chất thơm, nước,...',
        sudung: 'Thích hợp giặt tay và giặt máy. 1. Giặt tay Xả sơ quần áo với nước sạch, hòa tan 1 nắp trong 3-4 lít nước. Ngâm quần áo trong 15 phút. Vò và xả 2-3 lần bằng nước sach. 2. Giặt máy Sử dụng 1 nắp (65ml) nước giặt Omo Matic cho một lần giặt thông thường. Điều chỉnh lượng nước giặt tương ứng với lượng quần áo và độ bẩn. Thoa một lượng nhỏ nước giặt trực tiếp lên vết bẩn. Đổ phần nước giặt còn lại trong nắp vào máy giặt cùng với quần áo. Chọn chế độ giặt thích hợp của máy.',
        ban: '109',

        bao_quan: 'nơi khô ráo thoáng mát, đậy kín nắp sau khi dùng để tránh nước rơi vào trong. Tránh tiếp xúc trực tiếp với ánh nắng mặt trời.',
        hsd: '24 tháng kể từ ngày sản xuất.',
        luuy: 'kiểm tra độ bền màu trước khi sử dụng. Giặt dưới nhiệt độ thường. Để xa tầm tay trẻ em. Không được uống. Tránh tiếp xúc với mắt, nếu dính vào mắt hãy rửa kỹ với nước.',
        phan_phoi: 'CTY TNHH QUOC TE UNILEVER VIET NAM - 156 Nguyễn Lương Bằng, phường Tân Phú, Quận 7',
        type_DM: 'uong'
    },
    {

        img: require('../image_Ha/FSALE/lautha.jpg'),
        name: 'Lẩu thả long cung CJ Cầu Tre 300g - 72008',
        price: '', /*giachuagiam*/
        price_up: '42,900đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà sản xuất',
        sale: '37,6%',
        thuong_hieu: 'Cầu tre (Việt Nam)',
        xuat_xu: 'Việt Nam',
        trong_luong: '200g',
        thanh_phan: 'Bánh Mini mandu thịt, chả cá viên rau củ, cá viên lốc xoáy phô mai wasabi, cá viên lốc xoáy, đậu hũ hải sản.',
        sudung: 'Không cần rã đông, cho vào nước lầu. Nấu sôi từ 3-5 phút là có thể sử dụng được',
        ban: '129',
        bao_quan: 'Bảo quản ở- 18 độ C hoặc trong ngăn đá tủ lạnh',
        hsd: '12 tháng kể từ ngày sản xuất.',
        luuy: 'Không sử dụng sản phẩm có dấu hiệu hư hỏng hoặc hết hạn sử dụng.',
        phan_phoi: 'CTY TNHH CJ FOODS VN- CN HIEP PHUOC-125/208 Luong The Vinh, P.Tan Thoi, Hoa, Q. Tan Phu, tphcm',
        type_DM: 'uong'
    },
    {

        img: require('../image_Ha/FSALE/banh.jpg'),
        name: 'Bánh bông lan phô mai trứng muối 440g - 55320',
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà sản xuất',
        price: '78,000đ', /*giachuagiam*/
        price_up: '68,000đ', /*giaban*/
        sale: '12,8%',
        xuat_xu: 'Việt Nam',
        trong_luong: '200g',
        ban: '19',
        hsd: 'trong 5 ngày',
        phan_phoi: 'Hệ thống siêu thị GO!/BigC',
        type_DM: 'uong'
    },
    {

        img: require('../image_Ha/FSALE/macaron.jpg'),
        name: 'Lô 6 bánh Macaron - 55468',
        price: '42,000đ', /*giachuagiam*/
        price_up: '35,000đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà sản xuất',
        sale: '16,7%',
        xuat_xu: 'Việt Nam',
        trong_luong: '6 cái',
        hsd: 'trong 5 ngày',
        phan_phoi: 'Hệ thống siêu thị GO!/BigC',
        type_DM: 'uong'
    },
    {

        img: require('../image_Ha/FSALE/táo rockit.jpg'),
        name: 'Hộp táo Rockit New Zealand - 88092',
        price: '105,000đ', /*giachuagiam*/
        price_up: '89,000đ', /*giaban*/
        hasp: 'cso thể khác với thực tế do thay đổi bao bì từ nhà sản xuất',
        sale: '15.2%',
        xuat_xu: 'Pháp',
        ban: '9',
        luuy: 'Không sử dụng sản phẩm khi có dấu hiệu hư hỏng',
        phan_phoi: 'CTY TNHH TU PHUONG TONY- 212 Đường 48, Phường 03, Quận 4, Thành phố Hồ Chí Minh, Việt Nam.',
        type_DM: 'uong'
    },






]
export default function FlashSale({ navigation }) {
    const [selection, setSelection] = useState(1);
    const [dataSanPham, setDataSanPham] = useState(sanPham);
    return (

        <View style={{ backgroundColor: '#FBF0DE' }}>
            <View style={{ width: '100%', padding: 10, flexDirection: 'row', backgroundColor: 'red' }}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="arrowleft" size={24} color="white" style={{ margin: 5 }} />

                </Pressable>
                <Pressable onPress={() => navigation.navigate('TimKiem')}
                    style={{ width: 300, height: 40, borderRadius: 20, backgroundColor: 'white', marginLeft: 5, flexDirection: 'row' }}
                > <FontAwesome name="search" size={18} color="#ea1616" style={{ margin: 10 }} />
                    <Text style={{ fontSize: 14, margin: 10, marginLeft: -3 }}>Xin chào, Bạn muốn tìm gì hôm nay?</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('GioHang')}>
                    <AntDesign name="shoppingcart" size={30} color="white" style={{ margin: 5 }} />
                </Pressable>
            </View>
            <Image source={require("../image_Ha/Nhãn Hàng/nh.jpg")} style={{ height: 200, width: '95%', resizeMode: 'contain', borderRadius: 10, marginLeft: 10 }} />

            <View style={{ flexDirection: 'row', borderBottomWidth: 3, borderColor: '#ea1616' }}>

                <Pressable style={{ backgroundColor: '#ea1616', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 8, marginLeft: 30 }} onPress={() => { navigation.navigate("FlashSale") }}>
                    <Text style={{ color: 'white', padding: 20, fontWeight: '600' }}> Ưu đãi hôm nay </Text>

                </Pressable>

                <Pressable style={{ backgroundColor: '#efdd9b', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 8, marginLeft: 10 }} onPress={() => { navigation.navigate("FlashSale2") }}>
                    <Text style={{ color: 'white', padding: 20, fontWeight: '600' }}> Tươi ngon mỗi ngày </Text>

                </Pressable>


            </View>
            <View /*header*/ style={{ flexDirection: 'row', backgroundColor: '#fff', height: 50, paddingTop: 5 }}>

                <Text style={{ fontSize: 14, color: 'red', fontWeight: '700', marginTop: 10, marginLeft: 100 }}>Kết thúc trong</Text>

                <View style={{ width: 30, height: 30, backgroundColor: '#EA5858', marginTop: 5, borderRadius: 5, marginLeft: 6 }}>
                    <Text style={{ fontSize: 18, margin: 4, marginTop: 2, color: 'white', fontWeight: '500' }}>02</Text>
                </View>
                <View>
                    <View style={{ width: 8, height: 8, backgroundColor: 'black', marginTop: 10, marginLeft: 3 }}></View>
                    <View style={{ width: 8, height: 8, backgroundColor: 'black', marginTop: 5, marginLeft: 3 }}></View>
                </View>

                <View style={{ width: 30, height: 30, backgroundColor: '#EA5858', marginTop: 5, borderRadius: 5, marginLeft: 5 }}>
                    <Text style={{ fontSize: 18, margin: 4, marginTop: 2, color: 'white', fontWeight: '500' }}>23</Text>
                </View>
                <View>
                    <View style={{ width: 8, height: 8, backgroundColor: 'black', marginTop: 10, marginLeft: 3 }}></View>
                    <View style={{ width: 8, height: 8, backgroundColor: 'black', marginTop: 5, marginLeft: 3 }}></View>
                </View>

                <View style={{ width: 30, height: 30, backgroundColor: '#EA5858', marginTop: 5, borderRadius: 5, marginLeft: 5 }}>
                    <Text style={{ fontSize: 18, margin: 4, marginTop: 2, color: 'white', fontWeight: '500' }}>44</Text>
                </View>
                <View>
                    <View style={{ width: 8, height: 8, backgroundColor: 'black', marginTop: 10, marginLeft: 3 }}></View>
                    <View style={{ width: 8, height: 8, backgroundColor: 'black', marginTop: 5, marginLeft: 3 }}></View>
                </View>

                <View style={{ width: 30, height: 30, backgroundColor: '#EA5858', marginTop: 5, borderRadius: 5, marginLeft: 5 }}>
                    <Text style={{ fontSize: 18, margin: 4, marginTop: 2, color: 'white', fontWeight: '500' }}>45</Text>
                </View>
            </View>
            <FlatList data={dataSanPham} renderItem={({ item }) => {
                return (
                    <Pressable style={{ margin: 5 }} onPress={() => { navigation.navigate({ name: 'SanPham', params: { item } }) }}>
                        <View style={{ flexDirection: 'row', backgroundColor: '#FBF0DE', height: 185, paddingTop: 5, borderBottomWidth: 0.5 }}>
                            <Image source={item.img} style={{ width: 135, height: 127, resizeMode: 'contain' }} />

                            <Text style={{ fontSize: 18, color: '#2E7422', fontWeight: 700 }}>{item.name}</Text>
                            <View style={{ position: 'absolute' }}>
                                <Text style={{ fontSize: 18, fontWeight: 600, color: 'red', marginLeft: 150, marginTop: 60 }}>{item.price_up}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 600, color: 'gray', marginLeft: 150, }}><s>{item.price}</s></Text>
                            </View>
                            <View style={{ backgroundColor: '#ED5C73', position: 'absolute', height: 40, width: 80, borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 280, marginTop: 80 }}>
                                <Text style={{ color: '#fff' }}>Mua ngay</Text>
                            </View>
                            <View style={{ backgroundColor: '#F54545', position: 'absolute', height: 30, width: 80, borderTopLeftRadius: 20, borderBottomRightRadius: 20, alignItems: 'center', justifyContent: 'center', marginLeft: 20, marginTop: 140 }}>
                                <Text style={{ color: '#fff' }}>- {item.sale}</Text>
                            </View>
                            <View style={{ backgroundColor: '#9D9B9B', position: 'absolute', height: 20, width: 250, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginLeft: 120, marginTop: 140 }}>
                                <Text style={{ fontWeight: 'bold' }}>Đã bán {item.ban}</Text>
                            </View>
                            <View style={{ backgroundColor: '#FBD345', position: 'absolute', height: 20, width: 80, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginLeft: 120, marginTop: 140 }}>

                            </View>
                        </View>
                    </Pressable>
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