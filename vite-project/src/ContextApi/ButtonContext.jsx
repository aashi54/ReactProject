import React, {useState, createContext} from 'react';
const ButtonContext = createContext();

const ButtonContextProvider = ({children}) => {
    const [buttonText, setButtonText] = useState('Sign up');

    return (
        <ButtonContext.Provider value={{buttonText,setButtonText}}>
            {children}
        </ButtonContext.Provider>
    )
}

export {ButtonContext, ButtonContextProvider};