import { StyleSheet, Text, View, Image, Pressable, FlatList, TextInput } from 'react-native';

import { useState } from 'react'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const sanPhamTK2=[
  {
    img: require('../image/thitga.png'),
    name: 'Thịt gà - Thị gà nấu nấm - 01306',
    price:'', //gia chua giam
    price_up: '174,000đ', //gia ban (gia sau khi giam) 
  },
  {
    img: require('../image/thitkho.png'),
    name: 'Thịt kho 500g - 34624',
    price:'', //gia chua giam
    price_up: '146,000đ', //gia ban (gia sau khi giam) 
  },
  {
    img: require('../image/supga.png'),
    name: 'Súp thịt gà - 54015',
    price:'', //gia chua giam
    price_up: '10,000đ', //gia ban (gia sau khi giam) 
  },
  {
    img: require('../image/banhdonut.png'),
    name: 'Bánh donut nhân thịt - 55236',
    price:'', //gia chua giam
    price_up: '12,000đ', //gia ban (gia sau khi giam) 
  },
  {
    img: require('../image/thitbo.png'),
    name: 'Thịt bò - Thăn 300g - 01617',
    price:'', //gia chua giam
    price_up: '114,200đ', //gia ban (gia sau khi giam) 
  },
  {
    img: require('../image/henxay.png'),
    name: 'Thịt hến khay 250g - 12467',
    price:'', //gia chua giam
    price_up: '30,00đ', //gia ban (gia sau khi giam) 
  },
]

export default function TimKiem2({navigation}) {
  const[dataSanPhamTK2, setDataSanPhamTK2] = useState(sanPhamTK2);
  return (
    <View style={styles.container}>
      <View /*Header*/ style={{flexDirection:'row',backgroundColor: '#ea1717', width: '100%', height: 100, marginTop: 10}}>
        <Pressable
              onPress={()=>{navigation.navigate('TimKiem1')}}
          >
              <AntDesign name="arrowleft" size={30} color="white" style={{marginTop: 35, marginLeft: 15}}/>
        </Pressable>
        <View style={{width: 310, height:40, backgroundColor:'white', borderRadius:5, marginTop:30, marginLeft:10, flexDirection:'row'}}>         
            <FontAwesome name="search" size={24} color="#ea1717" style={{marginLeft: 10, marginTop:8}}/>         
           <TextInput placeholder='thịt' style={{fontSize: 18,borderWidth:'none', outlineStyle:'none', marginLeft: 10, marginTop:3}}></TextInput>
           <Pressable onPress={()=>{navigation.navigate('Home')}}>
              <AntDesign name="closecircle" size={24} color="black" style={{marginTop: 8, marginLeft: 20}}/>
           </Pressable>
           
           
        </View>
       

      </View>
      <View /*Center*/ >
        <FlatList
          
          data={dataSanPhamTK2}
          renderItem={({item})=>{
            return(
              <View >
                  <View  style={{width: '100%', height:120, flexDirection:'row'}}>
                  <View>
                    <Ionicons name="heart-circle" size={28} color="gray" style={{marginTop: 10, marginLeft: 80}}/>
                    <Image source={item.img} style={{width: 70, height:70, resizeMode:'contain' , marginTop: -20, marginLeft: 10}}/>
                  </View>
                  <View>
                    <Text style={{fontSize: 18, marginTop: 15, marginLeft: 10}}>{item.name}</Text>
                    <Text style={{fontSize: 18, marginTop: 10, marginLeft: 10, color:'#FDA802', fontWeight:'500'}}>{item.price_up}</Text>
                  </View>

                  <View style={{position:'absolute',width: 110, height: 35, backgroundColor:'#ea1717', borderRadius:5, marginTop: 60, marginLeft: 250}}>
                    <Pressable onPress={()=>{navigation.navigate('GioHang')}}>
                      <Text style={{fontSize: 15, marginTop: 8, marginLeft: 10, color:'white', fontWeight: '500'}}>Thêm vào giỏ</Text>
                    </Pressable>
                  </View>

                  </View>
                  <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -15}}></View>
              </View>
            )
          }}
        ></FlatList>
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
