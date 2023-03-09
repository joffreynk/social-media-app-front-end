import { createContext, useState } from 'react'

export const darkModeContext = createContext();

const DarkModeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || fase);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }


    useEffect(() => {
      localStorage.setItem('darkMode', darkMode)
    }, [darkMode])
    
  return <darkModeContext.Provider value={{darkMode, toggleDarkMode}} >{children}</darkModeContext.Provider>
}

export default DarkModeContextProvider