import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../actions/actionTypes";


let initialState = JSON.parse(localStorage.getItem("fav"));
if (!initialState) {
    initialState = [];
}

const favoriteReducer = (state = initialState, action) =>{
    switch (action.type) {
        
        case ADD_PERSON_TO_FAVORITE:
            // debugger
                localStorage.setItem("fav", JSON.stringify([...state, action.payload]))
                return [
                    ...state,
                    action.payload,
                ]
            
            case REMOVE_PERSON_FROM_FAVORITE:
            // debugger
            localStorage.setItem("fav", JSON.stringify([...state.filter(item => item.id !== action.payload )]))
            return [
                ...state.filter(item => item.id !== action.payload )
            ]
    
        default:
            return state
    }
}
export default favoriteReducer;