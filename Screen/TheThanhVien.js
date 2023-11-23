import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';

import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function TheThanhVien({navigation}) {
  return (
    <View style={styles.container}>
      <View /*Header*/ style={{flexDirection:'row',backgroundColor: '#ea1717', width: '100%', height: 80, marginTop: -160 }}>
        <Pressable
            onPress = {()=>{navigation.navigate('Home')}}
        >
            <AntDesign name="arrowleft" size={30} color="white" style={{marginTop: 25, marginLeft: 15}}/>
        </Pressable>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'white', marginLeft: 10, marginTop: 25}}>Thẻ Thành VIên</Text>
        
      </View>
      <View /*Center*/ >
        <View style={{flexDirection:'row', marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: '500', color: 'black', marginTop: 10, marginLeft: -10}}>Thẻ Thành Viên của bạn</Text>
            <Text style={{fontSize: 18, fontWeight: '400', color: 'gray', marginTop: 10, marginLeft: 10}}>Hủy liên kết thẻ</Text>
            <AntDesign name="minussquareo" size={22} color="#ea1717" style={{marginTop: 10, marginLeft: 10}}/>
        </View>
        <View style={{width: 300, height: 120, backgroundColor:'#ea1717', borderRadius: 5, marginLeft: 30, marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: '400', color: 'white', marginTop: 10, marginLeft: 20}}>KHÁ</Text>
            <View style={{width: 250, height: 80, backgroundColor:'white', marginLeft: 25, borderRadius: 5,}}>
                <Image source={require('../image/barcode.png')} style={{width:210, height:60,marginTop: 10, marginLeft: 15}}/>
            </View>         
        </View>

        <Image source={require('../image/quetma.png')} style={{width:250, height:150,marginTop: 10, marginLeft: 55, marginTop: 20}}/>
        
        <View style={{width: 220, height: 45, backgroundColor:'#ea1717', borderRadius: 5, marginTop: 80, marginLeft: 70}}>
            <Pressable
                onPress = {()=>{navigation.navigate('Home')}}
            >
                <Text style={{fontSize: 19, color: 'white', fontWeight: '550', marginTop: 10, marginLeft: 18}}>BẮT ĐẦU MUA SẮM!</Text>
            </Pressable>
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
