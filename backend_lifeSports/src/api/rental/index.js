import Router from 'koa-router';
import * as rentalCtrl from './rental.ctrl';

/*
 *  2020 - 09 - 27 (Sun)
 *  Writer: 조봉준
 *  
 *  [ Router for rental ]  
 *  RestAPI
 *  Prefix: http://localhost:4000/api/rental/
 */

const rental = new Router();

rental.post('/write', rentalCtrl.write);

rental.get('/list/:userId', rentalCtrl.list);

rental.delete('/:id', rentalCtrl.remove);

export default rental;