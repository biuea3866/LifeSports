import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    email: String,
    hashedPassword: String,
    userName: String,                         // 본명
    nickName: String,
    birthYear: String,
    birthMonth: String,
    birthDay: String,
    gender: String,
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

UserSchema.methods.setPassword = async function(password) {
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

UserSchema.methods.checkPassword = async function(password) {
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
UserSchema.statics.findByUserId = function(email) {
    return this.findOne({ email });
};

/**
 *  2020 - 09 - 16 (Wed)
 *  Writer: 조봉준
 *  
 *  [ serialize method ]  
 *  
 *  When user's data is responsed, to hide password field function
 */
UserSchema.methods.serialize = function() {
    const data = this.toJSON();

    delete data.hashedPassword;

    return data;
}

/**
 *  2020 - 09 - 17 (Thur)
 *  Writer: 조봉준
 *  
 *  [ generateToken method ]  
 *  
 *  For user's security, Tokens are delivered to users 
 *  when login and registration are successful
 */
UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        {
            _id: this.id,
            email: this.email,
        },

        process.env.JWT_SECRET,

        {
            expiresIn: '7d',
        },
    );

    return token;
};

const User = mongoose.model('User', UserSchema);

export default User;