import { StyleSheet, Text, View, Image, Pressable, FlatList, } from 'react-native';
import { RadioButton, RadioButtonAndroidProps } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function TaiKhoan({navigation}) {
  return (
    <View style={styles.container}>
      <View /*Header*/ style={{flexDirection:'row',backgroundColor: '#ea1717',width: '100%', height: 80}}>
        <Text style={{fontSize: 24, fontWeight:'600', marginLeft:10, marginTop: 20, color: 'white'}}>Tài khoản</Text>
        <Fontisto name="bell-alt" size={28} color="white" style={{marginTop: 25, marginLeft: 180}}/>
      </View>

      <View /*Center*/ >
        <View style={{width: 390, height: 80, flexDirection:'row', marginTop: 10}}>
            <View style={{width:4, height:60, backgroundColor:'#ea1717', marginTop: 5,marginLeft: 30}}></View>
            <View style={{marginLeft: 20, marginTop: 5}}>
              <Text style={{fontSize: 18, color:'#ea1717', fontWeight: '600'}}>Khá</Text>
              <Text style={{fontSize: 18, fontWeight: '600'}}>0313124258</Text>
              <AntDesign name="right" size={24} color="gray" style={{marginLeft: 300, marginTop:-25}}/>
            </View>
        </View>

        <View /*Lich su don hang*/ style={{width: '100%',height: 300}}>
          <View style={{flexDirection:'row', width:'100%', height: 45, backgroundColor:'#F4F3F3'}}>
            <FontAwesome5 name="clipboard-list" size={24} color="#ea1717" style={{marginLeft: 10, marginTop:10}}/>
            <Text style={{fontSize: 22, fontWeight:'500', marginLeft: 10, marginTop:5}}>Lịch sử đơn hàng</Text>
            <AntDesign name="right" size={24} color="gray" style={{marginLeft: 100, marginTop:10}}/>
          </View>
          
          <View style={{flexDirection:'row', width:'100%', height: 120}}>
              <View style={{width:'33%', height:'100%'}}>
                <Image source={require('../image/daxacnhan.png')} style={{width: 90, height: 90, marginTop: 10, marginLeft: 10, resizeMode:'contain'}}/>
                <Text style={{fontSize: 15, marginTop:5, marginLeft: 10 }}>Đã xác nhận</Text>
              </View>
              <View style={{width:'33%', height:'100%'}}>
                <Image source={require('../image/dangxuli.png')} style={{width: 90, height: 90, marginTop: 10, marginLeft: 10, resizeMode:'contain'}}/>
                <Text style={{fontSize: 15, marginTop:5, marginLeft: 20 }}>Đang xử lý</Text>
              </View>
              <View style={{width:'33%', height:'100%'}}>
                <Image source={require('../image/danggiao.png')} style={{width: 90, height: 90, marginTop: 10, marginLeft: 10, resizeMode:'contain'}}/>
                <Text style={{fontSize: 15, marginTop:5, marginLeft: 15 }}>Đang giao</Text>
              </View>
          </View>

        </View>

        <View /*Ung dung Go*/ style={{width: '100%', height: 700, marginTop: -100,}}>
          <View style={{backgroundColor:'#F4F3F3',width:'100%', height: 45,}}>
            <Text style={{fontSize: 22, fontWeight:'500', marginLeft: 10, marginTop:5}}>Ứng dụng GO! & Big C</Text>
          </View>
          
          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
              <MaterialCommunityIcons name="star-box" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}}/>
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Ưu đãi của tôi</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 170, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
            <Entypo name="heart-outlined" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}}/>
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Sản phẩm yêu thích</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 130, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
              <FontAwesome name="credit-card" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}} />
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Thẻ thành viên</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 160, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
              <Octicons name="history" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}} />
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Lịch sử điểm</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 180, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
            <MaterialCommunityIcons name="receipt" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}} />
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Hóa đơn</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 210, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
              <MaterialIcons name="store-mall-directory" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}}/>
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Cửa hàng</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 200, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
            <Entypo name="text-document" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}} />
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Bảng tin</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 210, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          
        </View>

        <View /*Ho tro*/ style={{width: '100%', height: 700, marginTop: -280,}}>
          <View style={{backgroundColor:'#F4F3F3',width:'100%', height: 45,}}>
            <Text style={{fontSize: 22, fontWeight:'500', marginLeft: 10, marginTop:5}}>Hỗ trợ</Text>
          </View>
          
          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
            <Entypo name="help-with-circle" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}} />
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Câu hỏi thường gặp</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 120, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
              <Feather name="phone-call" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}}/>
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Gọi tổng đài 1900 1880</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 95, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
            <Feather name="shopping-bag" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}} />
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Hướng dẫn mua hàng và thanh toán</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginTop:12}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
            <MaterialCommunityIcons name="truck-delivery" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}} />
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Chính sách vận chuyển và giao hàng</Text>
              <AntDesign name="right" size={18} color="gray" style={{ marginTop:12}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
              <Ionicons name="document-text" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}}/>
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Điều khoản và điều kiện sử dụng...</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 15, marginTop:12}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
              <Ionicons name="shield-checkmark" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}}/>
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Chính sách bảo mật thông tin</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 50, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
              <MaterialIcons name="ballot" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}} />
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Quy chế hoạt động</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 130, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          <View>
            <View style={{width:'100%', height: 60, flexDirection:'row'}}>
              <MaterialCommunityIcons name="account-remove" size={24} color="#ea1717" style={{marginLeft: 5, marginTop:10}} />
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Yêu cầu xóa tài khoản</Text>
              <AntDesign name="right" size={18} color="gray" style={{marginLeft: 110, marginTop:8}}/>
            </View>
            <View style={{width: '100%', height: 0.5, backgroundColor: 'gray', marginTop: -10}}></View>
          </View>

          
        </View>

        <View style={{flexDirection:'row', marginLeft:10,marginTop: -230}}>
          <RadioButton style={{width: 20, height: 20}}></RadioButton>
          <Text style={{fontSize: 20, fontWeight: '500', marginTop: 5}}>Tiếng Việt</Text>
          <RadioButton style={{width: 20, height: 20}}></RadioButton>
          <Text style={{fontSize: 20, fontWeight: '500', marginTop: 5}}>English</Text>
        </View>

        <Image source={require('../image/dadangky_bocongthuong.png')} style={{width: 200, height: 50, marginTop: 30, marginLeft: 100}}></Image>

        <View style={{flexDirection: 'row', backgroundColor:'#F4F3F3', width:'100%', height:45, marginTop: 50}}>
          <Text style={{fontSize: 18, color: 'gray', marginLeft: 10, marginTop: 10}}>Đăng xuất</Text>
          <Text style={{fontSize: 18, color: 'gray', marginLeft: 80, marginTop:10}}>Phiên bản 2.0.80</Text>
          
        </View>
      </View>

      <View /*footer*/ style={{width: '100%', height: 80, flexDirection: 'row'}}>         
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
                  <Feather name="shopping-bag" size={44} color="gray" style={{margin: 12, marginLeft: 15}}/>
                  <Text style={{fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 1,  }}>Thương hiệu</Text>
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
                  //onPress={()=>{navigation.navigate('TaiKhoan')}}

              >
                  <MaterialCommunityIcons name="account-outline" size={50} color="#ea1717" style={{margin: 12, marginLeft: 15}}/>
                  <Text style={{fontSize: 13, fontWeight: '500',margin: -15, marginLeft: 9, color:'#ea1717' }}>Tài khoản</Text>
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
    
  },
});
