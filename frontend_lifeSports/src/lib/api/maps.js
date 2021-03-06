import client from './client';

/**
 *  2020 - 10 - 06 (Tues)
 *  Writer: 조봉준
 *  
 *  [ mapsAPI ]  
 *  
 *  This file is for Map's RestAPI 
 */

 /**
 *  2020 - 10 - 06 (Tues)
 *  Writer: 조봉준
 *  
 *  [ list method ]  
 *  
 *  1. GET http://localhost:4000/api/maps/
 *  2. Response map data
 */
export const list = () => client.get('http://localhost:4000/api/maps/list/')

// category List
export const categoryList = type_nm => client.get(`http://localhost:4000/api/maps/list/${type_nm}`);

// :id list
export const read = id => client.get(`http://localhost:4000/api/maps/${id}`);