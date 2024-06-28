import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import RegistreCompany from './Pages/Company';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/registerCompany' element={<RegistreCompany/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
