import Router from 'koa-router';
import * as boardsCtrl from './boards.ctrl';

const boards = new Router();

boards.get('/list', boardsCtrl.list);

boards.get('/list/:userId', boardsCtrl.readList);

boards.post('/register', boardsCtrl.register);

boards.get('/:id', boardsCtrl.read);

const board = new Router();

board.delete('/', boardsCtrl.remove);

boards.use('/:id', boardsCtrl.checkObjectId, board.routes());

export default boards;