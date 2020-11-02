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
        mapName,
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
        mapName,
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
        const rentals = 
        await Rental.where("userId").equals(userId).exec();

        ctx.body = rentals;
    } catch(e) {
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    const { id } = ctx.params;

    try {
        await Rental.findByIdAndRemove(id).exec();

        ctx.status = 204;
    } catch(e) {
        ctx.throw(500, e);
    }
}