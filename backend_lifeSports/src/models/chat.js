import mongoose, { Schema } from 'mongoose';

/*
 *  2020 - 09 - 16 (Wed)
 *  Writer: 조봉준
 *  
 *  [ UserSchema Attribute ]  
 *  
 *  userId : userId that is unique
 *  hashedPassword : Entered password and transform to hash password
 *  userName: Real userName
 *  socialNumberPrefix: 6 letters number of year, month, day
 *  socialNumberSuffix: 1 letter to indicate gender 
 *                      e.g) 1, 3 - male / 2, 4 - female
 *  addr: User's address
 *  phoneMiddleNumber: Phone middle Number
 *  phoneLastNumber: Phone last Number
 */

 // 채팅 api 찾아보기
const ChatSchema = new Schema({
    chatTitle: String,
    chatContent: String,
    money: Number,

});

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;