import './App.css';
import Login from './Pages/Auth/Login';
import { Routes, Route } from 'react-router-dom'
import Registation from './Pages/Auth/Registation';
import Navbar from './Pages/Share/Navbar';
import CreateProduct from './Pages/Dashboard/Pages/CreateProduct';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registation />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route index element={<CreateProduct />} ></Route>
          <Route path='/dashboard/create-product' element={<CreateProduct />}></Route>

        </Route>

      </Routes>
    </>

  );
}

export default App;
