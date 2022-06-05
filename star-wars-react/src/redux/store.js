import {combineReducers, createStore} from 'redux' 
import favoriteReducer from './reducers/favoriteReducer';
import themeChanger from './reducers/themeReducer';

const combinedReducers = combineReducers({
    favorite: favoriteReducer,
    theme: themeChanger
}) 

const store = createStore(combinedReducers)

export default store;
window.store = store;