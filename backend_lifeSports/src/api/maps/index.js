import Router from 'koa-router';
import * as mapsCtrl from './maps.ctrl';

/*
 *  2020 - 09 - 27 (Sun)
 *  Writer: 조봉준
 *  
 *  [ Router for maps ]  
 *  RestAPI
 *  Prefix: http://localhost:4000/api/maps/
 */

const maps = new Router();

maps.get('/list', mapsCtrl.list);

maps.post('/write', mapsCtrl.write);

maps.get('/:id', mapsCtrl.read);

maps.get('/list/:type_nm', mapsCtrl.listCategory);

export default maps;