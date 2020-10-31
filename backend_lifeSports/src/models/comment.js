import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
    contents: String,
    author: String,
    commentDate: Date
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;