import { createContext, useEffect, useState } from "react"

import passportImage from '../images/passport.png'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    const login = () => {
        setCurrentUser({
          id: 1,
          name: "Joffrey NK",
          email: "joyjoffrey@gmail.com",
          profilePicture: passportImage,
        })
    }

    console.log(currentUser);

    
  return <AuthContext.Provider value={{currentUser, login}}  >
    {children}
  </AuthContext.Provider>
}

export default AuthContextProvider