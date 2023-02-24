
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Register from './login&register/Register';
import Login from './login&register/Login';
import Layout from './Layout';
import Home from './Home/Home';
import Profile from './Profile/Profile';

function App() {
  const currentUser  = false;
  
  const ProtectedRoutes = ({children}) => {
    if(currentUser) return <Navigate to="/login" />;
  
    return children
  }


  return (
    <Router className="">
      <Routes>
        <Route path="/" element={<ProtectedRoutes> <Layout /></ProtectedRoutes>}>
          <Route index element={<Home />} />
          <Route path="/profile/:id" element={<Profile/>} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
