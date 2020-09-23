import client from './client';

/**
 *  2020 - 09 - 21 (Mon)
 *  Writer: 조봉준
 *  
 *  [ authAPI ]  
 *  
 *  This file is for Auth's RestAPI 
 */

 /**
 *  2020 - 09 - 21 (Mon)
 *  Writer: 조봉준
 *  
 *  [ login method ]  
 *  
 *  @params: email, password
 *  1. POST http://localhost:4000/api/auth/login/
 *  2. Response user data
 */
export const login = ({ email, password }) => 
    client.post('http://localhost:4000/api/auth/login/', { email, password })

     /**
 *  2020 - 09 - 21 (Mon)
 *  Writer: 조봉준
 *  
 *  [ login method ]  
 *  
 *  @params: email, password
 *  1. POST http://localhost:4000/api/auth/register/
 *  2. Save user data in LifeSports Database
 */
export const register = ({ email, password }) =>
    client.post('http://localhost:4000/api/auth/register', { email, password });

export const check = () => client.get('http://localhost:4000/api/auth/check');