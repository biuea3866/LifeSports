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

        const token = user.generateToken();

        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
            httpOnly: true,
        });

    } catch ( e ) {
        ctx.throw(500, e);
    }
};


/*
 *  2020 - 09 - 17 (Thur)
 *  Writer: 조봉준
 *  
 *  [ login method ]
 * 
 *  POST http://localhost:4000/api/auth/login  
 *  {
 *      userId: String,                        
        hashedPassword: String,
 *  }
 */
export const login = async ctx => {
    const { userId, password } = ctx.request.body;

    if(!userId || !password) {
        ctx.status = 401; // Unauthorized

        return;
    }

    try {
        const user = await User.findByUserId(userId);

        if(!user) {
            ctx.status = 401;

            return;
        }

        const valid = await user.checkPassword(password);

        if(!valid) {
            ctx.status = 401;

            return;
        }

        ctx.body = user.serialize();

        const token = user.generateToken();

        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
            httpOnly: true,
        });

    } catch (e) {
        ctx.throw(500, e);
    }
}

/*
 *  2020 - 09 - 17 (Thur)
 *  Writer: 조봉준
 *  
 *  [ check method ]
 * 
 *  GET http://localhost:4000/api/auth/check  
 */
export const check = async ctx => {
    const { user } = ctx.state;

    if(!user) {
        ctx.status = 401; // Unauthorized

        return;
    }
    console.log(ctx.body);
    ctx.body = user;
};

/*
 *  2020 - 09 - 18 (Fri)
 *  Writer: 조봉준
 *  
 *  [ logout method ]
 * 
 *  POST http://localhost:4000/api/auth/logout  
 */
export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204;
};