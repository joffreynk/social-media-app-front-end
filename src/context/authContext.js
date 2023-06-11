import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('socialMediaAppToken')) || null);

    const login = (data) => {
      setCurrentUser(data)
  }

    useEffect(() => {
      if (currentUser && currentUser.token) localStorage.setItem('socialMediaAppToken', JSON.stringify(currentUser))
    }, [currentUser])
    
  return <AuthContext.Provider value={{currentUser, login}}  >
    {children}
  </AuthContext.Provider>
}

export default AuthContextProvider