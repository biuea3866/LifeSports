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

maps.get('/', mapsCtrl.list);

maps.post('/', mapsCtrl.write);

maps.get('/:id', mapsCtrl.read);

export default maps;