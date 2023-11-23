import { StyleSheet, Text, View, Image, Pressable, FlatList, TextInput } from 'react-native';

import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const sanPhamTK=[
  {
    img: require('../image/con_bo_cuoi.png'),
    drec: 'Phô mai Con Bò Cười vị truyền...',
    price:'', //gia chua giam
    price_up: '60,500đ', //gia ban (gia sau khi giam) 
  },
  {
    img: require('../image/conboCuoitruyenthong.png'),
    drec: 'Phô mai Con Bò Cười vị truyền...',
    price:'', //gia chua giam
    price_up: '35,100đ', //gia ban (gia sau khi giam) 
  },
  {
    img: require('../image/coBoCuoi8m.png'),
    drec: 'Phô mai Con Bò Cười 8 miếng...',
    price:'', //gia chua giam
    price_up: '37,500đ', //gia ban (gia sau khi giam) 
  },
]

export default function TimKiem1({navigation}) {
  const[dataSanPhamTK, setDataSanPhamTK] = useState(sanPhamTK);
  return (
    <View style={styles.container}>
      <View /*Header*/ style={{flexDirection:'row',backgroundColor: '#ea1717', width: '100%', height: 100, marginTop: -190}}>
        <Pressable
              onPress = {()=>{navigation.navigate('Home')}}
          >
              <AntDesign name="arrowleft" size={30} color="white" style={{marginTop: 35, marginLeft: 15}}/>
        </Pressable>
        <View style={{width: 310, height:40, backgroundColor:'white', borderRadius:5, marginTop:30, marginLeft:10, flexDirection:'row'}}>
           <FontAwesome name="search" size={24} color="#ea1717" style={{marginLeft: 10, marginTop:8}}/>
           <TextInput placeholder='Nhập tên sản phẩm' style={{fontSize: 18,borderWidth:'none', outlineStyle:'none', marginLeft: 10, marginTop:3}}></TextInput>
           
        </View>
       

      </View>
      <View /*Center*/ style={{marginLeft: 100}}>
          <View style={{width: 400, height: 80, flexDirection: 'row', }}>
              <View style={{width: 90, height: 35, borderWidth:1, borderRadius: 15, marginTop: 20, marginLeft: 30}}>
                <Pressable
                    onPress = {()=>{navigation.navigate('TimKiem2')}}
                >
                  <Text style={{fontSize: 20, fontWeight:'450', marginLeft: 25}}>Thịt</Text>
                </Pressable>
              </View>
          </View>
          <View style={{width:'100%', height: 350,}}>
              <View style={{flexDirection:'row', width: '100%', height: 40, marginTop: 10, marginLeft: 10}}>
                  <MaterialCommunityIcons name="lightning-bolt" size={28} color="orange" />
                  <Text style={{fontSize: 20, fontWeight: '700', color:'#ea1717', marginLeft: 10}}>Phô mai khuyến mãi</Text>
                  <Text style={{fontSize: 20, fontWeight: '400', color:'#ea1717', marginLeft: 50}}>Xem thêm</Text>
                  <AntDesign name="right" size={20} color="#ea1717" style={{marginTop: 5}}/>
              </View>
              
              <View>
              <FlatList
                    numColumns={3}
                    data={dataSanPhamTK}
                    renderItem={({item})=>{
                        return(
                            <View style={{flexDirection:'row', marginTop: 10, marginLeft: 10}}>
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
      </View>
      <View /*Footer*/ ></View>
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
