
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Register from './login&register/Register';
import Login from './login&register/Login';
import Layout from './Layout';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import { useContext } from 'react';
import { darkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {
  const {currentUser}  = useContext(AuthContext);
  const {darkMode} = useContext(darkModeContext)
  console.log(darkMode);
  
  const ProtectedRoutes = ({children}) => {
    if(currentUser) return <Navigate to="/login" />;
  
    return children
  }


  return (
    <div className={`theme-${darkMode ? 'dark':'light'}`} >
      <Router >
        <Routes>
          <Route path="/" element={<ProtectedRoutes> <Layout /></ProtectedRoutes>}>
            <Route index element={<Home />} />
            <Route path="/profile/:id" element={<Profile/>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
