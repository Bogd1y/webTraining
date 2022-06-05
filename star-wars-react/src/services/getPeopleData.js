import { GUIDE_IMG_EXTENSION, HTTP, HTTPS, SWAPI_PEOPLE, SWAPI_ROOT, URL_IMG_PERSON } from "../constants/api"

const getId = (url, category) => {
    const checkProtocol = url => {
        if (url.indexOf(HTTPS) !== -1) {
            return HTTPS;
        }
    
        return HTTP;
    }

    const protocol = checkProtocol(url);

    const id = url
        .replace(HTTP+SWAPI_ROOT+category, '')
        .replace(protocol+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id;
}
export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImage =(id) => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;