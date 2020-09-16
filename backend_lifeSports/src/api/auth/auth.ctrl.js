import Joi from '@hapi/joi';
import User from '../../models/auth';

/*
 *  2020 - 09 - 16 (Wed)
 *  Writer: 조봉준
 *  
 *  [ REST API Method for Auth ]  
 */

/*
 *  2020 - 09 - 16 (Wed)
 *  Writer: 조봉준
 *  
 *  [ register method ]
 * 
 *  POST http://localhost:4000/api/auth/register  
 *  {
 *      userId: String,                        
        hashedPassword: String,
        userName: String,
        email: String,
        socialNumberPrefix: String,
        socialNumberSuffix: String,
        addr: String,
        phoneMiddleNumber: String,
        phoneLastNumber: String,
        point: Number,
 *  }
 */
export const register = async ctx => {
    const schema = Joi.object().keys({
        userId: Joi.string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
        password: Joi.string().required(),
        userName: Joi.string().required(),
        email: Joi.string().required(),
        socialNumberPrefix: Joi.string().required(),
        socialNumberSuffix: Joi.string().required(),
        addr: Joi.string().required(),
        phoneMiddleNumber: Joi.string().required(),
        phoneLastNumber: Joi.string().required(),
    });

    const result = schema.validate(ctx.request.body);

    if(result.error) {
        ctx.status = 400;
        ctx.body = result.error;

        return;
    }

    const { userId, password, userName, 
            email, socialNumberPrefix,
            socialNumberSuffix, addr, 
            phoneMiddleNumber, phoneLastNumber 
        } = ctx.request.body;

    try {
        const exists = await User.findByUserId(userId);

        if(exists) {
            ctx.status = 409; // Conflict

            return;
        }

        const user = new User({
            userId,
            userName,
            email,
            socialNumberPrefix,
            socialNumberSuffix,
            addr,
            phoneMiddleNumber,
            phoneLastNumber,
        });

        await user.setPassword(password);    // Set Password
        await user.save();                   // Save Database

        ctx.body = user.serialize();
    } catch ( e ) {
        ctx.throw(500, e);
    }
};

export const login = async ctx => {
    // login
}

export const check = async ctx => {
    // check login status
};

export const logout = async ctx => {
    // logout
};