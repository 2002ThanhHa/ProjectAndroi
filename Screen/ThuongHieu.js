import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';

import { useState } from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const thuongHieu1=[
    {
        img: require('../image/logo_color.png'),
    },
    {
        img: require('../image/nestle.png'),
    },
    {
        img: require('../image/pesi.png'),
    },
    {
        img: require('../image/heiniken.png'),
    },
    {
        img: require('../image/kinhdo.png'),
    },
    {
        img: require('../image/lc food.png'),
    },
    {
        img: require('../image/omo.png'),
    },
    {
        img: require('../image/HaoHao.png'),
    },
    {
        img: require('../image/Logo_Lifebuoy.png'),
    },
    {
        img: require('../image/olong.png'),
    },
    {
        img: require('../image/download.png'),
    },
    {
        img: require('../image/Dove.png'),
    },
    {
        img: require('../image/ps.png'),
    },
    {
        img: require('../image/logo-ariel.png'),
    },
    {
        img: require('../image/logo-MODERN_export.png'),
    },
    {
        img: require('../image/knorr.png'),
    },
    {
        img: require('../image/Logo-Sunsilk-PNG.png'),
    },
    {
        img: require('../image/head_shoulders.png'),
    },
    {
        img: require('../image/Maggi.png'),
    },
    {
        img: require('../image/Pantene-logo.png'),
    },
    {
        img: require('../image/DeNhat.png'),
    },
    {
        img: require('../image/sting.png'),
    },
    {
        img: require('../image/romano.png'),
    },
    {
        img: require('../image/cosy.png'),
    },
    {
        img: require('../image/pond.png'),
    },
    {
        img: require('../image/strongbow.png'),
    },
    {
        img: require('../image/Vaseline.png'),
    },
    {
        img: require('../image/pamfers.png'),
    },
    {
        img: require('../image/ambi_pur.png'),
    },
    {
        img: require('../image/twister.png'),
    },
    {
        img: require('../image/Oral-B-Logo-2008.png'),
    },
    
]

const thuongHieu2=[
    {
        img: require('../image/unilever.png'),
    },
    {
        img: require('../image/P&G.png'),
    },
    {
        img: require('../image/wipro.png'),
    },
    {
        img: require('../image/conbocuoi.png'),
    },
    {
        img: require('../image/acecook.png'),
    },
    {
        img: require('../image/tiger.png'),
    },
    {
        img: require('../image/Comfort.png'),
    },
    {
        img: require('../image/Nescafe_logo.png'),
    },
    {
        img: require('../image/sunlight.png'),
    },
    {
        img: require('../image/vim.png'),
    },
    {
        img: require('../image/clear.png'),
    },
    {
        img: require('../image/aqua.png'),
    },
    {
        img: require('../image/milo.png'),
    },
    {
        img: require('../image/closeup.png'),
    },
    {
        img: require('../image/surf.png'),
    },
    {
        img: require('../image/maxkleen.png'),
    },
    {
        img: require('../image/enchanteur.png'),
    },
    {
        img: require('../image/Tresemme.png'),
    },
    {
        img: require('../image/MienPhuHuong.png'),
    },
    {
        img: require('../image/hazeline.png'),
    },
    {
        img: require('../image/gervenne.png'),
    },
    {
        img: require('../image/7up.png'),
    },
    {
        img: require('../image/Oreo-Logo-PNG-1.png'),
    },
    {
        img: require('../image/afc.png'),
    },
    {
        img: require('../image/BunTuoi.png'),
    },
    {
        img: require('../image/brand-solite-logo.png'),
    },
    {
        img: require('../image/brand-mirinda-logo.png'),
    },
    {
        img: require('../image/Gillette.png'),
    },
    {
        img: require('../image/Safeguard.png'),
    },

]

const maKhuyenMai=[
    {
        img: require('../image/unilever.png'),
        drec:'HSD 01.11.2023 Khuyến Mãi đơn hàng mua Sữa...',
        giaGiam: '25.000đ'
    },
    {
        img: require('../image/Meizan.png'),
        drec:'HSD 01.11.2023 Khuyến Mãi đơn hàng Meizan,...',
        giaGiam: '15.000đ'
    },
    {
        img: require('../image/brand-solite-logo.png'),
        drec:'HSD 01.11.2023 Khuyến MÃi đơn hàng Soltie...',
        giaGiam: '15.000đ'
    },

]

const sanPham1=[
    {
        img: require('../image/milo_8_hop.png'),
        drec: 'Lô 8 Sữa Milo 180ml - 44361',
        price:'56,000đ',
        price_up: '', 
    },
    {
        img: require('../image/milo_4_hop.png'),
        drec: 'Lô 4 hộp Sữa Milo 110ml...',
        price:'18,500đ',
        price_up: '', 
    },
    {
        img: require('../image/caphesua.png'),
        drec: 'CAFE Sữa đá 240g...',
        price:'56,000đ',
        price_up: '', 
    },
]

const sanPham2=[
    {
        img: require('../image/clear_xanh.png'),
        drec: 'Dầu gội sạch gàu Clear Men...',
        price:'170,000đ',
        price_up: '137,800đ', 
    },
    {
        img: require('../image/omo.png'),
        drec: 'Nước giặt OMO Matic cửa trên...',
        price:'213,400đ',
        price_up: '174,00đ', 
    },
    {
        img: require('../image/sunlight_lausan.png'),
        drec: 'Nước lau sàn Sunlight...',
        price:'92,000đ',
        price_up: '77,000đ', 
    },
]

const sanPham3=[
    {
        img: require('../image/nuocruachen.png'),
        drec: 'Nước rửa chén Sunlinght thiên...',
        price:'104,900đ',
        price_up: '88,500đ', 
    },
    {
        img: require('../image/nuocgiatomo.png'),
        drec: 'Nước giặt OMO Matic cửa...',
        price:'213,400đ',
        price_up: '168,000đ', 
    },
    {
        img: require('../image/sunlight_lausan.png'),
        drec: 'Nước lau sàn Sunlight...',
        price:'92,000đ',
        price_up: '77,000đ', 
    },

]

const sanPham4=[
    {
        img: require('../image/purite.png'),
        drec: 'Sữa tắm Purite anh đào 850ml...',
        price:'', //gia chua giam
        price_up: '185,900đ', //gia ban (gia sau khi giam) 
    },
    {
        img: require('../image/romano.png'),
        drec: 'Dầu gội Romano classic...',
        price:'', //gia chua giam
        price_up: '190,900đ', //gia ban (gia sau khi giam) 
    },
    {
        img: require('../image/enchantuer2.png'),
        drec: 'Sữa tắm Enchantuer...',
        price:'', //gia chua giam
        price_up: '193,400đ', //gia ban (gia sau khi giam) 
    },
]
const sanPham5=[
    {
        img: require('../image/olongchai.png'),
        drec: 'Trà ô long Tea Plus...',
        price:'', //gia chua giam
        price_up: '17,400đ', //gia ban (gia sau khi giam) 
    },
    {
        img: require('../image/stinglon.png'),
        drec: 'Nước tăng lực Sting dâu...',
        price:'', //gia chua giam
        price_up: '8,700đ', //gia ban (gia sau khi giam) 
    },
    {
        img: require('../image/pessilon.png'),
        drec: 'Nước ngọt Pessi...',
        price:'', //gia chua giam
        price_up: '9,500đ', //gia ban (gia sau khi giam) 
    },
]

const sanPham6=[
    {
        img: require('../image/gaothomGo.png'),
        drec: 'Gạo thơm thượng hạng...',
        price:'', //gia chua giam
        price_up: '150,000đ', //gia ban (gia sau khi giam) 
    },
    {
        img: require('../image/GaoST25Go.png'),
        drec: 'Gạo ST25 GO! túi 5kg - 24004...',
        price:'', //gia chua giam
        price_up: '185,000đ', //gia ban (gia sau khi giam) 
    },
    {
        img: require('../image/gaoLuaTomST25Go.png'),
        drec: 'Gạo ST25 lúa tôm GO! túi 5kg...',
        price:'', //gia chua giam
        price_up: '198,000đ', //gia ban (gia sau khi giam) 
    },
]





export default function ThuongHieu({navigation}) {
    const[dataThuongHieu1, setDataThuongHieu1] = useState(thuongHieu1);
    const[dataThuongHieu2, setDataThuongHieu2] = useState(thuongHieu2);
    const[dataMaKhuyenMai, setDataMaKhuyenMai] = useState(maKhuyenMai);
    const[dataSanPham1, setDataSanPham1] = useState(sanPham1);
    const[dataSanPham2, setDataSanPham2] = useState(sanPham2);
    const[dataSanPham3, setDataSanPham3] = useState(sanPham3);
    const[dataSanPham4, setDataSanPham4] = useState(sanPham4);
    const[dataSanPham5, setDataSanPham5] = useState(sanPham5);
    const[dataSanPham6, setDataSanPham6] = useState(sanPham6);
  return (
    <View style={styles.container}>
      {/*Header*/}
        <View /*Header*/ style={{width: 395, height: 323, backgroundColor: '#E2CAE4', marginTop: 3650}}>       
        <View style={{flexDirection: 'row'}}>
            <AntDesign name="enviromento" size={24} color="white" style={{marginLeft: 20, marginTop: 10}}/>
            <Text style ={{fontSize: 20, color: 'white', fontWeight: '500', margin: 10, marginLeft: 5}}>GO! GÒ VẤP</Text>
            <Image source={require('../image/Polygon.png')} style={{width: 13, height: 7, margin: 24, marginLeft: -5, resizeMode:'contain'}}/>
        </View>

        <View style={{width: '100%', height: 50, flexDirection:'row'}}>
            <Pressable 
                onPress={()=>{navigation.navigate('TimKiem1')}}
              style={{width: 320, height: 40, borderRadius: 20, backgroundColor: 'white', marginLeft: 20, flexDirection:'row'}}
            >
              <Image source={require('../image/TimKiem.png')} style={{width: 30, height: 35, margin: 5, marginLeft: 10, resizeMode:'contain'}}/>
              <Text style ={{fontSize: 18, margin: 7, marginLeft: -3}}>Hi, Bạn muốn tìm gì hôm nay</Text>
            </Pressable>
            <AntDesign name="shoppingcart" size={32} color="white" style={{marginTop:5}} />
        </View>

        <View>
            <Image source={require('../image/hinh1.png')} style={{width: '100%', height: 200,marginLeft: 3,}}/>
            <View style={{flexDirection:'row'}}>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 140}}/>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 10}}/>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 10}}/>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 10}}/>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 10}}/>
            </View>
        </View>
        </View>

        <View style={{height: 250, }}>
            <Text style={{fontSize: 22, fontWeight: '500', marginLeft: 2260}}>Thương hiệu</Text>
            <View style={{height: 100, marginLeft: 2250, marginTop: 20}}>
                <FlatList              
                    horizontal='true'
                    data={dataThuongHieu1}
                    renderItem={({item})=>{
                        return(
                            <View style={{}}>
                                <Pressable 
                                    onPress = {()=>{navigation.navigate('NhanHangGo')}}
                                    style={{width: 80, height: 80, shadowColor: 'gray', shadowRadius: 5, borderRadius: 5, marginLeft: 5}}
                                >
                                    <Image source={item.img} style={{width: 60, height: 60, resizeMode:'contain',marginTop: 10,marginLeft: 10, }}/>
                                </Pressable>
                            </View>
                        )
                    }}

                ></FlatList>
            </View>
            <View style={{height: 100, marginLeft: 2250, marginTop: 10}}>
                <FlatList
                    horizontal='true'
                    data={dataThuongHieu2}
                    renderItem={({item})=>{
                        return(
                            <View>
                                <Pressable 
                                    // onPress = {()=>{navigation.navigate('NhanHangGo')}}
                                    style={{width: 80, height: 80, shadowColor: 'gray', shadowRadius: 5, borderRadius: 5, marginLeft: 5}}
                                >
                                    <Image source={item.img} style={{width: 60, height: 60, resizeMode:'contain',marginTop: 10,marginLeft: 10, }}/>
                                </Pressable>
                            </View>
                        )
                    }}

                ></FlatList>
            </View>
        </View>

        <View /*Ma khuyen mai*/ style={{height: 300, marginLeft: 80}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 22, fontWeight: '600', marginLeft: 10}}>Mã Khuyến Mãi</Text>
                <Text style={{fontSize: 20, marginLeft: 90, color: '#ae1717'}}>Xem thêm</Text>
                <AntDesign name="right" size={18} color="#ae1717" style={{marginTop: 5}}/>
            </View>
            
            <FlatList
                numColumns={3}
                data={dataMaKhuyenMai}
                renderItem={({item})=>{
                    return(
                        <View style={{width: 150, height: 235, marginLeft: 5, shadowColor: 'gray', shadowRadius: 5, borderRadius: 20}}>               
                            <View style={{width:'75%', height: 35, borderTopLeftRadius: 20, borderEndEndRadius: 20, backgroundColor: 'red'}}>
                                <Text style={{fontSize:20, fontWeight:'500', color: 'white', margin:5 ,marginLeft: 10}}>{item.giaGiam}</Text>                   
                            </View>
                            <Image source={item.img} style={{width: 65, height:65, resizeMode:'contain', marginLeft: 40, marginTop: 10}}/>
                            <Text style={{fontSize:16, fontWeight:'400', marginTop:10 ,marginLeft: 10}}>{item.drec}</Text>
                            <View style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#EA4916' , borderRadius:15, marginLeft: 8}}>
                                <Text style={{fontSize:20, fontWeight:'500', color:'white',margin: 2,marginLeft:25}}>Lưu lại</Text>
                                <Entypo name="arrow-with-circle-down" size={20} color="white" style={{margin: 5, marginLeft:5}} />
                            </View>
                        </View>
                    )
                }}
            ></FlatList>
        </View>
        
        <View /*Hot Item/Sales*/ style={{height: 500, marginLeft: 120}}>
            <View style={{height: 250}}>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="fire" size={24} color="black" style={{marginLeft: 5}}/>
                <Text style={{fontSize: 16, marginLeft:5, fontWeight:'500'}}>Hot Items/Sales </Text>
                <MaterialIcons name="delivery-dining" size={24} color="black" style={{marginLeft: 5}} />
                <Text style={{fontSize: 16, marginLeft:5, fontWeight:'500'}}>Freeship đơn hàng 300k </Text>
            </View>
            <Image source={require('../image/hinh5.png')} style={{width: '100%', height: 200, borderRadius: 8, marginTop: 10}}/>
            </View>

            <View>
                <FlatList
                    numColumns={3}
                    data={dataSanPham1}
                    renderItem={({item})=>{
                        return(
                            <View style={{flexDirection:'row'}}>
                                <View style={{width: '100%', height: 350, margin: 10, marginLeft: 5 }}>
                                    <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10, }}>
                                       
                                        <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 110}}/>
                                        <Image source={item.img} style={{width: 75, height: 75, marginTop: -10, marginLeft: 40, resizeMode: 'contain'}}/>
                                        <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color: '#ae1717', marginTop: 10}}>{item.price}</Text>
                                        <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 5}}>{item.drec}</Text>         
                                        <View /*Button them vao gio hang*/>
                                            <Pressable
                                                onPress={()=>{navigation.navigate('GioHang')}}
                                            style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                                            >
                                            <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>
        </View>
        
        <View /*Top Brand Top Deal*/ style={{height: 500, marginLeft: 120, marginTop:20}}>
            <View style={{height: 250}}>
                <View style={{flexDirection:'row'}}>
                    <AntDesign name="checkcircle" size={14} color="black" style={{marginLeft: 5, marginTop: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Top Brand Top Deal </Text>
                    <MaterialCommunityIcons name="fire" size={20} color="black" style={{marginLeft: 5}}/>
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Hot Items/Sales </Text>
                    <MaterialIcons name="delivery-dining" size={20} color="black" style={{marginLeft: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Freeship đơn hàng 300k </Text>
                </View>
                <Image source={require('../image/hinh6.jpg')} style={{width: '100%', height: 250, borderRadius: 8, marginTop: 10}}/>
            </View>

            <View>
                <FlatList
                    numColumns={3}
                    data={dataSanPham2}
                    renderItem={({item})=>{
                        return(
                            <View style={{flexDirection:'row', marginTop: 50}}>
                                <View style={{width: '100%', height: 350, margin: 10, marginLeft: 5 }}>
                                    <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10, }}>
                                       
                                        <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 110}}/>
                                        <Image source={item.img} style={{width: 75, height: 75, marginTop: -10, marginLeft: 40, resizeMode: 'contain'}}/>
                                        <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color: '#ea1717', marginTop: 10}}>{item.price_up} <s style={{fontSize:16, fontWeight:'400', marginTop: 10, marginLeft: 5 , color: 'gray'}}>{item.price}</s></Text>
                                        <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 5}}>{item.drec}</Text>         
                                        <View /*Button them vao gio hang*/>
                                            <Pressable
                                              onPress={()=>{navigation.navigate('GioHang')}}
                                            style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                                            >
                                            <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>
        </View>

        <View /*Top Brand Top Deal 2*/ style={{height: 500, marginLeft: 120, marginTop:80}}>
            <View style={{height: 250}}>
                <View style={{flexDirection:'row'}}>
                    <AntDesign name="checkcircle" size={14} color="black" style={{marginLeft: 5, marginTop: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Top Brand Top Deal </Text>
                    <MaterialCommunityIcons name="fire" size={20} color="black" style={{marginLeft: 5}}/>
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Hot Items/Sales </Text>
                    <MaterialIcons name="delivery-dining" size={20} color="black" style={{marginLeft: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Freeship đơn hàng 300k </Text>
                </View>
                <Image source={require('../image/hinh7.jpg')} style={{width: '100%', height: 250, borderRadius: 8, marginTop: 10}}/>
            </View>

            <View>
                <FlatList
                    numColumns={3}
                    data={dataSanPham3}
                    renderItem={({item})=>{
                        return(
                            <View style={{flexDirection:'row', marginTop: 50}}>
                                <View style={{width: '100%', height: 350, margin: 10, marginLeft: 5 }}>
                                    <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10, }}>
                                       
                                        <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 110}}/>
                                        <Image source={item.img} style={{width: 75, height: 75, marginTop: -10, marginLeft: 40, resizeMode: 'contain'}}/>
                                        <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color: '#ea1717', marginTop: 10}}>{item.price_up} <s style={{fontSize:16, fontWeight:'400', marginTop: 10, marginLeft: 5 , color: 'gray'}}>{item.price}</s></Text>
                                        <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 5}}>{item.drec}</Text>         
                                        <View /*Button them vao gio hang*/>
                                            <Pressable
                                              onPress={()=>{navigation.navigate('GioHang')}}
                                            style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                                            >
                                            <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>
        </View>
        
        <View /*Top Brand Top Deal 3*/ style={{height: 500, marginLeft: 120, marginTop:80}}>
            <View style={{height: 250}}>
                <View style={{flexDirection:'row'}}>
                    <AntDesign name="checkcircle" size={14} color="black" style={{marginLeft: 5, marginTop: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Top Brand Top Deal </Text>
                    <MaterialCommunityIcons name="fire" size={20} color="black" style={{marginLeft: 5}}/>
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Hot Items/Sales </Text>
                    <MaterialIcons name="delivery-dining" size={20} color="black" style={{marginLeft: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Freeship đơn hàng 300k </Text>
                </View>
                <Image source={require('../image/hinh1.png')} style={{width: '100%', height: 250, borderRadius: 8, marginTop: 10}}/>
            </View>

            <View>
                <FlatList
                    numColumns={3}
                    data={dataSanPham4}
                    renderItem={({item})=>{
                        return(
                            <View style={{flexDirection:'row', marginTop: 50}}>
                                <View style={{width: '100%', height: 350, margin: 10, marginLeft: 5 }}>
                                    <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10, }}>
                                       
                                        <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 110}}/>
                                        <Image source={item.img} style={{width: 75, height: 75, marginTop: -10, marginLeft: 40, resizeMode: 'contain'}}/>
                                        <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color: '#ea1717', marginTop: 10}}>{item.price_up} <s style={{fontSize:16, fontWeight:'400', marginTop: 10, marginLeft: 5 , color: 'gray'}}>{item.price}</s></Text>
                                        <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 5}}>{item.drec}</Text>         
                                        <View /*Button them vao gio hang*/>
                                            <Pressable
                                              onPress={()=>{navigation.navigate('GioHang')}}
                                            style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                                            >
                                            <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>
        </View>
        
        <View /*Top Brand Top Deal 4*/ style={{height: 500, marginLeft: 120, marginTop:80}}>
            <View style={{height: 250}}>
                <View style={{flexDirection:'row'}}>
                    <AntDesign name="checkcircle" size={14} color="black" style={{marginLeft: 5, marginTop: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Top Brand Top Deal </Text>
                    <MaterialCommunityIcons name="fire" size={20} color="black" style={{marginLeft: 5}}/>
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Hot Items/Sales </Text>
                    <MaterialIcons name="delivery-dining" size={20} color="black" style={{marginLeft: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Freeship đơn hàng 300k </Text>
                </View>
                <Image source={require('../image/hinh8.jpg')} style={{width: '100%', height: 250, borderRadius: 8, marginTop: 10}}/>
            </View>

            <View>
                <FlatList
                    numColumns={3}
                    data={dataSanPham5}
                    renderItem={({item})=>{
                        return(
                            <View style={{flexDirection:'row', marginTop: 50}}>
                                <View style={{width: '100%', height: 350, margin: 10, marginLeft: 5 }}>
                                    <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10, }}>
                                       
                                        <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 110}}/>
                                        <Image source={item.img} style={{width: 75, height: 75, marginTop: -10, marginLeft: 40, resizeMode: 'contain'}}/>
                                        <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color: '#ea1717', marginTop: 10}}>{item.price_up} <s style={{fontSize:16, fontWeight:'400', marginTop: 10, marginLeft: 5 , color: 'gray'}}>{item.price}</s></Text>
                                        <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 5}}>{item.drec}</Text>         
                                        <View /*Button them vao gio hang*/>
                                            <Pressable
                                              onPress={()=>{navigation.navigate('GioHang')}}
                                            style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                                            >
                                            <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>
        </View>

        <View /*Top Brand Top Deal 5*/ style={{height: 500, marginLeft: 120, marginTop:80}}>
            <View style={{height: 250}}>
                <View style={{flexDirection:'row'}}>
                    <AntDesign name="checkcircle" size={14} color="black" style={{marginLeft: 5, marginTop: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Top Brand Top Deal </Text>
                    <MaterialCommunityIcons name="fire" size={20} color="black" style={{marginLeft: 5}}/>
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Hot Items/Sales </Text>
                    <MaterialIcons name="delivery-dining" size={20} color="black" style={{marginLeft: 5}} />
                    <Text style={{fontSize: 14, marginLeft:5, fontWeight:'500'}}>Freeship đơn hàng 300k </Text>
                </View>
                <Image source={require('../image/hinh9.jpg')} style={{width: '100%', height: 250, borderRadius: 8, marginTop: 10}}/>
            </View>

            <View>
                <FlatList
                    numColumns={3}
                    data={dataSanPham6}
                    renderItem={({item})=>{
                        return(
                            <View style={{flexDirection:'row', marginTop: 50}}>
                                <View style={{width: '100%', height: 350, margin: 10, marginLeft: 5 }}>
                                    <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10, }}>
                                       
                                        <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 110}}/>
                                        <Image source={item.img} style={{width: 75, height: 75, marginTop: -10, marginLeft: 40, resizeMode: 'contain'}}/>
                                        <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color: '#ea1717', marginTop: 10}}>{item.price_up} <s style={{fontSize:16, fontWeight:'400', marginTop: 10, marginLeft: 5 , color: 'gray'}}>{item.price}</s></Text>
                                        <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 5}}>{item.drec}</Text>         
                                        <View /*Button them vao gio hang*/>
                                            <Pressable
                                              onPress={()=>{navigation.navigate('GioHang')}}
                                            style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                                            >
                                            <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>
        </View>
        <Text style={{fontSize: 16, fontWeight: '400', marginTop: 80}}>Đã tải hết gian hàng</Text>

    {/*footder*/}
        <View /*End*/ style={{width: '100%', height: 80, flexDirection: 'row'}}>         
            <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
                <Pressable
                    onPress={()=>{navigation.navigate('Home')}}
                >
                    <Image source={require('../image/logoGo_den.png')} style={{width: '90%', height: 40, margin: 15, marginLeft: 3}}/>
                    <Text style={{fontSize: 13, fontWeight: '500', color: 'black',margin: -10, marginLeft: 4,  }}>Trang chủ</Text>
                </Pressable>
            </View>

            <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
                <Pressable
                    onPress={()=>{navigation.navigate('DanhMuc')}}
                    >
                    <Feather name="layers" size={44} color="gray" style={{margin: 12, marginLeft: 15}}/>
                    <Text style={{fontSize: 13, fontWeight: '500',margin: -15, marginLeft: 8,  }}>Danh mục</Text>
                </Pressable>
                
            </View>

            <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
                <Pressable
                    onPress={()=>{navigation.navigate('ThuongHieu')}}
                    >
                    <Feather name="shopping-bag" size={44} color="#ea1717" style={{margin: 12, marginLeft: 15}}/>
                    <Text style={{fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 1, color: '#ea1717'}}>Thương hiệu</Text>
                </Pressable>
                
            </View>
            
            <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
                <Pressable
                    onPress={()=>{navigation.navigate('ThongBao')}}
                    >
                    <FontAwesome5 name="bell" size={45} color="gray" style={{margin: 12, marginLeft: 15}}/>
                    <Text style={{fontSize: 13, fontWeight: '500',margin: -15, marginLeft: 4,  }}>Thông báo</Text>
                </Pressable>
                
            </View>
            
            <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
                <Pressable
                    onPress={()=>{navigation.navigate('TaiKhoan')}}

                >
                    <MaterialCommunityIcons name="account-outline" size={50} color="gray" style={{margin: 12, marginLeft: 15}}/>
                    <Text style={{fontSize: 13, fontWeight: '500',margin: -15, marginLeft: 9,  }}>Tài khoản</Text>
                </Pressable>
            
            </View>     
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});