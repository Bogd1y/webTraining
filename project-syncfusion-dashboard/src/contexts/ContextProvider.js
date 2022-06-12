import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}




export const ContextProvider = ({children}) =>{

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState()
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const [customColors, setCustomColors] = useState('')
    // const [customName, setCustomName] = useState('')

    // console.log(customColors);

    


    const setMode =(e)=>{
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);

        // setThemeSettings(false)  
    }

    const setColor =(color)=>{
        setCurrentColor(color);

        localStorage.setItem('themeColor', color);

        setThemeSettings(false)
    }


    
    const handleClick =(clicked)=>{
        setIsClicked({...initialState, [clicked]: true })
    }
    const handleOff =(clicked)=>{
        setIsClicked({...initialState, [clicked]: false })
    }
// debugger
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,handleOff,
                screenSize, setScreenSize,
                setColor, setMode,
                currentColor, setCurrentColor,
                currentMode, setCurrentMode,
                themeSettings, setThemeSettings,
                setCustomColors, customColors
            }}
        >
            {children}
        </StateContext.Provider>
    )
}




export const useStateContext = () => useContext(StateContext) 