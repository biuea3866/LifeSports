import Router from 'koa-router';
import auth from './auth';

/**
 *  2020 - 09 - 17 (Wed)
 *  Writer: 조봉준
 *  
 *  [ Router for api ]  
 *  RestAPI
 *  Prefix: http://localhost:4000/api/
*/
const api = new Router();

api.use('/auth', auth.routes());

export default api;