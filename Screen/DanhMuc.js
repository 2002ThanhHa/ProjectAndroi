import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { useState } from 'react';
import { Ionicons, AntDesign, FontAwesome, Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const danhMuc = [
    {
        id: 1,
        name: 'Luôn Luôn Rẻ Hơn',
        img: require('../image_Ha/Danh Mục/Dm/luon_re_hon.jpg'),
    },
    {
        id: 2,
        name: 'Halloween',
        img: require('../image_Ha/Danh Mục/Dm/halowen.jpg'),
    },
    {
        id: 3,
        name: 'Đồ ăn sẵn',
        img: require('../image_Ha/Danh Mục/Dm/do-an-nhanh.jpg'),
    },
    {
        id: 4,
        name: 'Bánh Ngọt & Bánh Mì',
        img: require('../image_Ha/Danh Mục/Dm/banh_my.jpg'),
    },
    {
        id: 5,
        name: 'Rau Củ - Đậu Hủ',
        img: require('../image_Ha/Danh Mục/Dm/rau-củ.png'),
    },
    {
        id: 6,
        name: 'Trái Cây',
        img: require('../image_Ha/Danh Mục/Dm/trái-cây.jpg'),
    },
    {
        id: 7,
        name: 'Trái Cây Nhập Khẩu',
        img: require('../image_Ha/Danh Mục/Dm/trái-cây-nhập-khẩu.jpg'),
    },
    {
        id: 8,
        name: 'Hoa Tươi & Hạt Giống',
        img: require('../image_Ha/Danh Mục/Dm/hoa 1.jpg'),
    },
    {
        id: 9,
        name: 'Thịt - Hải Sản Tươi',
        img: require('../image_Ha/Danh Mục/Dm/ca-tuoi.jpg'),
    },
    {
        id: 10,
        name: 'Thịt - Hải Sản Đông',
        img: require('../image_Ha/Danh Mục/Dm/ca-dong.jpg'),
    },
    {
        id: 11,
        name: 'TP Đông Lạnh Khác',
        img: require('../image_Ha/Danh Mục/Dm/thuc-pham-dong-lanh-quang-ngai.jpg'),
    },
    {
        id: 12,
        name: 'Đồ Hộp ',
        img: require('../image_Ha/Danh Mục/Dm/do-hop.jpg'),
    },
    {
        id: 13,
        name: 'Mì Gói, TP Ăn Liền',
        img: require('../image_Ha/Danh Mục/Dm/mi-goi.jpg'),
    },
    {
        id: 14,
        name: 'Thực Phẩm Khô',
        img: require('../image_Ha/Danh Mục/Dm/tp-kho.jpg'),
    },
    {
        id: 15,
        name: 'Nguyên Liệu - Gia Vị',
        img: require('../image_Ha/Danh Mục/Dm/gia vi.jpg'),
    },
    {
        id: 16,
        name: 'Xúc Xich, Giò Chả',
        img: require('../image_Ha/Danh Mục/Dm/xuc-xich.png'),
    },
    {
        id: 17,
        name: 'Bánh Bao',
        img: require('../image_Ha/Danh Mục/Dm/banh-bao.jpg'),
    },
    {
        id: 18,
        name: 'Trứng',
        img: require('../image_Ha/Danh Mục/Dm/trung.jpg'),
    },
    {
        id: 19,
        name: 'Sữa Tươi',
        img: require('../image_Ha/Danh Mục/Dm/milk.jpg'),
    },
    {
        id: 20,
        name: 'Sữa Đặc & Sữa Bột',
        img: require('../image_Ha/Danh Mục/Dm/sua.jpg'),
    },
    {
        id: 21,
        name: 'TP Chế Biến Từ Sữa',
        img: require('../image_Ha/Danh Mục/Dm/tp-che-bien-tu-sau.jpg'),
    },

    {
        id: 22,
        name: 'Tã & Sữa cho bé',
        img: require('../image_Ha/Danh Mục/Dm/tã.jpg'),
    },
    {
        id: 23,
        name: 'Chăm Sóc Cho Bé',
        img: require('../image_Ha/Danh Mục/Dm/binh-sua-cho-be.jpg'),
    },
    {
        id: 24,
        name: 'Bánh Kẹo',
        img: require('../image_Ha/Danh Mục/Dm/banh-keo.jpg'),
    },
    {
        id: 25,
        name: 'Snack, Đậu, Trái Cây',
        img: require('../image_Ha/Danh Mục/Dm/snack.png'),
    },
    {
        id: 26,
        name: 'Trà & Cà Phê',
        img: require('../image_Ha/Danh Mục/Dm/tra-cafe.jpg'),
    },
    {
        id: 27,
        name: 'Nước Giải Khát',
        img: require('../image_Ha/Danh Mục/Dm/nuoc-gia-khat.jpg'),
    },
    {
        id: 28,
        name: 'Bia & Rượu',
        img: require('../image_Ha/Danh Mục/Dm/bia-ruou.jpg'),
    },
    {
        id: 29,
        name: 'Chăm Sóc Cá Nhân',
        img: require('../image_Ha/Danh Mục/Dm/dau-goi.jpg'),
    },
    {
        id: 30,
        name: 'Thức Uống Dinh Dưỡng',
        img: require('../image_Ha/Danh Mục/Dm/tu-đ.jpg'),
    },
    {
        id: 31,
        name: 'Mỹ Phẩm',
        img: require('../image_Ha/Danh Mục/Dm/my-pham.jpg'),
    },
    {
        id: 32,
        name: 'Hóa Phẩm & Tẩy Rửa',
        img: require('../image_Ha/Danh Mục/Dm/hoa-my-pham-7.jpg'),
    },
    {
        id: 33,
        name: 'Khăn, Giấy Vệ Sinh',
        img: require('../image_Ha/Danh Mục/Dm/giay.png'),
    },
    {
        id: 34,
        name: 'Đồ Điện Gia Dụng',
        img: require('../image_Ha/Danh Mục/Dm/Do-dung-gia-dinh.jpg'),
    },
    {
        id: 35,
        name: 'Đồ Điện Gia Đình',
        img: require('../image_Ha/Danh Mục/Dm/do-dien.jpg'),
    },
    {
        id: 36,
        name: 'Đồ Dùng Nhà Bếp',
        img: require('../image_Ha/Danh Mục/Dm/đồ-nhà bếp.jpg'),
    },
    {
        id: 37,
        name: 'Thời Trang Nữ',
        img: require('../image_Ha/Danh Mục/Dm/thoi-trang-nu.jpg'),
    },

]
const sanPham = [
    {

        img: require('../image_Ha/Danh Mục/bánh bao/bánh bao kim sa.png'),
        name: 'Bánh bao kim sa BamBoo 240g - 10262',
        price: '', /*giachuagiam*/
        price_up: '42,900đ', /*giaban*/
        thuong_hieu: '',
        xuat_xu: '',
        trong_luong: '',
        thanh_phan: '',
        dac_tinh: '',
        bao_quan: '',
        hsd: '',
        phan_phoi: '',
        type_DM: 'BanhBao'
    },
    {

        img: require('../image_Ha/Danh Mục/hải sản tươi/thit-heo-xay-cp-.jpg'),
        name: 'Thịt heo xay CP 300g 01498',
        price: '', /*giachuagiam*/
        price_up: '44,000đ', /*giaban*/
        thuong_hieu: '',
        xuat_xu: '',
        trong_luong: '',
        thanh_phan: '',
        dac_tinh: '',
        bao_quan: '',
        hsd: '',
        phan_phoi: '',
        type_DM: 'HSTuoi'
    },

    {

        img: require('../image_Ha/Danh Mục/hóa MP/fresh.jpg'),
        name: 'Tẩy vệ sinh toilet Mr.Fresh hương hoa ly 180g - 00386',
        price: '', /*giachuagiam*/
        price_up: '51,200đ', /*giaban*/
        thuong_hieu: 'Mr.Fresh (Hàn Quốc)',
        xuat_xu: 'Hàn Quốc',
        trong_luong: '180g',
        thanh_phan: 'Anionic Sunfactants, chất hoạt động bề mặt, hương liệu, hạt tạo màu, bột tạo khuân kết dính.',
        cong_dung: 'Tẩy các vết bẩn bám vào thành toilet, diệt khuẩn. Hương hoa ly dịu nhẹ, thời gian sử dụng lên đến 2000 lần (3-4 tháng).',
        sudung: 'Mở nắp chai và điều chỉnh độ màu sắc của nước với núm xoay thông minh. Mở nắp bồn chứa nước, xả hết nước trong bồn.- Đợi lượng nước trong bồn rút hết, thả nguyên cả chai vào góc bồn nước ở vị trí xa van xả. - Sau khoảng 10 phút, nước trong bồn sẽ chuyển sang màu xanh nước biển        ',

        bao_quan: 'Bảo quản nơi khô, mát, Để xa tầm với trẻ em.',
        hsd: '3 năm từ ngày sản xuất',
        phan_phoi: 'CTY CP TAP DOAN HOA SINH HA NOI - SO 252/57 TY SON, DONG DA',
        type_DM: 'HoaMyPHam'
    },

    {

        img: require('../image_Ha/Danh Mục/khăn/bless.jpg'),
        name: 'Giấy vệ sinh Blessyou Alavie 10 cuộn - 00723',
        price: '', /*giachuagiam*/
        price_up: '96,300đ', /*giaban*/
        thuong_hieu: 'Bless You (Việt Nam)',
        xuat_xu: 'Việt Nam',
        trong_luong: '10 cuộn',
        thanh_phan: '100% bột giấy nguyên thủy',
        sudung: 'Có thể sử dụng giấy vệ sinh trong việc chăm sóc cá nhân, lau chùi các vật dụng trong gia đình và vệ sinh nhà bếp hiệu quả',
        bao_quan: 'Có thể sử dụng giấy vệ sinh trong việc chăm sóc cá nhân, lau chùi các vật dụng trong gia đình và vệ sinh nhà bếp hiệu quả',
        hsd: '02 năm kể từ ngày sản xuất',
        phan_phoi: 'CONG TY CO PHAN GIAY SAI GON - Khu CN My Xuan A, Tan Thanh, Ba Ria Vung Tau',
        type_DM: 'Khan'
    },

    {

        img: require('../image_Ha/Danh Mục/mỳ gói/omachi gói.jpg'),
        name: 'Mì Omachi tôm chua cay 5 sao 78g - 68791',
        price: '8,200đ', /*giachuagiam*/
        price_up: '7,000đ', /*giaban*/
        thuong_hieu: 'Omachi (Việt Nam)',
        xuat_xu: 'Việt Nam',
        trong_luong: '80g',
        thanh_phan: 'Vắt mì - bột mì, dầu cọ, tinh bột khoai mì, chất ổn định, tinh bột khoai tây, muối, nước mắm, chất điều vị, chiết xuất nấm men, chất tạo xốp, bột lòng đỏ trứng, hỗn hợp protein lòng trắng trứng, xiro ngô nồng độ fructose cao, chiết xuất trái dành dành, chất chống oxy hóa Súp - dầu cọ, mỡ bò tinh luyện, ngò gai, đường, muối, chất điều vị, ớt, cà rốt sấy, hành tây, thơm, nước, cà chua dạng sệt, bột gia vị, tỏi, sả, hỗn hợp protein lúa mì, nước tương, bột gia vị hương bò hầm, hành lá sấy, nước cốt xương thịt, mắm ruốc, thịt bò, chất bảo quản,...',
        dac_tinh: 'Sợi mì khoai tây, tròn và nhỏ',
        bao_quan: 'Để nơi khô ráo, thoáng mát tránh ánh nắng mặt trời.',
        hsd: '12 tháng kể từ ngày sản xuất.',
        phan_phoi: 'CONG TY CP HANG TIEU DUNG MASAN - Phường 9.6,9.7 Tòa nhà E-Town 2,364 Cộng Hòa, P.13, Quận Tân Bình',
        type_DM: 'MyGoi'
    },
    {
        img: require('../image_Ha/Danh Mục/mỹ phẩm/nau.png'),
        name: 'Thuốc nhuộm tóc Bigen 4NA Nâu - 41143',
        price: '', /*giachuagiam*/
        price_up: '233,900đ', /*giaban*/
        thuong_hieu: 'Bigen(Nhật Bản)',
        xuat_xu: 'Nhật Bản',
        trong_luong: '80g',
        thanh_phan: '80g',
        cong_dung: 'Sản phẩm nhuộm tóc oxy hoá, sử dụng thông thường dùng để nhuộm các sợi tóc bạc làm đẹp cho tóc.',
        sudung: 'Lấy lượng kem bằng nhau từ tuýp kem màu ống 1 và tuýp kem pha ống 2 (tỉ lệ 1 và 1.5) ra khay trộn đều bằng lược chuyên dụng. Sau đó, bắt đầu chải thuốc lên tóc, chải đều từ gốc đến ngọn trong 10 phút và chờ thêm 10 phút để tóc ngấm kem nhuộm. Xả sạch tóc đến khi nước trong, sau đó gội lại bằng dầu gội và dầu xả như thông thường',
        bao_quan: 'Bảo quản sản phẩm ở những nơi khô ráo, thoáng mát tránh tiếp xúc trực tiếp với ánh nắng hoặc ở những nơi có nhiệt độ cao',
        hsd: '5 năm kể từ ngày sản xuất',
        phan_phoi: 'CONG TY TNHH DV TM THANH NGOC (FC)- F1-F2 KHU NAM LONH P.TAN THUAN DONG,Q.7',
        type_DM: 'MyPham'

    },
    {
        img: require('../image_Ha/Danh Mục/bánh kẹo/socola.jpg'),
        name: 'Socola đen hạnh nhân Snickers 40g - 01176',
        price: '', /*giachuagiam*/
        price_up: '25,500đ', /*giaban*/
        hasp: '',
        thuong_hieu: '',
        xuat_xu: '',
        trong_luong: '',
        thanh_phan: '',
        sudung: '',
        dac_tinh: '',
        bao_quan: '',
        hsd: '',
        luuy: '',
        phan_phoi: '',
        type_DM: 'BanhKeo'
    },
    {
        img: require('../image_Ha/Danh Mục/rau củ/bi-dao.jpg'),
        name: 'Bí xanh trái - 60947',
        price: '', /*giachuagiam*/
        price_up: '9,500đ', /*giaban*/
        hasp: '',
        thuong_hieu: '',
        xuat_xu: '',
        trong_luong: '',
        thanh_phan: '',
        sudung: '',
        dac_tinh: '',
        bao_quan: '',
        hsd: '',
        luuy: '',
        phan_phoi: '',
        type_DM: 'BanhKeo'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh kẹo/yopokki.jpg'),
        name: 'Bánh gạo Yopokki xốt kim chi Hàn QUốc 115g - 01915',
        price: '', /*giachuagiam*/
        price_up: '44,100đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: 'Yopokki (Hàn Quốc)',
        xuat_xu: 'Hàn Quốc',
        trong_luong: '115g',
        thanh_phan: 'Bánh gạo, đường, muối, tỏi, gia vị hỗn hợp,...',
        sudung: '+ Sử dụng chảo - Cho 100ml nước vào chảo. Khi nước sôi cho bánh gạo và gói bột súp vào. Đảo đều và nấu đến khi bánh gạo chín mềm và nước sốt sệt lại. + Sử dụng lò vi sóng - Cho bánh gạo và gói bột súp vào cốc. Đổ thêm nước đến vạch chỉ định và trộn đều. Cho vào lò vi sóng trong 1 phút 30 giây (1000W) hoặc 2 phút 30 giây (700W) để bánh gạo chín mềm và nước sốt sệt lại. Tuy theo khẩu vị, có thể nấu với chả cá, mì, xúc xích, trứng và các loại rau củ để món bánh gạo Yopokki ngon miệng hơn.',
        dac_tinh: 'Bánh gạo Hàn Quốc là món ăn quen thuộc và được nhiều người Việt Nam yêu thích. Bánh gạo Yopokki xốt kim chi Hàn Quốc ly 115g với nước xốt cay cay thơm nồng hương kim chi cùng bánh gạo dẻo nóng hấp dẫn. Bạn có thể dùng bánh gạo Yopokki cùng rau củ và chả cá, xúc xích để tăng thêm hương vị món ăn.',
        bao_quan: 'Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
        hsd: '12 tháng kể từ ngày sản xuất',
        luuy: 'Không nên sử dụng nếu dị ứng thành phần sản phẩm, sản phẩm có dấu hiệu ẩm mốc, hết hạn để tránh gây ảnh hưởng không tốt đến sức khỏe',
        phan_phoi: 'CTY CO PHAN SXTMDV PHỤC THINH - 16 Ngach 97/4, Pho Pham Ngoc Thach, P.Kim Lien,Q.Dong Da',
        type_DM: 'BanhKeo'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh kẹo/cosy-vi-que.jpg'),
        name: 'Bánh quế Cosy dứa 126g - 33107',
        price: '', /*giachuagiam*/
        price_up: '13,400đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: 'Cosy (Việt Nam)',
        xuat_xu: 'Việt Nam',
        trong_luong: '126g',
        thanh_phan: 'Bột mì, đường, dầu cọ, bột whey, bột bắp, chất nhũ hoá (322(i)), đường glucose, hương thực phẩm tổng hợp (vani, dứa), muối, chất điều chỉnh độ acid (330), chất giữ ẩm (420(ii)), màu thực phẩm tổng hợp (129).',
        sudung: 'Dùng trực tiếp',
        dac_tinh: 'Bánh quế thơm ngon, giòn tan đậm vị kem dâu. Bánh quế vị kem dứa Cosy gói 126 g là sản phẩm chất lượng đến từ bánh quế Cosy, hương vị thơm ngon, kích thích vị giác mà không ngán khi ăn. Bánh quế có thể sử dụng để ăn vặt hoặc trang trí những món ngọt tùy thích như kem, puding.....',
        bao_quan: 'Bảo quản nơi khô ráo và thoáng mát, tránh ánh nắng trực tiếp, đậy kín bao bì sau mỗi lần sử dụng.',
        hsd: '10 tháng kể từ ngày sản xuất.',
        luuy: '10 tháng kể từ ngày sản xuất.',
        phan_phoi: 'CTY TNHH MTV KINH DO MIEN BAC - KM22-QUOC LO 5A-TT AN YEN NHAN,MY HAO HUNG YEN',
        type_DM: 'BanhKeo'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh kẹo/que.jpg'),
        name: 'Bánh quế Cosy socola 126g - 33107',
        price: '', /*giachuagiam*/
        price_up: '13,400đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: 'Cosy (Việt Nam)',
        xuat_xu: 'Việt Nam',
        trong_luong: '126g',
        thanh_phan: 'Bột mì, đường, dầu cọ, bột whey, bột bắp, chất nhũ hoá (322(i)), đường glucose, hương thực phẩm tổng hợp (vani, dứa), muối, chất điều chỉnh độ acid (330), chất giữ ẩm (420(ii)), màu thực phẩm tổng hợp (129).',
        sudung: 'Dùng trực tiếp',
        dac_tinh: 'Bánh quế thơm ngon, giòn tan đậm vị kem dâu. Bánh quế vị kem dứa Cosy gói 126 g là sản phẩm chất lượng đến từ bánh quế Cosy, hương vị thơm ngon, kích thích vị giác mà không ngán khi ăn. Bánh quế có thể sử dụng để ăn vặt hoặc trang trí những món ngọt tùy thích như kem, puding.....',
        bao_quan: 'Bảo quản nơi khô ráo và thoáng mát, tránh ánh nắng trực tiếp, đậy kín bao bì sau mỗi lần sử dụng.',
        hsd: '10 tháng kể từ ngày sản xuất.',
        luuy: '10 tháng kể từ ngày sản xuất.',
        phan_phoi: 'CTY TNHH MTV KINH DO MIEN BAC - KM22-QUOC LO 5A-TT AN YEN NHAN,MY HAO HUNG YEN',
        type_DM: 'BanhKeo'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh kẹo/que-dau.jpg'),
        name: 'Bánh quế Cosy dâu 126g - 33107',
        price: '', /*giachuagiam*/
        price_up: '13,400đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: 'Cosy (Việt Nam)',
        xuat_xu: 'Việt Nam',
        trong_luong: '126g',
        thanh_phan: 'Bột mì, đường, dầu cọ, bột whey, bột bắp, chất nhũ hoá (322(i)), đường glucose, hương thực phẩm tổng hợp (vani, dứa), muối, chất điều chỉnh độ acid (330), chất giữ ẩm (420(ii)), màu thực phẩm tổng hợp (129).',
        sudung: 'Dùng trực tiếp',
        dac_tinh: 'Bánh quế thơm ngon, giòn tan đậm vị kem dâu. Bánh quế vị kem dứa Cosy gói 126 g là sản phẩm chất lượng đến từ bánh quế Cosy, hương vị thơm ngon, kích thích vị giác mà không ngán khi ăn. Bánh quế có thể sử dụng để ăn vặt hoặc trang trí những món ngọt tùy thích như kem, puding.....',
        bao_quan: 'Bảo quản nơi khô ráo và thoáng mát, tránh ánh nắng trực tiếp, đậy kín bao bì sau mỗi lần sử dụng.',
        hsd: '10 tháng kể từ ngày sản xuất.',
        luuy: '10 tháng kể từ ngày sản xuất.',
        phan_phoi: 'CTY TNHH MTV KINH DO MIEN BAC - KM22-QUOC LO 5A-TT AN YEN NHAN,MY HAO HUNG YEN',
        type_DM: 'BanhKeo'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh ngọt/banh-mi-bo-toi.jpg'),
        name: 'Bánh mỳ bơ 180g - 55923',
        price: '', /*giachuagiam*/
        price_up: '9,000đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        xuat_xu: 'Việt Nam',
        trong_luong: '180g',
        hsd: 'trong 2 ngày',
        luuy: '',
        phan_phoi: 'Hệ thống siêu thị Go!/BigC',
        type_DM: 'BanhMy'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh ngọt/Bm ham.png'),
        name: 'Lô 2 bánh Hambuiger 120g - 55216',
        price: '', /*giachuagiam*/
        price_up: '10,000đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        xuat_xu: 'Việt Nam',
        trong_luong: '120g x 2',
        hsd: '3 ngày kể từ ngày sản xuất',
        luuy: 'không sử dụng sản phẩm khi có dấu hiệu hư hỏng',
        type_DM: 'BanhMy'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh ngọt/sandwich lát.jpg'),
        name: 'Lô 2 sandwich 300g - 05467',
        price: '', /*giachuagiam*/
        price_up: '34,000đ', /*giaban*/
        hasp: '',
        xuat_xu: '',
        trong_luong: '',
        hsd: '',
        luuy: '',
        phan_phoi: '',
        type_DM: 'BanhMy'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh ngọt/banh-mi-bo-toi.jpg'),
        name: 'Bánh mỳ bơ 180g - 55923',
        price: '', /*giachuagiam*/
        price_up: '9,000đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        xuat_xu: 'Việt Nam',
        trong_luong: '180g',
        hsd: 'trong 2 ngày',
        phan_phoi: 'Hệ thống siêu thị Go!/BigC',
        type_DM: 'BanhMy'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh ngọt/BM baguette dd.png'),
        name: 'Bánh mỳ Baguette mè 190g - 55783',
        price: '', /*giachuagiam*/
        price_up: '5,900đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        xuat_xu: 'Việt Nam',
        trong_luong: '190g',
        hsd: 'trong 1 ngày',
        phan_phoi: 'Hệ thống siêu thị Go!/BigC',
        type_DM: 'BanhMy'
    },
    {
        img: require('../image_Ha/Danh Mục/bánh ngọt/BM baguette nho.png'),
        name: 'Bánh mỳ Baguette 200g - 55965',
        price: '', /*giachuagiam*/
        price_up: '3,800đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        xuat_xu: 'Việt Nam',
        trong_luong: '200g',
        hsd: 'trong 1 ngày',
        phan_phoi: 'Hệ thống siêu thị Go!/BigC',
        type_DM: 'BanhMy'
    },
    {
        img: require('../image_Ha/Danh Mục/cs bé/TD.jpg'),
        name: 'Nước súc miệng Thái Dương trẻ em 250ml - 01237 ',
        price: '', /*giachuagiam*/
        price_up: '19,600đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: 'Thái Dương (Việt Nam)',
        xuat_xu: 'Việt Nam',
        trong_luong: '250ml',
        thanh_phan: 'Aqua, Glycerin, Propylene Glycol, Alcohol, PEG-40 Hdrogenated Castor Oil, Poloxamer 407, Sodium Fluoride, Citrus Sinenisis (Orange) Fruit/ Pell Oil, Sodium Chloride, Menthol, Aspartame, Mentha Arvensis Leaf Oil, Citric Acid, Alllantoin, CI 1585',
        cong_dung: ' Trị hôi miệng, nhiệt mieegnj, sâu răng, viêm lợi',
        gioi_tính: 'nam & nữ',
        sudung: 'Hôi miệng súc và ngậm 2-5 phút. Các bệnh về răng miệng (sâu răng, viêm lợi, nhiệt miệng, nấm lưỡi...): súc và ngậm khoảng 5 phút. Sử dụng hàng ngày, tối thiểu 2 lần, sáng và tối, sau đánh răng, mỗi lần 10-15 ml.',
        bao_quan: 'Nơi khô ráo thoáng mát. Tránh ánh nắng trực tiếp, nơi có nhiệt độ cao hoặc ẩm ướt',
        hsd: '3 năm kể từ ngày sản xuất',
        phan_phoi: 'CONG TY CO PHAN SAO THAI DUONG- Số nhà 92 Vĩnh Hưng, Hoàng Mai, Số nhà 130 Vĩnh Hưng, Hoàng Mai',
        type_DM: 'CsBe'
    },
    {
        img: require('../image_Ha/Danh Mục/cs cá nhân/siuden.png'),
        name: 'Dầu gội Sunsilk óng mượt rạng ngời 900g - 13652',
        price: '', /*giachuagiam*/
        price_up: '190,100đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: 'Sunsilk (Anh)',
        xuat_xu: 'Việt Nam',
        trong_luong: '900g',
        thanh_phan: 'Water, Sodium Laureth Sulfate, Dimethiconol, Cocamidopropyl Betaine, Sodium Chloride, Perfume, Citric Acid, TEA- Dodecylbenzenesulfonate, Carbomer, Sodium Benzoate, Guar Hydroxypropyltrimonium Chloride, PEG-45M, Trideceth-10, Disodium EDTA, Phenoxyethanol, Mica, Titanium Dioxide, Lysine HCI, Sodium Sulfate, Silica, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Polysorbate 20, Glycerin, Gleditsia Australis Fruit Extract, lodopropynyl Butylcarbamate, Oryza Sativa (Rice) Extract, BHT, Ascorbic Acid, Tocopheryl Acetate, Panthenol, Potassium Sorbate, Sorbic Acid, CI47005, CI 17200, CI 42051',
        cong_dung: 'Dùng để gội đầu, làm sạch tóc, giúp tóc mềm mượt',
        dac_tinh: 'với hệ dưỡng chất Activ- Infusion kết hợp tinh chất bổ kết, dầu hạnh nhân, protein gạo đen, vitamin E giúp tóc chắc khỏe và bóng mượt vượt trội. Sản phẩm đem lại mái tóc mềm mượt như lụa, không lo bết dính..',
        gioi_tính: 'nam & nữ',
        sudung: 'Làm ướt tóc, xoa dầu gội nhẹ nhàng lên tóc và da đầu, mát- xa và xả sạch lại với nước. Gội thêm lần nữa nếu muốn.',
        bao_quan: 'Tránh nhiệt độ cao và ánh nắng trực tiếp',
        hsd: '3 năm kể từ ngày sản xuất',
        phan_phoi: 'CCTY TNHH QUOC TE UNILEVER VIET NAM- 156 Nguyễn Lương Bằng, phường Tân Phú, Quận 7',
        type_DM: 'CsCaNhan'
    },
    {
        img: require('../image_Ha/Danh Mục/cs cá nhân/siuvang.jpg'),
        name: 'Dầu gội Sunsilk mềm mượt diệu kỳ 1.4kg - 13720',
        price: '', /*giachuagiam*/
        price_up: '287,100đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: 'Sunsilk (Anh)',
        xuat_xu: 'Việt Nam',
        trong_luong: '1,4kg',
        thanh_phan: 'Water, Sodium Laureth Sulfate, Dimethiconol, Cocamidopropyl Betaine, Sodium Chloride, Perfume, Citric Acid, TEA- Dodecylbenzenesulfonate, Carbomer, Sodium Benzoate, Guar Hydroxypropyltrimonium Chloride, PEG-45M, Trideceth-10, Disodium EDTA, Phenoxyethanol, Mica, Titanium Dioxide, Lysine HCI, Sodium Sulfate, Silica, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Polysorbate 20, Glycerin, Gleditsia Australis Fruit Extract, lodopropynyl Butylcarbamate, Oryza Sativa (Rice) Extract, BHT, Ascorbic Acid, Tocopheryl Acetate, Panthenol, Potassium Sorbate, Sorbic Acid, CI47005, CI 17200, CI 42051',
        cong_dung: 'Dùng để gội đầu, làm sạch tóc, giúp tóc mềm mượt',
        dac_tinh: 'với hệ dưỡng chất Activ- Infusion kết hợp tinh chất bổ kết, dầu hạnh nhân, protein gạo đen, vitamin E giúp tóc chắc khỏe và bóng mượt vượt trội. Sản phẩm đem lại mái tóc mềm mượt như lụa, không lo bết dính..',
        gioi_tính: 'nam & nữ',
        sudung: 'Làm ướt tóc, xoa dầu gội nhẹ nhàng lên tóc và da đầu, mát- xa và xả sạch lại với nước. Gội thêm lần nữa nếu muốn.',
        bao_quan: 'Tránh nhiệt độ cao và ánh nắng trực tiếp',
        hsd: '3 năm kể từ ngày sản xuất',
        phan_phoi: 'CCTY TNHH QUOC TE UNILEVER VIET NAM- 156 Nguyễn Lương Bằng, phường Tân Phú, Quận 7',
        type_DM: 'CsCaNhan'
    },
    {
        img: require('../image_Ha/Danh Mục/đồ ăn sẵn/mắm tôn NL.jpg'),
        name: 'Mắm tôm Bắc Ngọc Liên 220g - 02552',
        price: '', /*giachuagiam*/
        price_up: '23,600đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: 'Ngọc Liên (Việt Nam)',
        xuat_xu: 'Việt Nam',
        trong_luong: '220g',
        thanh_phan: 'Mắm tôm bắc (con ruốc 65%, muối) 99.99%, chất bảo quản (E202, E211),...',
        cong_dung: 'Dùng để gội đầu, làm sạch tóc, giúp tóc mềm mượt',
        dac_tinh: 'Sản phẩm được làm từ ruốc tươi ngon nguyên chất 100%. Mắm tôm bắc Ngọc Liên được chế biến dựa trên công thức truyền thống của người Việt, mang đến món ăn đặc sản có chất lượng tốt nhất cho người dùng. Mắm tôm bắc có vị mặn vừa phải, hương vị hoàn toàn tự nhiên, đảm bảo an toàn sức khỏe cho người sử dụng.',
        sudung: 'Sản phẩm được làm từ ruốc tươi ngon nguyên chất 100%. Mắm tôm bắc Ngọc Liên được chế biến dựa trên công thức truyền thống của người Việt, mang đến món ăn đặc sản có chất lượng tốt nhất cho người dùng. Mắm tôm bắc có vị mặn vừa phải, hương vị hoàn toàn tự nhiên, đảm bảo an toàn sức khỏe cho người sử dụng.',
        bao_quan: 'Tránh nhiệt độ cao và ánh nắng mặt trời',
        hsd: '12 tháng kể từ ngày sản xuất.',
        luuy: 'Không nên sử dụng nếu dị ứng thành phần sản phẩm, sản phẩm có dấu hiệu ẩm mốc, hết hạn để tránh gây ảnh hưởng không tốt đến sức khỏe.',
        phan_phoi: 'CTY TNHH SX TM XNK NGOC LIEN - 72 Trần Tấn, Phường Tân Sơn Nhị, Quận Tân Phú',
        type_DM: 'DoAnSan'
    },
    {
        img: require('../image_Ha/Danh Mục/đồ ăn sẵn/sốt kim chi ofood.png'),
        name: 'Xốt muối kim chi Hàn Quốc oFood 180g - 00912',
        price: '28,600đ', /*giachuagiam*/
        price_up: '24,400đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: "O'Food (Hàn Quốc)",
        xuat_xu: 'Việt Nam',
        trong_luong: '180g',
        thanh_phan: 'Đường, tỏi, hành tây, bột ớt kiểu Hàn Quốc, nước mắm (cá, muối), ớt, gừng, muối, chất điều vị, chất làm dày, chất điều chỉnh độ acid, chất bảo quản, chiết xuất ớt, hương nước mắm tổng hợp.',

        dac_tinh: '',
        gioi_tính: 'nam & nữ',
        sudung: 'Đầu tiên, chẻ cây cải thảo là đôi hoặc làm tư, rửa sạch. Sau đó cho muối vào từng kẽ lá, để khoảng 3-4h cho cải mềm. Rửa lại thật sạch, để thật ráo nước. Trộn đều sốt với các nguyên liệu tươi đã chuẩn bị (củ cải, cà rốt, hành lá, hẹ) và ướp đều hỗn hợp này với cải thảo. Cho kim chi vào hũ và nén chặt, đậy kín nắp. Sau 30-36h cho vào tủ lạnh và sử dụng dần trong khoảng 1 tuần.',
        bao_quan: 'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Không để gần hóa chất hoặc sản phẩm có mùi mạnh.',
        hsd: '12 tháng kể từ ngày sản xuất.',
        luuy: 'Không nên sử dụng nếu dị ứng thành phần sản phẩm, sản phẩm có dấu hiệu ẩm mốc, hết hạn để tránh gây ảnh hưởng không tốt đến sức khỏe.',
        phan_phoi: 'CN CTY TNHH DAESANG VN TAI HCM - LO1 DUONG SO 14,KCN-KCX LINH TRUNG2, P.BINH CHIEU, Q,THU DUC',
        type_DM: 'DoAnSan'
    },
    {
        img: require('../image_Ha/Danh Mục/đồ hộp/bơ thực vật.jpg'),
        name: 'Bơ thực vật Meizan Magarine 80g - 70101',
        price: '', /*giachuagiam*/
        price_up: '9,800đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: "Meizan (Việt Nam)",
        xuat_xu: 'Việt Nam',
        trong_luong: '80g',
        thanh_phan: 'Dầu cọ, dầu stearin cọ, dầu olein nhận cọ, dầu stearin gạo, dầu đậu nành, dầu stearin co hy-đro hóa và tinh luyện, nước, muối, hương bơ tổng hợp, chất nhũ hóa (476), lecitin đậu nành (322(i)), chất chống oxy hóa (321), (330), chất bảo quản (202), (211), phẩm màu tổng hợp (160a(i)). Sản phẩm chứa nguyên liệu có nguồn gốc từ đậu nành.',
        dac_tinh: 'Sản phẩm có vị mặn dịu tự nhiên, người dùng có thể sử dụng sản phẩm để làm các món nướng, món xào, nước sốt, làm bánh... tạo nên độ béo cùng hương vị thơm ngon đặc trưng. Ngoài ra, bạn cũng có thể dùng trực tiếp để ăn cùng với bánh mì và một số đồ ăn nhanh khác.',
        gioi_tính: 'nam & nữ',
        sudung: 'Dùng để làm các món nướng, món xào, nước sốt, làm bánh... tạo nên độ béo cùng hương vị thơm ngon đặc trưng và cũng có thể dùng trực tiếp để ăn cùng với bánh mì và một số đồ ăn nhanh khác.',
        bao_quan: 'Để nơi khô ráo thoáng mát, bảo quản lạnh sau khi mở nắp',
        hsd: '09 tháng kể từ ngày sản xuất.',
        luuy: 'Không nên sử dụng nếu dị ứng thành phần sản phẩm, sản phẩm có dấu hiệu ẩm mốc, hết hạn để tránh gây ảnh hưởng không tốt đến sức khỏe.',
        phan_phoi: 'WILMAR Tang 10, Toa Nha Cornerstone,, 16 Phan Chu Trinh, Q.Hoan Kiem',
        type_DM: 'DoHop'
    },
    {
        img: require('../image_Ha/Danh Mục/gia đình/tamchi.jpg'),
        name: 'Tăm chỉ Beauty Formualrs Active 50 cái - 10658',
        price: '', /*giachuagiam*/
        price_up: '52,900đ', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: "Beauty Formualas (Anh)",
        xuat_xu: 'Anh',
        trong_luong: 'Hộp 50 cây',
        thanh_phan: 'Nylon, Polypropylene, Styrene Ethylene Butadience, Styrene Copolymer',
        cong_dung: 'đánh bay hết mảng bám và thức ăn còn đọng lại trong răng giúp tránh mảng bám hình thành vôi răng.',
        dac_tinh: 'sử dụng hàng ngày',
        gioi_tính: 'nam & nữ',
        sudung: 'dễ dàng đánh bay thức ăn thừa và mảng bám. Nó có thể len lỏi qua mọi kẻ răng để làm sạch răng mà không làm tốn thương đến nướu.',
        bao_quan: 'Bảo quản nơi khô ráo, thoáng mát.',
        hsd: '5 năm kể từ ngày sản xuất',
        phan_phoi: 'CTY TNHH B.P.V- PHONG 204B,2-4-6 DONG KHOI,Q.1',
        type_DM: 'GiaDinh'
    },
    {
        img: require('../image_Ha/Danh Mục/gia dụng/4lo.jpg'),
        name: 'Ổ cắm 4 lỗ 2 chấu 5m - 60635',
        price: '125,000đ', /*giachuagiam*/
        price_up: '109,800đ', /*giaban*/

        type_DM: 'DoHop'
    },
    {
        img: require('../image_Ha/Danh Mục/gia vị/simply5l.jpg'),
        name: 'Dầu nành Simply 5L - 20045',
        price: '', /*giachuagiam*/
        price_up: '313,5', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: "Simply (Việt Nam)",
        xuat_xu: 'Việt Nam',
        trong_luong: '5L',
        thanh_phan: '100% dầu đậu nành nguyên chất, vitamin A palmitat',
        dac_tinh: 'Nguyên liệu tốt nhất từ Châu Mỹ, công nghệ tinh chế hiện đại; gairu omega-3-6-9, tốt cho tim mạch; nhãn hiệu dầu ăn duy nhất được hội tim mạch việt anm khuyên dùng',

        sudung: 'Dùng chiên, xào , trộn salad, làm sốt',
        bao_quan: 'Để nơi khô ráo thoáng mát,nên sử dụng 1 tháng sau khi mở nắp',
        hsd: '12 tháng kể từ ngày sản xuất.',
        phan_phoi: 'WILMAR Tang 10, Toa Nha Cornerstone,, 16 Phan Chu Trinh, Q.Hoan Kiem',
        type_DM: 'GiaVi'
    },
    {
        img: require('../image_Ha/Danh Mục/hải sản đông/tôm quấn khoai tây.jpg'),
        name: 'Dầu nành Simply 5L - 20045',
        price: '', /*giachuagiam*/
        price_up: '313,5', /*giaban*/
        hasp: 'có thể khác với thực tế do thay đổi bao bì từ nhà cung cấp.',
        thuong_hieu: "Hai Thanh (Việt Nam)",
        xuat_xu: 'Việt Nam',
        trong_luong: '300g',
        thanh_phan: 'Tôm tươi (37,1%), khoai tây (58%), cà rốt(0,6%), hành lá (0,08%), dầu mè (0,05%)...',
        sudung: 'chiên ngập dầu từ 3 đến 4 phút đến khi vàng đều là có thể dùng ngay, không cần rã đông',
        bao_quan: 'Nhiệt độ -18oC hoặc trong ngăn đá tủ lạnh ',
        hsd: '12 tháng kể từ ngày sản xuất.',
        luuy: 'Không nên sử dụng nếu dị ứng thành phần sản phẩm, sản phẩm có dấu hiệu ẩm mốc, hết hạn để tránh gây ảnh hưởng không tốt đến sức khỏe.',
        phan_phoi: 'CTY TNHH TP XUAT NHAP KHAU HAI THANH- A14aKCN HIEP PHUOC- LONG THOI- NHA BE',
        type_DM: 'HSDong'
    },



]
export default function DanhMuc({ navigation }) {
    const [data1, setData1] = useState(danhMuc);
    const [dataSanPham, setDataSanPham] = useState(sanPham);
    return (
        <View style={{ backgroundColor: '#f8f4f4' }}>
            <View /*Head*/ style={{ backgroundColor: '#ea1717' }}>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Pressable  onPress={()=>{navigation.navigate('DiaChi')}}>
                        <Ionicons name="location-outline" size={16} color="white" />
                    </Pressable>
                    <Text style={{ fontSize: 15, color: 'white', fontWeight: '500', marginLeft: 10 }}>GO! GÒ VẤP</Text>
                    <AntDesign name="caretdown" size={10} color="white" style={{ margin: 5 }} />

                </View>

                <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                    <Pressable  onPress={()=>{navigation.navigate('TimKiem1')}}
                        style={{ width: 280, height: 40, borderRadius: 20, backgroundColor: 'white', marginLeft: 20, flexDirection: 'row' }}
                    > <FontAwesome name="search" size={18} color="#ea1616" style={{ margin: 10 }} />
                        <Text style={{ fontSize: 14, margin: 10, marginLeft: -3 }}>Xin chào, Bạn muốn tìm gì hôm nay?</Text>
                    </Pressable>
                    <Pressable  onPress={()=>{navigation.navigate('GioHang')}}>
                        <AntDesign name="shoppingcart" size={32} color="white" style={{ margin: 5 }} />
                    </Pressable>
                </View>


            </View>
            <View style={{ flexDirection: 'row' }}>
                {/* danh mục */}
                <View style={{ flexDirection: 'column-reverse' }}>
                    <FlatList //Combo Giam Gia
                        data={data1}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ width: 75, borderRightWidth: 1, borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Image source={item.img} style={{ marginTop: 5, width: 50, height: 50, borderRadius: 100 }} />
                                    <Text style={{ marginLeft: 3 }}>{item.name}</Text>


                                </View>
                            )
                        }}
                    ></FlatList>

                </View>

                {/* Sản phẩm */}
                <View>
                    <FlatList  //san pham
                        numColumns={2}
                        data={dataSanPham}
                        renderItem={({ item }) => {
                            return (
                                <Pressable onPress={() => { navigation.navigate({ name: 'SanPham', params: { item } }) }}>
                                    <View style={{ height: 240, width: 145, alignItems: 'center', margin: 5, backgroundColor: "#fff", shadowColor: 'gray', shadowRadius: 5, borderRadius: 5 }}>
                                        <Image source={item.img} style={{ marginTop: 5, width: 100, height: 100, resizeMode: 'contain' }} />
                                        <Text style={{ marginLeft: 3 }}>{item.name}</Text>
                                        <Text style={{ fontWeight: 'bold', color: '#ea1717', fontSize: 16 }}> {item.price_up}</Text>
                                        <Text style={{ fontWeight: '600', color: 'gray', fontSize: 16 }}> <s>{item.price}</s></Text>

                                        <View style={{ height: 30, width: 120, borderRadius: 20, backgroundColor: '#ea1717', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'white', fontSize: 12 }}>Thêm vào giỏ</Text>
                                        </View>

                                    </View>
                                </Pressable>
                            )
                        }}
                    ></FlatList>
                </View>
            </View>
            {/* footer */}
            <View /*End*/ style={{ width: '100%', height: 80, flexDirection: 'row' }}>
                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                <Pressable
                        onPress={() => { navigation.navigate('Home') }}
                    >
                    <Image source={require('../image/goden.jpg')} style={{ width: '90%', height: 40, margin: 15, marginLeft: 3 }} />
                    <Text style={{ fontSize: 13, fontWeight: '500', margin: -10, marginLeft: 4, }}>Trang chủ</Text>
              </Pressable>
                </View>

                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                    <Pressable
                        onPress={() => { navigation.navigate('DanhMuc') }}
                    >
                        <Feather name="layers" size={44} color="red" style={{ margin: 12, marginLeft: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 8, color: 'red' }}>Danh mục</Text>
                    </Pressable>

                </View>

                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                    <Pressable
                        onPress={() => { navigation.navigate('ThuongHieu') }}
                    >
                        <Feather name="shopping-bag" size={44} color="gray" style={{ margin: 12, marginLeft: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 1, }}>Thương hiệu</Text>
                    </Pressable>

                </View>

                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                    <Pressable
                        onPress={() => { navigation.navigate('ThongBao') }}
                    >
                        <FontAwesome5 name="bell" size={45} color="gray" style={{ margin: 12, marginLeft: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 4, }}>Thông báo</Text>
                    </Pressable>

                </View>

                <View style={{ width: '20%', height: '100%', backgroundColor: 'white' }}>
                    <Pressable
                        onPress={() => { navigation.navigate('TaiKhoan') }}

                    >
                        <MaterialCommunityIcons name="account-outline" size={50} color="gray" style={{ margin: 12, marginLeft: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: '500', margin: -15, marginLeft: 9, }}>Tài khoản</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    );
}
