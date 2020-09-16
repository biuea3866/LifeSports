import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

/**
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

const UserSchema = new Schema({
    userId: String,                        
    hashedPassword: String,
    userName: String,
    email: String,
    socialNumberPrefix: String,
    socialNumberSuffix: String,
    addr: String,
    phoneMiddleNumber: String,
    phoneLastNumber: String,
    point: Number,
});

/**
 *  2020 - 09 - 16 (Wed)
 *  Writer: 조봉준
 *  
 *  [ setPassword method ]  
 *  
 *  1. User enters password
 *  2. Convert this password using hash
 */

UserSchema.method.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);

    this.hashedPassword = hash;
};

/**
 *  2020 - 09 - 16 (Wed)
 *  Writer: 조봉준
 *  
 *  [ checkPassword method ]  
 *  
 *  1. Compare password
 *  2. return true or false
 */

UserSchema.method.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);

    return result;
};

/**
 *  2020 - 09 - 16 (Wed)
 *  Writer: 조봉준
 *  
 *  [ findByUserId method ]  
 *  
 *  1. Using userID find user information.
 */
UserSchema.static.findByUserId = function(userId) {
    return this.findOne({ userId });
};

const User = mongoose.model('User', UserSchema);

export default User;