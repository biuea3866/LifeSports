import Router from 'koa-router';
import * as commentsCtrl from './comments.ctrl';

/*
 *  [ Router for maps ]  
 *  RestAPI
 *  Prefix: http://localhost:4000/api/comment/
 */

const comment = new Router();

comment.get('/list/:boardId', commentsCtrl.list);

comment.post('/write', commentsCtrl.write);

comment.delete('/:id', commentsCtrl.removeComment);

export default comment;