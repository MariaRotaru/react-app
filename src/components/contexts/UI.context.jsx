import React, { createContext, useState, useCallback, useContext } from "react"; 
  
 
  
 export const UIContext = createContext({ 
   snackbar: {
    isOpen: false,
    hideDuration: 6000,
    onClose: () => {},
    message: "",
    setMessage: () => {

    }
   }
 }); 

 export const UIProvider = ({children}) => {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");
    const onClose = () =>{
        setOpen(false);
        setMessage("");
        setSeverity("");
    }

const showMessage = ({type, string}) => {
    setMessage(string);
    setSeverity(type);
}

    return ( 
        <UIContext.Provider 
          value={{ 
            isOpen: open,
            hideDuration: 6000,
            onClose,
            message,
          }} 
        > 
          {children} 
        </UIContext.Provider> 
      );    
 }

