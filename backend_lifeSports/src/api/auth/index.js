import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

/**
 *  2020 - 09 - 16 (Wed)
 *  Writer: 조봉준
 *  
 *  [ Router for auth ]  
 *  RestAPI
 *  Prefix: http://localhost:4000/api/auth/
*/

const auth = new Router();

auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);
auth.get('/:id', authCtrl.readUser);

export default auth;