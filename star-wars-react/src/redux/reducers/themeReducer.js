import { CHANGE_TO_DARK, CHANGE_TO_DEFAULT, CHANGE_TO_LIGHT } from "../actions/actionTypes";


const themeChanger = (state = 'defaultTheme', action) =>{
    switch (action.type) {
        case CHANGE_TO_DARK:
            document.body.style.background = 'black'
            return 'darkTheme'
            
            case CHANGE_TO_LIGHT:
            document.body.style.background = '#121212'
            return 'lightTheme'
            
            case CHANGE_TO_DEFAULT:
            document.body.style.backgroundImage  = ""
            console.log(document.body.style.backgroundImage);
            return  'defaultTheme'  
        default:
        return state
    }
}

export default themeChanger;