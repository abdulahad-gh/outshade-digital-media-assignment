import './App.css';
import Login from './Pages/Auth/Login';
import { Routes, Route } from 'react-router-dom'
import Registation from './Pages/Auth/Registation';
import Navbar from './Pages/Share/Navbar';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registation />} />

      </Routes>
    </>

  );
}

export default App;
