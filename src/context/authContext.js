import { createContext, useEffect, useState } from "react"

import passportImage from '../images/passport.png'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('socialMediaAppToken')) || null);

    const login = (data) => {
      setCurrentUser({...data, profilePicture: data.profilePicture || passportImage})
  }

    useEffect(() => {
        localStorage.setItem('socialMediaAppToken', JSON.stringify(currentUser))
    }, [currentUser])



    
  return <AuthContext.Provider value={{currentUser, login}}  >
    {children}
  </AuthContext.Provider>
}

export default AuthContextProvider