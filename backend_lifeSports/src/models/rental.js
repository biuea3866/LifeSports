import mongoose, { Schema } from 'mongoose';

const RentalSchema = new Schema({
    paymentType: String,
    amount: Number,
    userName: String,
    tel: String,
    email: String,
    userId: String,
    date: String,
    time: String,
    mapId: String,
    deleteYn: Boolean
});

const Rental = mongoose.model('Rental', RentalSchema);

export default Rental;