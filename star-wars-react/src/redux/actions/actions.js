import { ADD_PERSON_TO_FAVORITE, CHANGE_TO_DARK, CHANGE_TO_DEFAULT, CHANGE_TO_LIGHT, REMOVE_PERSON_FROM_FAVORITE } from "./actionTypes"



export const setPersonToFavorites = (personD) =>({
    type: ADD_PERSON_TO_FAVORITE,
    payload: personD
})
export const removePersonFromFavorites = (id) =>({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: id
})

export const changeThemeToDark =()=>({
    type: CHANGE_TO_DARK
})
export const changeThemeToDefault =()=>({
    type: CHANGE_TO_DEFAULT
})
export const changeThemeToLight =()=>({
    type: CHANGE_TO_LIGHT
})