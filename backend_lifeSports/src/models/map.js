import mongoose from 'mongoose';

/*
 *  2020 - 09 - 27 (Sun)
 *  Writer: 조봉준
 *  
 *  [ Map Schema ]
 *  @params                                     Data e.g)
 *  ycode: latitude                             37.6144169        
 *  type_nm: category                           구기체육관
 *  gu_nm: Autonomous Region                    중랑구
 *  parking_lot: available parking              주차가능(일반 18면 / 장애인 2면)
 *  bigo: 
 *  xcode: longtitude                           127.0842018
 *  tel: telephone Number                       949-5577
 *  addr: address                               중랑구 숙선옹주로 66
 *  in_out: IN/OUT place                        실내체육관
 *  home_pade: Home Page                        http://www.jungnangimc.or.kr/
 *  edu_yn: Class Status                        유
 *  nm: place Name                              묵동 다목적 체육관
 */

const { Schema } = mongoose;

const MapSchema = new Schema({
    ycode: Number,
    type_nm: String,
    gu_nm: String,
    parking_lot: String,
    bigo: String,
    xcode: Number,
    tel: String,
    addr: String,
    in_out: String,
    home_page: String,
    edu_yn: String,
    nm: String,
});

const Map = mongoose.model('Map', MapSchema);

export default Map;