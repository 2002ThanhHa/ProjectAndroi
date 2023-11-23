import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList, } from 'react-native';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons,SimpleLineIcons , Feather } from '@expo/vector-icons';

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

const sanPham =[
  {
    id:1,
    img: require('../image/thungmigoi.png'),
    name: 'Thùng 30 mì Hảo Hảo tôm chua cay 75g - 38160',
    price: '115,900đ', /*giachuagiam*/
    price_up: '', /*giaban*/
    hinh_anh_SP: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
    thuong_hieu: 'Hảo Hảo', 
    xuat_xu: 'Việt Nam', 
    trong_luong:'75g x 30 gói', 
    thanh_phan:'VẮT MÌ - Bột mì (bổ sung vi chất (kẽm, sắt)), dầu thực vật (dầu cọ, chất chống oxy hoá (BHA (320), BHT (321))), tinh bột, muối, chất ổn định (pentanatri triphosphat (451(i)), kali carbonat (501(i))), chất nhũ hoá (natri cacbonxymethyl cellulose (466)), chất điều chỉnh acid (natri carbonat (500(i))), bột nghệ, chất tạo màu tự nhiên (curcumin (100(i))).CÁC GÓI GIA VỊ - Dầu thực vật (dầu cọ, chất chống oxy hoá (BHA (320), BHT (321))), đường, muối, hành, các gia vị, chất điều vị (mononatri glutamat (621), dinatri 5 -inosinat (631), dinatri 5 -guanylat (627), disodium succinate), cà chua, me, maltodextrin, tôm 2,75 g/kg, hành lá sấy, chất tạo màu tổng hợp (caramen nhóm I (150a), paprika oleoresin (160c)), thịt heo, lá chanh, chất tạo ngọt tổng hợp (acesulfam kali (950)), chất bảo quản (kali sorbat (202)).', 
    dac_tinh:'Sợi dai ngon, thấm đẫm nước sốt chua ngọt hài hòa, mang đến hương vị quyến rũ khiến bạn không thể ngừng đũa.',
    bao_quan:'Để nơi khô ráo, thoáng mát tránh ánh nắng mặt trời.',
    hsd:'6 tháng kể từ ngày sản xuất.',
    phan_phoi:' CTY CO PHAN AECOOK VIET NAM - P.Tan Thanh, Q.Tan Phu',
    type_DM: 'Mi',
    type_TH:'AEC',
  },

  {
    id:2,
    img: require('../image/omachi.png'),
    name: 'Mì Omachi xốt spaghetti bò hàm 91g - 60868',
    price: '8,400đ', /*giachuagiam*/
    price_up: '', /*giaban*/
    hinh_anh_SP: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
    thuong_hieu: 'Omachi', 
    xuat_xu: 'Việt Nam', 
    trong_luong:'91g', 
    thanh_phan:'VẮT MÌ - Bột mì (bổ sung vi chất (kẽm, sắt)), dầu thực vật (dầu cọ, chất chống oxy hoá (BHA (320), BHT (321))), tinh bột, muối, chất ổn định (pentanatri triphosphat (451(i)), kali carbonat (501(i))), chất nhũ hoá (natri cacbonxymethyl cellulose (466)), chất điều chỉnh acid (natri carbonat (500(i))), bột nghệ, chất tạo màu tự nhiên (curcumin (100(i))).CÁC GÓI GIA VỊ - Dầu thực vật (dầu cọ, chất chống oxy hoá (BHA (320), BHT (321))), đường, muối, hành, các gia vị, chất điều vị (mononatri glutamat (621), dinatri 5 -inosinat (631), dinatri 5 -guanylat (627), disodium succinate), cà chua, me, maltodextrin, tôm 2,75 g/kg, hành lá sấy, chất tạo màu tổng hợp (caramen nhóm I (150a), paprika oleoresin (160c)), thịt heo, lá chanh, chất tạo ngọt tổng hợp (acesulfam kali (950)), chất bảo quản (kali sorbat (202)).', 
    dac_tinh:'Sợi dai ngon, thấm đẫm nước sốt chua ngọt hài hòa, mang đến hương vị quyến rũ khiến bạn không thể ngừng đũa.',
    bao_quan:'Để nơi khô ráo, thoáng mát tránh ánh nắng mặt trời.',
    hsd:'12 tháng kể từ ngày sản xuất.',
    phan_phoi:' CONG TY CP HANG TIEU DUNG MASAN - Phường 9.6,9.7 Tòa nhà E-Town 2,364 Cộng Hòa, F.13, Quận Tân Bình',
    type_DM: 'Mi',
    type_TH:'AEC',
  },

  {
    id:3,
    img: require('../image/clear.png'),
    name: 'Dầu gội Clear bạc hà mát lạnh sạch gàu chai 880g - 52590',
    price: '212,800đ', /*giachuagiam*/
    price_up: '', /*giaban*/
    hinh_anh_SP: 'có thể khá,c với thực tế do thay đổi bao bì từ nhà cung cấp.',
    thuong_hieu: 'Clear', 
    xuat_xu: 'Anh', 
    trong_luong:'880g', 
    thanh_phan:'Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Dimethiconol, Zinc Pyrithione, Dimethicone, Perfume, Sodium Chloride, Carbomer, Menthol, DMDM Hydantoin, Guar Hydroxypropyltrimonium Chloride, TEA- Dodecylbenzenesulfonate, Citric Acid, Zinc Sulfate, TEA- Sulfate, Glycerin, Poloxamer 407, Laureth- 23, Laureth-4, Sodium Benzoate, Cyclotetrasiloxane, Sodium Polynaphthalenesulfonate, Helianthus Annuus (Sunflower) Seed Oil, PEG- 9M, Xanthan Gum, Lysine HCI, Methylisothiazolinone, Cellulose Gum, Panthenol, Propylene Glycol, Tocopheryl Acetate, Pyridoxine Hydrochloride,Sodium Ascorbyl Phosphate, Climbazole, Phenoxyethanol, Hydrolyzed Collagen, Mentha Piperita (Peppermint) Leaf Extract, Methylchloroisothiazolinone, Lactic Acid, Glucose, Cl 42090, CI 47005', 
    dac_tinh:'Phù hợp sử dụng cho mọi đối tượng, đặc biệt là người đang bị gàu, da đầu có nhiều dầu nhờn.',
    bao_quan:'Để nơi khô ráo, thoáng mát tránh ánh nắng mặt trời.',
    hsd:'3 năm kể từ ngày sản xuất.',
    phan_phoi:' CTY TNHH QUOC TE UNILEVER VIET NAM - 156 Nguyễn Lương Bằng, phường Tân Phú, Quận 7',
    type_DM: 'DauGoi',
    type_TH:'UNILEVER',
  },

  {
    id:4,
    img: require('../image/vim.png'),
    name: 'Gel tẩy bồn cầu & nhà tắm Vim chanh sả 870ml -39461',
    price: '36,900đ', /*giachuagiam*/
    price_up: '', /*giaban*/
    hinh_anh_SP: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
    thuong_hieu: 'Vim', 
    xuat_xu: 'Anh', 
    trong_luong:'870ml', 
    thanh_phan:'Hydrohloric cacid, PEG- 2 Oleamine, Cetrimonium Chloride, Etidronic Acid, chất thơm, Cl 42051, nước', 
    dac_tinh:'Sợi dai ngon, thấm đẫm nước sốt chua ngọt hài hòa, mang đến hương vị quyến rũ khiến bạn không thể ngừng đũa.',
    bao_quan:'Giữ sản phẩm nơi khô ráo, thoáng mát tránh ánh nắng trực tiếp',
    hsd:'24 tháng kể từ ngày sản xuất.',
    phan_phoi:' CTY TNHH QUOC TE UNILEVER VIET NAM - 156 Nguyễn Lương Bằng, phường Tân Phú, Quận 7',
    type_DM: 'HoaMyPham',
    type_TH:'UNILEVER',
  },

]


export default function Home({navigation}) {
  const[data1,setData1] = useState(arr1);
  const[dataSanPham,setDataSanPham] = useState(sanPham);
  
 

  return (
    <View style={styles.container}>
    {/*Header*/}
      <View /*Head*/ style={{width: 395, height: 323, backgroundColor: '#E2CAE4', marginTop: 2800}}>       
      <Pressable onPress={()=>{navigation.navigate("DiaChi")}}>
        <View style={{flexDirection: 'row'}}>
          
            <AntDesign name="enviromento" size={24} color="white" style={{marginLeft: 20, marginTop: 10}}/>
            <Text style ={{fontSize: 20, color: 'white', fontWeight: '500', margin: 10, marginLeft: 5}}>GO! GÒ VẤP</Text>
            <Image source={require('../image/Polygon.png')} style={{width: 13, height: 7, margin: 24, marginLeft: -5, resizeMode:'contain'}}/>
            
        </View>
        </Pressable>

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

    {/*Center*/}
      <View /*Button*/ style={{width: '600', height: 225,}}>
        <View /*Cac muc lua chon*/ style={{width: '600', height: 200 ,margin: 5, flexDirection:'row'}}>
          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10, shadowColor: 'gray', shadowRadius: 10}}>
            <Pressable //Logo GO
              //onPress 
              onPress={()=> {navigation.navigate("NhanHangGo")}}
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'#E51717', borderRadius:50}}
            >
                <Image source={require('../image/logoGo.png')} style={{width: 55, height: 55, borderRadius:50, marginLeft: 5, margin:2}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 5,  }}>Nhãn hàng GO!</Text>
          </View>

          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10, shadowColor: 'gray', shadowRadius: 10}}>
            <Pressable //LoGo The Thanh Vien
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoTheThanhVien.png')} style={{width: 65, height: 65, borderRadius:50, marginLeft: -6, margin:-2}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 5,  }}>Thẻ thành viên</Text>
          </View>
          
          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10, shadowColor: 'gray', shadowRadius: 10}}>
            <Pressable //LoGo Kiem Tra Gia
              //onPress
              onPress={()=> {navigation.navigate("KiemTraGia")}}
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoKiemTraGia.png')} style={{width: 70, height: 70, borderRadius:50, marginLeft: -6, margin:-5}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 15,  }}>Kiểm tra giá</Text>
          </View>

          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10, shadowColor: 'gray', shadowRadius: 10}}>
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
          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10, shadowColor: 'gray', shadowRadius: 10}}>
            <Pressable //LoGo Flash Sale
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoFlashSale.png')} style={{width: 60, height: 60, borderRadius:50, marginLeft: -6, margin:-2}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 20,  }}>Flash Sale</Text>
          </View>

          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10, shadowColor: 'gray', shadowRadius: 10}}>
            <Pressable //LoGo Ma Giam Gia
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoMaGiamGia.png')} style={{width: 70, height: 68, borderRadius:45, marginLeft: -6, margin:-5}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 12,  }}>Mã giảm giá</Text>
          </View>
          
          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10, shadowColor: 'gray', shadowRadius: 10}}>
            <Pressable //LoGo Danh Muc
              //onPress
              style={{width: 60, height: 60 ,margin: 10, marginLeft: 15, backgroundColor:'white', borderRadius:50}}
            >
                <Image source={require('../image/LogoDanhMuc.png')} style={{width: 68, height: 68, borderRadius:50, marginLeft: -6, margin:-5}}/>
            </Pressable>
            <Text style={{fontSize: 11.5, fontWeight:'500',margin: -5, marginLeft: 20,  }}>Danh mục</Text>
          </View>

          <View style={{width: 90, height: 95 ,margin: 5, backgroundColor:'white', borderRadius: 10, shadowColor: 'gray', shadowRadius: 10}}>
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

      <View /*Combo khuyen mai*/ style={{width: '600', height: 200 ,marginLeft:-15 }}>
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

      <View /*Ma khuyen mai*/ style={{width: 400, height: 400, margin: -50}}>
          <Text style={{fontSize:20, fontWeight:"500", margin:10}}>Mã khuyến mãi</Text>
        <View style={{flexDirection:'row'}}>
          <View style={{width: '100%', height: 350, margin: 10}}>
            <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10 }}>
            <View style={{width:'75%', height: 35, borderTopLeftRadius: 20, borderEndEndRadius: 20, backgroundColor: 'red'}}>
                <Text style={{fontSize:20, fontWeight:'500', color: 'white', margin:5 ,marginLeft: 20}}>75.000đ</Text>
              </View>
              <Image source={require('../image/Group 60.png')} style={{width: 60, height: 60, margin: 10, marginLeft: 40}}/>
              <Text style={{fontSize:18, fontWeight:'500',}}>HSD: 27.10.2023 Mã giảm giá GO!/BIG C</Text>

              <View style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#EA4916' , borderRadius:15, marginLeft: 8}}>
                <Text style={{fontSize:20, fontWeight:'500', color:'white',margin: 2,marginLeft:25}}>Lưu lại</Text>
                <Entypo name="arrow-with-circle-down" size={20} color="white" style={{margin: 5, marginLeft:5}} />
              </View>
            </View>
          </View>

          <View style={{width: '100%', height: 350, margin: 10, marginLeft: -250  }}>
            <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10 }}>
            <View style={{width:'75%', height: 35, borderTopLeftRadius: 20, borderEndEndRadius: 20, backgroundColor: 'red'}}>
                <Text style={{fontSize:20, fontWeight:'500', color: 'white', margin:5 ,marginLeft: 20}}>55.000đ</Text>
              </View>
              <Image source={require('../image/Group 60.png')} style={{width: 60, height: 60, margin: 10, marginLeft: 40}}/>
              <Text style={{fontSize:18, fontWeight:'500',}}>HSD: 27.10.2023 Mã giảm giá GO!/BIG C</Text>

              <View style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#EA4916' , borderRadius:15, marginLeft: 8}}>
                <Text style={{fontSize:20, fontWeight:'500', color:'white',margin: 2,marginLeft:25}}>Lưu lại</Text>
                <Entypo name="arrow-with-circle-down" size={20} color="white" style={{margin: 5, marginLeft:5}} />
              </View>
            </View>
          </View>

          <View style={{width: '100%', height: 350, margin: 10, marginLeft: -250  }}>
            <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10 }}>
            <View style={{width:'75%', height: 35, borderTopLeftRadius: 20, borderEndEndRadius: 20, backgroundColor: 'red'}}>
                <Text style={{fontSize:20, fontWeight:'500', color: 'white', margin:5 ,marginLeft: 20}}>25.000đ</Text>
              </View>
              <Image source={require('../image/Group 60.png')} style={{width: 60, height: 60, margin: 10, marginLeft: 40}}/>
              <Text style={{fontSize:18, fontWeight:'500',}}>HSD: 27.10.2023 Mã giảm giá GO!/BIG C</Text>

              <View style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#EA4916' , borderRadius:15, marginLeft: 8}}>
                <Text style={{fontSize:20, fontWeight:'500', color:'white',margin: 2,marginLeft:25}}>Lưu lại</Text>
                <Entypo name="arrow-with-circle-down" size={20} color="white" style={{margin: 5, marginLeft:5}} />
              </View>
            </View>
          </View>

        </View>
          

          
      </View>

      <View /*Uu dai hot*/ style={{width: '100%', height: 250, marginTop:-35}}>
        <Text style={{fontSize: 20, fontWeight: '500', marginLeft: 10}}>Ưu đãi HOT</Text>
        <Image source={require('../image/hinh2.png')} style={{ width: '100%', height: 200, marginTop: 10 }}/>
      </View>

      <View /*San pham*/ style={{width: '100%', height: 320, backgroundColor: '#BED468'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize: 22, fontWeight: '500', color:'white'}} >Sản Phẩm</Text>
            <Text style={{fontSize: 20, fontWeight: '400', color:'white', marginLeft: 130}}>Xem thêm</Text>
            <AntDesign name="right" size={20} color="white" style={{marginTop: 5}}/>
          </View>

          <View style={{flexDirection:'row'}}>
            <View style={{width: '100%', height: 350, margin: 10, marginLeft: 5 }}>
              <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10, }}>
                <View style={{width:'45%', height: 35, borderTopLeftRadius: 20, borderEndEndRadius: 20, backgroundColor: 'red'}}>
                    <Text style={{fontSize:20, fontWeight:'500', color: 'white', margin:5 ,marginLeft: 10}}>-4.7%</Text>
                </View>
                  <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: -30, marginLeft: 100}}/>
                  <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
                  <Image source={require('../image/con_bo_cuoi.png')} style={{width: 60, height: 60, marginTop: -10, marginLeft: 40}}/>
                  <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40}}>60,500đ {'\n'} <s style={{fontSize:16, fontWeight:'300',}}>63.500đ</s></Text>
                  <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10}}>Phô mai Con Bò Cười vị truyền...</Text>         
                  <View /*Button them vao gio hang*/>
                    <Pressable
                      //onPress
                      style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                    >
                      <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                    </Pressable>
                </View>
              </View>
            </View>

            <View style={{width: '100%', height: 350, margin: 10, marginLeft: -210}}>
              <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10, }}>
              <View style={{width:'45%', height: 35, borderTopLeftRadius: 20, borderEndEndRadius: 20, backgroundColor: 'red'}}>
                  <Text style={{fontSize:20, fontWeight:'500', color: 'white', margin:5 ,marginLeft: 10}}>-4.7%</Text>
                </View>
                <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: -30, marginLeft: 100}}/>
                <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
                <Image source={require('../image/con_bo_cuoi.png')} style={{width: 60, height: 60, marginTop: -10, marginLeft: 40}}/>
                <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40}}>60,500đ {'\n'} <s style={{fontSize:16, fontWeight:'300',}}>63.500đ</s></Text>
                <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10}}>Phô mai Con Bò Cười vị truyền...</Text>         
                <View /*Button them vao gio hang*/>
                  <Pressable
                    //onPress
                    style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                  >
                    <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                  </Pressable>                 
                </View>
              </View>
            </View>

            <View style={{width: '100%', height: 350, margin: 10, marginLeft: -210}}>
              <View style={{width: 150, height: 235, backgroundColor: 'white',borderRadius:20, shadowColor: 'gray', shadowRadius: 10, }}>
              <View style={{width:'45%', height: 35, borderTopLeftRadius: 20, borderEndEndRadius: 20, backgroundColor: 'red'}}>
                  <Text style={{fontSize:20, fontWeight:'500', color: 'white', margin:5 ,marginLeft: 10}}>-4.7%</Text>
                </View>
                <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: -30, marginLeft: 100}}/>
                <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
                <Image source={require('../image/con_bo_cuoi.png')} style={{width: 60, height: 60, marginTop: -10, marginLeft: 40}}/>
                <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40}}>60,500đ {'\n'} <s style={{fontSize:16, fontWeight:'300',}}>63.500đ</s></Text>
                <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10}}>Phô mai Con Bò Cười vị truyền...</Text>         
                <View /*Button them vao gio hang*/>
                  <Pressable
                    //onPress
                    style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                  >
                    <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                  </Pressable>              
                </View>
              </View>
            </View>
          </View>
          
          

      </View>

      <View /*uu dai hom nay*/ style={{width: '100%', height: 350, }}>
        <View /*header*/ style={{flexDirection:'row' }}>
          <MaterialCommunityIcons name="lightning-bolt" size={25} color="yellow" style={{marginTop: 10}} />
          <Text style={{fontSize: 11, color:'red', fontWeight: '500', marginTop:10,}}>Ưu Đãi Hôm Nay</Text>
          
          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 6}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>03</Text>
          </View>
          <View>
            <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 10, marginLeft: 3 }}></View>
          <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 5, marginLeft: 3 }}></View>
          </View>
          
          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 5}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>23</Text>
          </View>
          <View>
            <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 10, marginLeft: 3 }}></View>
          <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 5, marginLeft: 3 }}></View>
          </View>

          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 5}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>54</Text>
          </View>
          <View>
            <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 10, marginLeft: 3 }}></View>
          <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 5, marginLeft: 3 }}></View>
          </View>

          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 5}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>12</Text>
          </View>


          
          <Text style={{fontSize: 11, marginTop:10, marginLeft: 5}}>Xem thêm</Text>
          <AntDesign name="right" size={12} color="black" style={{marginTop: 13}}/>
        </View>
        
        <View /*center*/ style={{width: '100%', height: 400, flexDirection:'row', marginTop: 10}}>
          <View /*San Pham*/ style={{width: 150, height: 250, borderRadius: 20, marginLeft: 5, shadowColor: 'gray', shadowRadius: 10,}}>
            <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 100}}/>
            <Image source={require('../image/downy_xanh.png')} style={{width: 60, height: 60, marginTop: 0, marginLeft: 40, resizeMode:"contain"}}/>
            <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40}}>136,900đ {'\n'} <s style={{fontSize:16, fontWeight:'300',}}>236.000đ</s></Text>
            <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10}}>Nước giặt Downy Mati...</Text>
            <View style={{width:140, height: 30, borderRadius: 15, border: 1, backgroundColor: '#D9D9D9', flexDirection: 'row'}}>
              <View style={{width: 30, height: 30, borderRadius:15, backgroundColor: '#FC9A07'}}></View>
              <Text style={{fontSize:17, marginLeft: -5, marginTop:2}}>Đã bán 100</Text>
            </View>
          </View>

          <View /*San Pham*/ style={{width: 150, height: 250, borderRadius: 20, marginLeft: 5, shadowColor: 'gray', shadowRadius: 10,}}>
            <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 100}}/>
            <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
            <Image source={require('../image/downy_hong.png')} style={{width: 60, height: 60, marginTop: -20, marginLeft: 40, resizeMode:'contain'}}/>
            <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40}}>136,900đ {'\n'} <s style={{fontSize:16, fontWeight:'300',}}>236.000đ</s></Text>
            <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10}}>Nước giặt Downy Mati...</Text>
            <View style={{width:140, height: 30, borderRadius: 15, border: 1, backgroundColor: '#D9D9D9', flexDirection: 'row'}}>
              <View style={{width: 30, height: 30, borderRadius:15, backgroundColor: '#FC9A07'}}></View>
              <Text style={{fontSize:17, marginLeft: -5, marginTop:2}}>Đã bán 117</Text>
            </View>
          </View>

          <View /*San Pham*/ style={{width: 150, height: 250, borderRadius: 20, marginLeft: 5, shadowColor: 'gray', shadowRadius: 10,}}>
            <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 100}}/>
            <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
            <Image source={require('../image/xuc_xich_duc.png')} style={{width: 60, height: 60, marginTop: -20, marginLeft: 40, resizeMode:'contain'}}/>
            <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40}}>45,500đ {'\n'} <s style={{fontSize:16, fontWeight:'300',}}>72.400đ</s></Text>
            <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10}}>Xúc xích Đức LC 500g</Text>
            <View style={{width:140, height: 30, borderRadius: 15, border: 1, backgroundColor: '#D9D9D9', flexDirection: 'row'}}>
              <View style={{width: 30, height: 30, borderRadius:15, backgroundColor: '#FC9A07'}}></View>
              <Text style={{fontSize:17, marginLeft: -5, marginTop:2}}>Đã bán 135</Text>
            </View>
          </View>

        </View>
      </View>
      
      <View /*tuoi ngon moi ngay*/ style={{width: '100%', height: 350, marginTop: -35}}>
        <View /*header*/ style={{flexDirection:'row' }}>
          <MaterialCommunityIcons name="lightning-bolt" size={25} color="yellow" style={{marginTop: 10}} />
          <Text style={{fontSize: 11, color:'red', fontWeight: '500', marginTop:10,}}>Tươi Ngon Mỗi Ngày</Text>
          
          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 6}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>03</Text>
          </View>
          <View>
            <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 10, marginLeft: 3 }}></View>
          <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 5, marginLeft: 3 }}></View>
          </View>
          
          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 5}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>23</Text>
          </View>
          <View>
            <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 10, marginLeft: 3 }}></View>
          <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 5, marginLeft: 3 }}></View>
          </View>

          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 5}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>54</Text>
          </View>
          <View>
            <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 10, marginLeft: 3 }}></View>
          <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 5, marginLeft: 3 }}></View>
          </View>

          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 5}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>12</Text>
          </View>


          
          <Text style={{fontSize: 11, marginTop:10, marginLeft: 5}}>Xem thêm</Text>
          <AntDesign name="right" size={12} color="black" style={{marginTop: 13}}/>
        </View>
        
        <View /*center*/ style={{width: '100%', height: 400, flexDirection:'row', marginTop: 10}}>
          <View /*San Pham*/ style={{width: 150, height: 250, borderRadius: 20, marginLeft: 5, shadowColor: 'gray', shadowRadius: 10,}}>
            <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 100}}/>
            <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
            <Image source={require('../image/buoi.png')} style={{width: 60, height: 60, marginTop: -20, marginLeft: 40, resizeMode:'contain'}}/>
            <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color:'#e62528', marginTop: 10}}>42,700đ</Text>
            <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 15}}>Bưởi 5 roi túi lưới trái...</Text>
            <View style={{width:140, height: 30, borderRadius: 15, border: 1, backgroundColor: '#D9D9D9', flexDirection: 'row', marginTop: 10}}>
              <View style={{width: 20, height: 30, borderRadius:10, backgroundColor: '#FC9A07'}}></View>
              <Text style={{fontSize:17, marginLeft: 15, marginTop:5}}>Đã bán 7</Text>
            </View>
          </View>

          <View /*San Pham*/ style={{width: 150, height: 250, borderRadius: 20, marginLeft: 5, shadowColor: 'gray', shadowRadius: 10,}}>
            <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 100}}/>
            <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
            <Image source={require('../image/bi_do.png')} style={{width: 60, height: 60, marginTop: -20, marginLeft: 40, resizeMode:'contain'}}/>
            <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color:'#e62528', marginTop: 10}}>26,000đ</Text>
            <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 15}}>Bí đỏ tròn 2 - 2.5kg - ...</Text>
            <View style={{width:140, height: 30, borderRadius: 15, border: 1, backgroundColor: '#D9D9D9', flexDirection: 'row', marginTop: 10}}>
              <View style={{width: 20, height: 30, borderRadius:10, backgroundColor: '#FC9A07'}}></View>
              <Text style={{fontSize:17, marginLeft: 15, marginTop:5}}>Đã bán 10</Text>
            </View>
          </View>

          <View /*San Pham*/ style={{width: 150, height: 250, borderRadius: 20, marginLeft: 5, shadowColor: 'gray', shadowRadius: 10,}}>
            <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 100}}/>
            <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
            <Image source={require('../image/duahau.png')} style={{width: 60, height: 60, marginTop: -20, marginLeft: 40, resizeMode:'contain'}}/>
            <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color:'#e62528', marginTop: 10}}>35,500đ</Text>
            <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 15}}>Dưa hấu đỏ (2 - 2.5kg )...</Text>
            <View style={{width:140, height: 30, borderRadius: 15, border: 1, backgroundColor: '#D9D9D9', flexDirection: 'row', marginTop: 10}}>
              <View style={{width: 20, height: 30, borderRadius:10, backgroundColor: '#FC9A07'}}></View>
              <Text style={{fontSize:17, marginLeft: 15, marginTop:5}}>Đã bán 8</Text>
            </View>
          </View>

        </View>
      </View>

      <View /*Mua nhieu giam nhieu*/ style={{width: '100%', height: 350, marginTop: -35}}>
        <View /*header*/ style={{flexDirection:'row' }}>
          <MaterialCommunityIcons name="lightning-bolt" size={25} color="yellow" style={{marginTop: 10}} />
          <Text style={{fontSize: 11, color:'red', fontWeight: '500', marginTop:10,}}>Ưu Đãi Hôm Nay</Text>
          
          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 6}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>03</Text>
          </View>
          <View>
            <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 10, marginLeft: 3 }}></View>
          <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 5, marginLeft: 3 }}></View>
          </View>
          
          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 5}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>23</Text>
          </View>
          <View>
            <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 10, marginLeft: 3 }}></View>
          <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 5, marginLeft: 3 }}></View>
          </View>

          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 5}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>54</Text>
          </View>
          <View>
            <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 10, marginLeft: 3 }}></View>
          <View style={{width: 8, height: 8, backgroundColor:'black', marginTop: 5, marginLeft: 3 }}></View>
          </View>

          <View style={{width: 30, height: 30, backgroundColor:'#DA1717', marginTop: 5, borderRadius: 5, marginLeft: 5}}>
            <Text style={{fontSize: 18,margin: 4, marginTop:2, color:'white', fontWeight:'500'}}>12</Text>
          </View>


          
          <Text style={{fontSize: 11, marginTop:10, marginLeft: 5}}>Xem thêm</Text>
          <AntDesign name="right" size={12} color="black" style={{marginTop: 13}}/>
        </View>
        
        <View /*center*/ style={{width: '100%', height: 400, flexDirection:'row', marginTop: 10}}>
        <View /*San Pham*/ style={{width: 150, height: 250, borderRadius: 20, marginLeft: 5, shadowColor: 'gray', shadowRadius: 10,}}>
            <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 100}}/>
            <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
            <Image source={require('../image/trung_ga.png')} style={{width: 60, height: 60, marginTop: -20, marginLeft: 40, resizeMode:'contain'}}/>
            <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color:'#e62528', marginTop: 10}}>26,300đ</Text>
            <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 15}}>Vỉ 10 trứng gà tươi GO! 60g...</Text>
            <View style={{width:140, height: 30, borderRadius: 15, border: 1, backgroundColor: '#D9D9D9', flexDirection: 'row', marginTop: 10}}>
              <View style={{width: 40, height: 30, borderRadius:10, backgroundColor: '#FC9A07'}}></View>
              <Text style={{fontSize:17, marginTop:5}}>Đã bán 185</Text>
            </View>
          </View>

          <View /*San Pham*/ style={{width: 150, height: 250, borderRadius: 20, marginLeft: 5, shadowColor: 'gray', shadowRadius: 10,}}>
            <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 100}}/>
            <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
            <Image source={require('../image/ca_basa.png')} style={{width: 60, height: 60, marginTop: -20, marginLeft: 40, resizeMode:'contain'}}/>
            <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color:'#e62528', marginTop: 5}}>19,900đ <s style={{fontSize:16, fontWeight:'500', marginLeft: 1, color:'gray', }}>22,600đ</s></Text>
            <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 0}}>Cá basa cắt khúc 400g - ...</Text>
            <View style={{width:140, height: 30, borderRadius: 15, border: 1, backgroundColor: '#D9D9D9', flexDirection: 'row', marginTop: 5}}>
              <View style={{width: 35, height: 30, borderRadius:10, backgroundColor: '#FC9A07'}}></View>
              <Text style={{fontSize:17, marginTop:5}}>Đã bán 135</Text>
            </View>
          </View>

           <View /*San Pham*/ style={{width: 150, height: 250, borderRadius: 20, marginLeft: 5, shadowColor: 'gray', shadowRadius: 10,}}>
            <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 10, marginLeft: 100}}/>
            <FontAwesome5 name="gift" size={24} color="red" style={{marginTop: -3, marginLeft: 100}}/>
            <Image source={require('../image/sunlight.png')} style={{width: 60, height: 60, marginTop: -20, marginLeft: 40, resizeMode:'contain'}}/>
            <Text style={{fontSize:18, fontWeight:'500', marginLeft: 40, color:'#e62528', marginTop: 10}}>81,800đ</Text>
            <Text style={{fontSize:18, fontWeight:'500',marginLeft: 10, marginTop: 15}}>Nước Rửa Chén Bát Sunlight...</Text>
            <View style={{width:140, height: 30, borderRadius: 15, border: 1, backgroundColor: '#D9D9D9', flexDirection: 'row', marginTop: 10}}>
              <View style={{width: 30, height: 30, borderRadius:10, backgroundColor: '#FC9A07'}}></View>
              <Text style={{fontSize:17, marginTop:5}}>Đã bán 108</Text>
            </View>
          </View>

        </View>
      </View>
      
      <View /*khuye nmai*/style={{width: '100%', height: 250,}}>
          <Text style={{fontSize: 22, marginTop:-40, fontWeight: '500'}}>Khuyến mãi</Text>
          <Image source={require('../image/hinh4.jpg')} style={{width: '100%', height: 200, marginTop: 5}}/>
      </View>

      <View /*san pham ban chay*/ style={{width:'100%', height: 650, marginTop: -50}}>
          <Text style={{fontSize: 22, marginTop:10, fontWeight: '500'}}>Sản phẩm bán chạy </Text>
          <FlatList 
            numColumns={2}
            data={dataSanPham}
            renderItem={({item }) => {
                return (
                    <View style={{ height: 280, width: 160, alignItems: 'center', margin: 5, backgroundColor: "#fff", shadowColor: 'gray', shadowRadius: 5, borderRadius: 5, marginLeft: 12 }}>
                         <Ionicons name="heart-circle" size={28} color="red" style={{marginTop: 5, marginLeft: 100}}/>
                        <Image source={item.img} style={{ marginTop: -4, width: 100, height: 100, resizeMode:'contain'}} />
                        <Text style={{ marginLeft: 3, fontSize: 15, marginLeft: 5, marginTop: 10 }}>{item.name}</Text>
                        <Text style={{ marginLeft: 3, fontSize: 15, marginLeft: -65, marginTop: 10, color:'#e62528', fontWeight: '700' }}>{item.price}</Text>
                        <View /*Button them vao gio hang*/>
                          <Pressable
                            //onPress
                            style={{flexDirection:'row' , width: 130, height: 30, margin: 10, backgroundColor: '#DA1717' , borderRadius:15, marginLeft: 9}}
                          >
                            <Text style={{fontSize:16, fontWeight:'500', color:'white',margin: 3,marginLeft:15}}>Thêm vào giỏ</Text>
                          </Pressable>
                        </View>

                    </View>
                  )
              }}
          ></FlatList>


      </View>

    {/*footder*/}
    <View /*End*/ style={{width: '100%', height: 80, flexDirection: 'row'}}>
        <View style={{width: '20%', height:'100%', backgroundColor: 'white'}}>
            <Image source={require('../image/ButtonGo.png')} style={{width: '90%', height: 40, margin: 15, marginLeft: 3}}/>
            <Text style={{fontSize: 13, fontWeight: '500', color: 'red',margin: -10, marginLeft: 4,  }}>Trang chủ</Text>
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
