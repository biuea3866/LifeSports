import Comment from '../../models/comment';
import mongoose from 'mongoose';

/*  
 *  [ REST API Method for Comment ]  
 */

/*  
 *  [ register method ]
 * 
    const CommentSchema = new Schema({
        boardId: String,
        contents: String,
        author: String,
        commentDate: String,
    });
 */
export const write = async ctx => {
    
    const { 
        userId,
        boardId,
        contents,
        author,
        commentDate,
    } = ctx.request.body;
    const comment = new Comment({
        userId,
        boardId,
        contents,
        author,
        commentDate,
    });

    try {
        await comment.save();

        ctx.body = comment;
    } catch(e) {
        ctx.throw(500, e);
    }
};

/*
 *  
 *  [ list method ]
 * 
 *  GET http://localhost:4000/api/comment/list 
 */
export const list = async ctx => {
    const { boardId } = ctx.params;

    try {
        const comments = 
        await Comment.where("boardId").equals(boardId).exec();

        ctx.body = comments;
    } catch(e) {
        ctx.throw(500, e);
    }
};

/*
 *  2020 - 10 - 02 (Fri)
 *  Writer: 조봉준
 *  
 *  [ delete method ]
 * 
 *  DELETE http://localhost:4000/api/comment/:id 
 */
export const removeComment = async ctx => {
    const { id } = ctx.params;

    try {
        await Comment.findByIdAndRemove(id).exec();

        ctx.status = 204;
    } catch(e) {
        ctx.throw(500, e);
    }
};