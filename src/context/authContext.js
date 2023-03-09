import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

const authContext = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    const login = () => {
        // login
    }

    
  return <AuthContext.Provider value={{currentUser, login}}  >
    {children}
  </AuthContext.Provider>
}

export default authContext