import mongoose, { Schema } from 'mongoose';

/*
 *  2020 - 10 - 02 (Fri)
 *  Writer: 조봉준
 *  
 *  Schema Structure
 * 
 *  BoardSchema
 *  |
 *  |-> boardTitle: String
 *  |-> boardContent: String
 *  |-> author: String
 *  |-> boardDate: Date
 *  |-> comment: [CommentSchema] --> contents: String
 *  |                            |-> author: String
 *  |                            |-> commentDate: Date
 *  |   
 *  |-> money: [MoneySchema]     --> moeny: Number
 *  |                            |-> sender: [SenderSchema] --> money: Number
 *  |                                                       |-> senderNickName: String
 *  |                                                       |-> sender_Id: String
 *  |-> rental: [RentalSchema] --> locationX: Number,
 *  |                          |-> locationY: Number,
 *  |                          |-> locationName: String,
 *  |                          |-> locationAddress: String,
 *  |                          |-> sportsCategory: String,
 *  |                          |-> rentalStartTime: Date,
 *  |                          |-> rentalFinishTime: Date
 *  |-> closingDate: Date
 *  |-> closingYn: Boolean
 * 
 *  [ CommentSchema Attribute ]
 *  - For BoardSchema..
 * 
 *  contents: Comment contents
 *  author: Writer
 *  commentDate: Registration date  
 *  ------------------------------------------------------------------------------------
 * 
 *  [ SenderSchema Attribute ]
 *  - For MoneySchema..
 *  
 *  money: money that is send by user
 *  userNickName: user's nickName
 *  user_Id: user's objectId  
 *  ------------------------------------------------------------------------------------
 * 
 *  [ MoneySchema Attribute ]
 *  - For BoardSchema..
 * 
 *  money: senders's money
 *  sender: senders who send money
 *  ------------------------------------------------------------------------------------
 *
 *  [ RentalSchema Attribute ]
 *  - For BoardScheam..
 * 
 *  locationX: latitude
 *  locationY: longitude
 *  locationName: Rental Location's Name
 *  locationAddress: Rental Location's Address
 *  sportsCategory: Types of exercise for the search of the gym's
 *  rentalStartDate: Date for rental Start Time
 *  rentalFinishDate: Date for rental Finish Time
 *  ------------------------------------------------------------------------------------
 *
 *  [ BoardSchema Attribute ]  
 *  
 *  boardTitle: board's title
 *  boardContent: board's contents
 *  author: Writer
 *  boardDate: Post registration date 
 *  comment: Schema for comment 
 *  money: function to save money
 *  closingDate: Date for board closed
 *  closingYn: if true, delete board and send information to user who sends to money
 *             if false, live board
 * 
 */
const CommentSchema = new Schema({
    contents: String,
    author: String,
    commentDate: {
        type: Date,
        default: Date.now(),
    }
});

const SenderSchema = new Schema({
    money: {
        type: Number,
        default: 0
    },
    senderNickName: String,
    sender_Id: String,
});

const MoneySchema = new Schema({
    money: {
        type: Number,
        default: 0,
    },
    sender: [SenderSchema]
});

const BoardSchema = new Schema({
    boardType: String,
    peopleRestrict: String,
    boardTitle: String,
    boardContent: String,
    userId: String,
    writer: String,
    boardDate: String,
    comment: [CommentSchema],
    money: [MoneySchema],
    mapId: String,
    date: String,
    time: String,
    closingYn: Boolean
});

const Board = mongoose.model('Board', BoardSchema);

export default Board;