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
        email: Joi.string()
            .min(3)
            .max(20)
            .required(),
        password: Joi.string().required(),
        userName: Joi.string().required(),
        nickName: Joi.string().required(),
        socialNumberPrefix: Joi.string().required(),
        socialNumberSuffix: Joi.string().required(),
        addr: Joi.string().required(),
        phoneNumber: Joi.string().required(),
    });

    const result = schema.validate(ctx.request.body);

    if(result.error) {
        ctx.status = 400;
        ctx.body = result.error;

        return;
    }

    const { email, password, 
            userName, nickName, 
            socialNumberPrefix, socialNumberSuffix, 
            addr, phoneNumber 
        } = ctx.request.body;

    try {
        const exists = await User.findByUserId(email);

        if(exists) {
            ctx.status = 409; // Conflict

            return;
        }

        const user = new User({
            email, 
            password, 
            userName, 
            nickName,
            socialNumberPrefix,
            socialNumberSuffix,
            addr,
            phoneNumber 
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
    const { email, password } = ctx.request.body;

    if(!email || !password) {
        ctx.status = 401; // Unauthorized

        return;
    }

    try {
        const user = await User.findByUserId(email);

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

/*
 *  2020 - 09 - 26 (Sat)
 *  Writer: 조봉준
 *  
 *  [ getUserByEmail method ]
 * 
 *  POST http://localhost:4000/api/auth/{id}  
 */
