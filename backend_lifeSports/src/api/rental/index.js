import Router from 'koa-router';
import * as rentalCtrl from './rental.ctrl';

/*
 *  2020 - 09 - 27 (Sun)
 *  Writer: 조봉준
 *  
 *  [ Router for maps ]  
 *  RestAPI
 *  Prefix: http://localhost:4000/api/maps/
 */

const rental = new Router();

rental.get('/list/:userId', rentalCtrl.list);

rental.post('/write', rentalCtrl.write);

rental.get('/:id', rentalCtrl.read);

export default rental;