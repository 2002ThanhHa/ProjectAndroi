import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
export default function KiemTraGia({ navigation }) {

    return (

        <View style={{ backgroundColor: '#f8f4f4', flex: 1 }}>
            <Pressable onPress={() => { navigation.navigate("Home") }}>
                <Image source={require("../image_Ha/KTgia/ktgia.jpg")}
                    style={{ height: 250, resizeMode: 'contain', width: '100%' }} />
            </Pressable>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>Check Price là gì? </Text>
            <Text style={{ color: '#484646', fontWeight: '500', fontSize: 18, marginLeft: 10 }}>Một công cụ đơn giản để tìm kiếm giá. Bạn cũng có thể dễ dàng chia sẻ những vấn đề về giá cả với chúng tôi. </Text>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>Bạn nên sử dụng Check Price khi nào?  </Text>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require("../image_Ha/KTgia/search.jpg")}
                    style={{ height: 80, resizeMode: 'contain', width: 80 }} />
                <Text style={{ color: '#484646', fontWeight: '500', fontSize: 18, marginLeft: 10 }}>Thiếu/ mất bảng giá trong cửa hàng. Bạn có thể quét ngay mã vạch sản phẩm để thấy giá. </Text>

            </View>

            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>Check Price hoạt động như thế nào?  </Text>
            <Text style={{ color: '#484646', fontWeight: '500', fontSize: 18, marginLeft: 10 }}>- Chọn siêu thị GO! hoặc BigC gần bạn nhất. </Text>
            <Text style={{ color: '#484646', fontWeight: '500', fontSize: 18, marginLeft: 10 }}>- Quét mã vạch sản phẩm để biết ngay giá bán hiện tại.  </Text>
            <Text style={{ color: '#484646', fontWeight: '500', fontSize: 18, marginLeft: 10 }}>- Bạn có thể quét/kiểm tra tối đa 50 sản phẩm mỗi ngày. Số lần quét được đếm dựa trên thiết bị của bạn. </Text>
            <Text style={{ color: '#484646', fontWeight: '500', fontSize: 18, marginLeft: 10 }}>- Đây là dịch vụ dành riêng cho người dùng/khách hàng của GO!&BigC  </Text>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>Những câu hỏi thường gặp </Text>
            <Text style={{ color: '#484646', fontWeight: '700', fontSize: 18, marginLeft: 10 }}>- Trong trường hợp không thể quét mã vạch sản phẩm, tôi nên làm gì? </Text>
            <Text style={{ color: '#484646', fontWeight: '500', fontSize: 18, marginLeft: 10 }}>Nếu ứng dụng không thể quét mã vạch sản phẩm, vui lòng nhập 13 số vào khung “Nhập mã vạch bằng tay”. Một vài mã vạch cso chất lượng in ấn không tốt hoặc do bao bì sản phẩm gây khó khăn trong quá trình đọc của máy quét trên điện thoại thông minh. </Text>
            <Text style={{ color: '#484646', fontWeight: '700', fontSize: 18, marginLeft: 10 }}>- Tại sao một số mặt hàng được bán trong cửa hàng nhưng Check Price thông báo sản phẩm không có sẵn tại cửa hàng? </Text>
            <Text style={{ color: '#484646', fontWeight: '500', fontSize: 18, marginLeft: 10 }}>Mặt hàng này thuộc nhóm thực phẩm tươi sống. Một số mã vạch của nhóm này được tạo riêng cho cửa hàng, nên mã vạch sản phẩm không phổ biến. Đối với các sản phẩm khác, chúng tôi đang trong quá trình cập nhật dữ liệu. </Text>
            <View style={{ marginLeft: 20,backgroundColor: 'red', height: 50, width: '90%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: 10 }}>
             <Text style={{ color: '#fff', fontWeight:'bold' }}>QUÉT NGAY</Text></View>
        </View>


    );
}