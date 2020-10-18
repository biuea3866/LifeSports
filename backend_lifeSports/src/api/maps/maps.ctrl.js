import Map from '../../models/map';

/*
 *  2020 - 09 - 27 (Sun)
 *  Writer: 조봉준
 *  
 *  [ maps.ctrl.js ]
 * 
 *  POST http://localhost:4000/api/auth/{id}  
 */


 /*
 *  2020 - 09 - 27 (Sun)
 *  Writer: 조봉준
 *  
 *  [ write method ]
 * 
 *  POST http://localhost:4000/api/maps/  
 *  {
 *      ycode: Number,
        type_nm: String,
        gu_nm: String,
        parking_lot: String,
        bigo: String,
        xcode: Number,
        tel: String,
        addr: String,
        in_out: String,
        home_page: String,
        edu_yn: String,
        nm: String,
 *  }
 */
export const write = async ctx => {
    const{ 
        ycode,
        type_nm,
        gu_nm,
        parking_lot,
        bigo,
        xcode,
        tel,
        addr,
        in_out,
        home_page,
        edu_yn,
        nm,
    } = ctx.request.body;

    const map = new Map({
        ycode,
        type_nm,
        gu_nm,
        parking_lot,
        bigo,
        xcode,
        tel,
        addr,
        in_out,
        home_page,
        edu_yn,
        nm,
    });

    try {
        await map.save();

        ctx.body = map;
    } catch(e) {
        ctx.throw(500, e);
    }
};

 /*
 *  2020 - 09 - 30 (Wed)
 *  Writer: 조봉준
 *  
 *  [ list method ]
 * 
 *  GET http://localhost:4000/api/maps/list  
 */
export const list = async ctx => {
    try {
        const maps = await Map.find().exec();

        ctx.body = maps;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const listCategory = async ctx => {
    const { type_nm } = ctx.params;

    try {
        const maps = await Map.where('type_nm').equals(type_nm).exec();

        ctx.body = maps;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const read = async ctx => {
    const { id } = ctx.params;

    try {
        const map = await Map.findById(id).exec()
        
        ctx.body = map;
    } catch(e) {
        ctx.throw(500, e);
    }
};
