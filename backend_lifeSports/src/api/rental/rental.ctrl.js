import Rental from '../../models/rental';

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


export const list = async ctx => {
    const { userId } = ctx.params;

    try {
        const rentals = await Rental.find(userId).exec();

        ctx.body = rentals;
    } catch (e) {
        ctx.throw(500, e);
    }
};
