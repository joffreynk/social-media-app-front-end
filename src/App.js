
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './login&register/Register';
import Login from './login&register/Login';

function App() {
  return (
    <Router className="">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
