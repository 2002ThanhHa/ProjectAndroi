import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList, } from 'react-native';
import { useState } from 'react';

const arr1 = [
  {
    id:1,
    img: require('../image/san_pham_khuyen_mai1.png'),
  },
  {
    id:2,
    img: require('../image/san_pham_khuyen_mai2.png'),
  },
  {
    id:3,
    img: require('../image/san_pham_khuyen_mai3.png'),
  },
]
const arr2=[
  {
    id:1,
    drec: 'HSD: 27.10.2023 Mã giảm giá GO!/BIG C',
    giam: '75.000',
  },
  {
    id:2,
    drec: 'HSD: 27.10.2023 Mã giảm giá GO!/BIG C',
    giam: '55.000',
  },
  {
    id:3,
    drec: 'HSD: 27.10.2023 Mã giảm giá GO!/BIG C',
    giam: '25.000',
  },

]


export default function Home() {
  const[data1,setData1] = useState(arr1);
  const[data2,setData2] = useState(arr2);
  
 

  return (
    <View style={styles.container}>     
      <View style={{width: 395, height: 323, backgroundColor: '#E2CAE4', marginTop: 150}}>       
        <View style={{flexDirection: 'row'}}>
            <Image source={require('../image/Vitri.png')} style={{ width:20, height: 25, marginLeft: 20, margin: 10, resizeMode:'contain'}}/>
            <Text style ={{fontSize: 20, color: 'white', fontWeight: '500', margin: 10, marginLeft: -5}}>GO! GÒ VẤP</Text>
            <Image source={require('../image/Polygon.png')} style={{width: 13, height: 7, margin: 24, marginLeft: -5, resizeMode:'contain'}}/>
        </View>

        <View style={{width: '100%', height: 50, flexDirection:'row'}}>
            <Pressable //onPress
              style={{width: 320, height: 40, borderRadius: 20, backgroundColor: 'white', marginLeft: 20, flexDirection:'row'}}
            >
              <Image source={require('../image/TimKiem.png')} style={{width: 30, height: 35, margin: 5, marginLeft: 10, resizeMode:'contain'}}/>
              <Text style ={{fontSize: 18, margin: 7, marginLeft: -3}}>Hi, Bạn muốn tìm gì hôm nay</Text>
            </Pressable>
            <Image source={require('../image/giohang.png')} style={{width: 45, height: 45, margin: -10, marginLeft: 5, resizeMode:'contain'}}/>
        </View>

        <View>
            <Image source={require('../image/hinh1.png')} style={{width: 390, height: 200,marginLeft: 3,}}/>
            <View style={{flexDirection:'row'}}>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 140}}/>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 10}}/>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 10}}/>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 10}}/>
              <View style={{width: 13, height: 13, borderRadius: 20, backgroundColor: 'gray', margin: 2, marginLeft: 10}}/>
            </View>
        </View>
      </View>

      <View style={{width: '600', height: 225,}}>
        <View /*Cac muc lua chon*/ style={{width: '600', height: 200 ,margin: 5, flexDirection:'row'}}>
          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10}}>
            <Pressable //Logo GO
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'#E51717', borderRadius:50}}
            >
                <Image source={require('../image/logoGo.png')} style={{width: 55, height: 55, borderRadius:50, marginLeft: 5, margin:2}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 5,  }}>Nhãn hàng GO!</Text>
          </View>

          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10}}>
            <Pressable //LoGo The Thanh Vien
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoTheThanhVien.png')} style={{width: 65, height: 65, borderRadius:50, marginLeft: -6, margin:-2}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 5,  }}>Thẻ thành viên</Text>
          </View>
          
          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10}}>
            <Pressable //LoGo Kiem Tra Gia
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoKiemTraGia.png')} style={{width: 70, height: 70, borderRadius:50, marginLeft: -6, margin:-5}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 15,  }}>Kiểm tra giá</Text>
          </View>

          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10}}>
            <Pressable //LoGo Cua hang
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoCuaHang.png')} style={{width: 73, height: 73, borderRadius:50, marginLeft: -6, margin:-5}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 20,  }}>Cửa hàng</Text>
          </View>         
        </View>

        <View /*Cac muc lua chon*/ style={{width: '600', height: 200 ,margin: -100, marginLeft: 5, flexDirection:'row'}}>
          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10}}>
            <Pressable //LoGo Flash Sale
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoFlashSale.png')} style={{width: 60, height: 60, borderRadius:50, marginLeft: -6, margin:-2}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 20,  }}>Flash Sale</Text>
          </View>

          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10}}>
            <Pressable //LoGo Ma Giam Gia
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoMaGiamGia.png')} style={{width: 70, height: 68, borderRadius:45, marginLeft: -6, margin:-5}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 12,  }}>Mã giảm giá</Text>
          </View>
          
          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10}}>
            <Pressable //LoGo Danh Muc
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoDanhMuc.png')} style={{width: 68, height: 68, borderRadius:50, marginLeft: -6, margin:-5}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 20,  }}>Danh mục</Text>
          </View>

          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10}}>
            <Pressable //LoGo Thuong Hieu
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoThuongHieu.png')} style={{width: 68, height: 68, borderRadius:45, marginLeft: -6, margin:-5}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 10,  }}>Thương hiệu</Text>
          </View>         
        </View>

      </View>

      <View style={{width: '600', height: 200 ,marginLeft:-15 }}>
        <FlatList //Combo Giam Gia
          numColumns={3}
          data={data1}
          renderItem={({item})=>{
            return(
              <View style={{ width: 125, height: 200, }}>
                <Image source={item.img} style={{width: 120, height: 120, marginLeft: 10}}/>
                <View style={{width: 110, height: 25, backgroundColor:'white', borderRadius: 10, flexDirection:'row',margin: -10, marginLeft: 15, }}>
                  <Text style={{fontSize: 13, fontWeight: '500', color: 'red', margin: 3, marginLeft: 12}}>MUA NGAY</Text>
                  <Image source={require('../image/Button_mui_ten.png')} style={{width: 12, height: 12, margin: 6, marginLeft: 4 }}/>
                </View>
              </View>
            )
          }}
        ></FlatList>
      </View>

      <View style={{width: '100%', height: 400, margin: -50}}>
          <Text style={{fontSize:20, fontWeight:"500"}}>Mã khuyến mãi</Text>
        <FlatList      
          numColumns={3}
          data={data2}
          renderItem = {({item})=>{
            return(
              <View style={{width: '100%', height: 350, margin: 10, borderRadius:20}}>
                <View style={{width: 150, height: 300, backgroundColor: 'white'}}>
                <View style={{width:'75%', height: 35, borderTopLeftRadius: 20, borderEndEndRadius: 20, backgroundColor: 'red'}}>
                    <Text style={{fontSize:18, fontWeight:'500', color: 'white', margin:5 ,marginLeft: 20}}>{item.giam}</Text>
                  </View>
                  <Image source={require('../image/Group 60.png')} style={{width: 50, height: 50}}/>
                  <Text style={{fontSize:18, fontWeight:'500',}}>{item.drec}</Text>
                </View>
              </View>
            )
          }}
          
        > 
          

        </FlatList>
      </View>

      <View style={{width: '100%', height: 80, flexDirection: 'row'}}>
        <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
            <Image source={require('../image/ButtonGo.png')} style={{width: '90%', height: 40, margin: 15, marginLeft: 3}}/>
            <Text style={{fontSize: 13, fontWeight: '500', color: 'red',margin: -10, marginLeft: 4,  }}>Trang chủ</Text>
        </View>

        <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
            <Image source={require('../image/ButtonDanhMuc.png')} style={{width: '58%', height: 44, margin: 15, marginLeft: 15}}/>
            <Text style={{fontSize: 13, fontWeight: '500',margin: -15, marginLeft: 8,  }}>Danh mục</Text>
        </View>

        <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
            <Image source={require('../image/ButtonThuongHieu.png')} style={{width: '50%', height: 44, margin: 15, marginLeft: 15}}/>
            <Text style={{fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 1,  }}>Thương hiệu</Text>
        </View>
        
        <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
            <Image source={require('../image/ButtonThongBao.png')} style={{width: '58%', height: 44, margin: 15, marginLeft: 15}}/>
            <Text style={{fontSize: 13, fontWeight: '500',margin: -15, marginLeft: 4,  }}>Thông báo</Text>
        </View>
        
        <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
            <Image source={require('../image/ButtonTaiKhoan.png')} style={{width: '58%', height: 44, margin: 15, marginLeft: 15}}/>
            <Text style={{fontSize: 13, fontWeight: '500',margin: -15, marginLeft: 9,  }}>Tài khoản</Text>
        </View>     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBEB',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
