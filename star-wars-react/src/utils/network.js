import { HTTP, HTTPS } from "../constants/api";


/**
 * Change url from HTTP to HTTPS
 * @param {string} url 
 * @returns {string}
 */
export const changeHTTP = (url) =>{
    // const result = url ? url.replace(HTTP, HTTPS) : url;
    // return result;
    return url ? url.replace(HTTP, HTTPS) : url
}

/**
 * fetch req
 * @param {string} url 
 * @returns {Promise} - with result 
 */
export const  getApiData = async (url) => {
    try {
        // debugger
        const res = await fetch(url);
        
        if (!res.ok) {
            console.error('not fetch', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('err:',error.message);
        return false;
    }
}
// (async () => {
//     const body = await getApiData(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();    

export const makeConcurrentReq = async (url) =>{
    // debugger
 const reqArr = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json());
    }))
    return reqArr;
}
// export const makeConcurrentReq = async (url) => {
//     const res = await Promise.all(url.map(res => {
//         return fetch(res).then(res => res.json())
//     }));

//     return res;
// }