import Router from 'koa-router';
import auth from './auth';
import maps from './maps';
import boards from './boards';
import rental from './rental';
import comment from './comment';
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
api.use('/maps', maps.routes());
api.use('/boards', boards.routes());
api.use('/rental', rental.routes());
api.use('/comment', comment.routes());

export default api;