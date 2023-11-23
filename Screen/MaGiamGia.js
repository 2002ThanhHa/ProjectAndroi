import { StyleSheet, Text, View, Image, Pressable, FlatList, TextInput } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const maGiamGia=[
  {
      img: require('../image/power100.png'),
      name:'Khuyến Mãi đơn hàng có sản phẩm Power100',
      drec: 'Giảm ngay 20k cho đơn hàng Power100 từ 149k',
      dieukien:'Điều kiện khuyến mãi',
      magiam: 'POWER100100C320',
      HSD: 'HSD: 31.11.2023',
  }, 

  {
    img: require('../image/comfort_logo.png'),
    name:'Khuyến Mãi đơn hàng có sản phẩm Comfort',
    drec: 'Giảm ngay 25k cho đơn hàng Comfort 3.2 lít từ 499k',
    dieukien:'Điều kiện khuyến mãi',
    magiam: 'COMOFORT25C323',
    HSD: 'HSD: 31.10.2023',
  }, 

  {
    img: require('../image/P&G.png'),
    name:'Khuyến Mãi đơn hàng có sản phẩm chăm sóc cá nhân P&G',
    drec: 'Giảm ngay 25k cho đơn hàng chăm sóc cá nhân P&G từ 249k',
    dieukien:'Điều kiện khuyến mãi',
    magiam: 'P&GC322',
    HSD: 'HSD: 15.11.2023',
  }, 

  {
    img: require('../image/brand-solite-logo.png'),
    name:'Khuyến Mãi đơn hàng Silite',
    drec: 'Giảm ngay 15k cho đơn hàng Solite từ 80k',
    dieukien:'Điều kiện khuyến mãi',
    magiam: 'SOLITEC322',
    HSD: 'HSD: 11.11.2023',
  }, 

  {
    img: require("../image/L'Oréal_logo.svg.png"),
    name:'Khuyến Mãi đơn hàng có sản phẩm chăm sóc da Loreal và Garnier',
    drec: 'Giảm ngay 20k cho đơn hàng chăm sóc da Loreal và Garnier từ 299k',
    dieukien:'Điều kiện khuyến mãi',
    magiam: "L'OREALC320",
    HSD: 'HSD: 25.11.2023',
  }, 

]

export default function MaGiamGia({navigation}) {
    const[dataMaGiamGia, setDataMaGIamGia] = useState(maGiamGia);
  return (
    <View style={styles.container}>
      <View /*Header*/ style={{flexDirection:'row',backgroundColor: '#ea1717', width: '100%', height: 100, marginTop: 1100}}>
        <Pressable
              onPress = {()=>{navigation.navigate('Home')}}
          >
              <AntDesign name="arrowleft" size={30} color="white" style={{marginTop: 35, marginLeft: 15}}/>
        </Pressable>
        <View style={{width: 310, height:40, backgroundColor:'white', borderRadius:5, marginTop:30, marginLeft:10, flexDirection:'row'}}>
           <TextInput placeholder='Nhập mã' style={{fontSize: 18,borderWidth:'none', outlineStyle:'none', marginLeft: 10, marginTop:3}}></TextInput>
           <FontAwesome name="search" size={24} color="#ea1717" style={{marginLeft: 50, marginTop:8}} />
        </View>
       

      </View>
      <View /*Center*/ >
        <View>
          <FlatList
            data={dataMaGiamGia}
            renderItem={({item})=>{
              return(
                <View style={{width: 380, height: 350, shadowColor:'gray', shadowRadius: 5, flexDirection:'row',}}>
                    <Image source={item.img} style={{width: 80, height: 80, resizeMode: 'contain', marginLeft: 10, marginTop: 100}}/>
                    <View style={{width: 3, height: 300, backgroundColor:'gray', marginTop: 20, marginLeft: 10}}></View>
                    <View style={{width: 250, height:'100%'}}>
                      <Text style={{fontSize: 23, fontWeight:'500', marginLeft:10, marginTop: 10}}>{item.name}</Text>
                      <Text style={{fontSize: 18, fontWeight:'400', marginLeft:10, marginTop: 10}}>{item.drec}</Text>
                      <View style={{width: 140, height: 35, backgroundColor:'#FC9A07', borderRadius: 15, marginLeft: 10, marginTop: 10}}>
                          <Text style={{fontSize: 17, fontWeight:'400', marginLeft:8, marginTop: 5, color:'white'}}>{item.HSD}</Text>
                      </View>
                      <Text style={{fontSize: 19, fontWeight:'400', marginLeft:10, marginTop: 10, color:'#002FA7'}}><u>{item.dieukien}</u></Text>
                      <Text style={{fontSize: 19, fontWeight:'700', marginLeft:10, marginTop: 10, color:'#ae1717'}}>{item.magiam}</Text>
                      <View style={{width: 120, height: 35, backgroundColor:'#ea1717', borderRadius: 5, marginLeft: 150, marginTop: 2, flexDirection:'row'}}>
                      <Text style={{fontSize: 19, fontWeight:'500', marginLeft:15, marginTop: 5, color:'white'}}>Lưu lại</Text>
                          <EvilIcons name="arrow-down" size={24} color="white" style={{marginTop: 5, marginLeft: 10}}/>
                      </View>
                    </View>
                </View>
              )
            }}
          ></FlatList>
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
