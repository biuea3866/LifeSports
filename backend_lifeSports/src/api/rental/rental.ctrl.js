import Rental from '../../models/rental';
import mongoose from 'mongoose';

export const write = async ctx => {
    const { 
        paymentType,
        amount,
        userName,
        tel,
        email,
        userId,
        date,
        time,
        mapId,
        deleteYn
    } = ctx.request.body;

    const rental = new Rental({
        paymentType,
        amount,
        userName,
        tel,
        email,
        userId,
        date,
        time,
        mapId,
        deleteYn
    });

    try {
        await rental.save();

        ctx.body = rental;
    } catch(e) {
        ctx.throw(500, e);
    }
};

export const read = async ctx => {
    const { userId } = ctx.params;

    try {
        const rentals = await Map.where('userId').equals(userId).exec();

        ctx.body = rentals;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const list = async ctx => {
    try {
        const rental = await Rental.find().exec();

        ctx.body = rental;
    } catch (e) {
        ctx.throw(500, e);
    }
};