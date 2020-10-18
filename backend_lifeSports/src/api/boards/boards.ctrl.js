import Board from '../../models/board';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

/*
 *  2020 - 10 - 02 (Fri)
 *  Writer: 조봉준
 *  
 *  [ REST API Method for Board ]  
 */

 const { ObjectId } = mongoose.Types;

 export const checkObjectId = (ctx, next) => {
    const { id } = ctx.parmas;

    if(!ObjectId.isValid(id)) {
        ctx.status = 400;

        return;
    }

    return next();
 };

/*
 *  2020 - 10 - 02 (Fri)
 *  Writer: 조봉준
 *  
 *  [ register method ]
 * 
 *  POST http://localhost:4000/api/boards/register  
 *  {
 *      boardTitle: String,
        boardContent: String,
        author: String,
        boardDate: {
            type: Date,
            default: Date.now(),
        },
        comment: [CommentSchema],
        money: [MoneySchema],
        closingDate: Date,
        closingYn: {
            type: Boolean,
            default: false,
        },
 *  }
 */
export const register = async ctx => {
    const schema = Joi.object().keys({
        boardTitle: Joi.string().required(),
        boardContent: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);

    if(result.error) {
        ctx.status = 400;
        
        ctx.body = result.error;

        return;
    }
    
    const { 
        boardTitle,
        boardContent,
        author,
        boardDate,
        comment,
        money,
        closingDate,
        closingYn,
    } = ctx.request.body;
    const board = new Board({
        boardTitle,
        boardContent,
        author,
        boardDate,
        comment,
        money,
        closingDate,
        closingYn,
    });

    try {
        await board.save();

        ctx.body = board;
    } catch(e) {
        ctx.throw(500, e);
    }
};

/*
 *  2020 - 10 - 02 (Fri)
 *  Writer: 조봉준
 *  
 *  [ list method ]
 * 
 *  GET http://localhost:4000/api/boards/list 
 */
export const list = async ctx => {
    try {
        const boards = await Board.find().exec();

        ctx.body = boards;
    } catch(e) {
        ctx.throw(500, e);
    }
};

/*
 *  2020 - 10 - 02 (Fri)
 *  Writer: 조봉준
 *  
 *  [ read method ]
 * 
 *  GET http://localhost:4000/api/boards/:id 
 */
export const read = async ctx => {
    const { id } = ctx.params;

    try {
        const board = await Board.findById(id).exec();

        if(!board) {
            ctx.status = 404;

            return;
        }

        ctx.body = board;
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
 *  DELETE http://localhost:4000/api/boards/:id 
 */
export const remove = async ctx => {
    const { id } = ctx.params;

    try {
        await Board.findByIdAndRemove(id).exec();

        ctx.status = 204;
    } catch(e) {
        ctx.throw(500, e);
    }
};