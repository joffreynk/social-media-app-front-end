
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './login&register/Register';
import Login from './login&register/Login';
import Layout from './Layout';
import 

function App() {
  return (
    <Router className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile:id" element={<Profile/>} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
