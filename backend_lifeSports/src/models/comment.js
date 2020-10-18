import mongoose, { Schema } from 'mongoose';

/*
 *  2020 - 10 - 02 (Fri)
 *  Writer: 조봉준
 *  
 *  [ CommentSchema Attribute ]
 *  - For BoardSchema..
 *  contents: Comment contents
 *  author: Writer
 *  commentDate: Registration date  
 */
const CommentSchema = new Schema({
    contents: String,
    author: String,
    commentDate: {
        type: Date,
        default: Date.now(),
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;