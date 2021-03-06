import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
    userId: String,
    boardId: String,
    contents: String,
    author: String,
    commentDate: String,
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;