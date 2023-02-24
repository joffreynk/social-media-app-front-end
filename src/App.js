
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Register from './login&register/Register';
import Login from './login&register/Login';
import Layout from './Layout';
import Home from './Home/Home';
import Profile from './Profile/Profile';

function App() {
  const user  = false;

  const protectedRoutes = ({children}) => {
    if(!user) return <Navigate to="/login" />;

    return children
  }
  return (
    <Router className="">
      <Routes>
        <Route path="/" element={<protectedRoutes> <Layout /></protectedRoutes>}>
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
