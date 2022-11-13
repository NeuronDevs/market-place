import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';


import Clients_products_page from './pages/Clients_products_page';
import Cart_products_page from './pages/Cart_products_page';
import Order_products_page from './pages/Order_products_page';
import Admin_view_products from './pages/Admin_view_products';
import New_product_page from './pages/New_product_page';
import { NotFound } from './pages/NotFound';
import Sales_page from './pages/Sales_page';
import { useEffect, useState } from 'react';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { HeaderClient } from './components/client/HeaderClient';
import { HeaderAdmin } from './components/admin/HeaderAdmin';
import { AuthHeader } from './components/auth/AuthHeader';

function App() {
  const [auth, setAuth] = useState(true);
  const [role, setRole] = useState("user");


  useEffect(() => {

    const func = () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:4000/api/me',
        withCredentials: true

      };

      Axios.request(options).then(function (response) {
        console.log(response);
        if (response.data.success) {
          setAuth(true);
          setRole(response.data.user.role); //comentar esto
          // setRole("admin")
        }
      }).catch(function (error) {
        Swal.fire(
          'Error!',
          error.response.data.message.msj,
          'error'
        )
        setAuth(false)
      });

    }
    func();


  }, [])


  return (
    <BrowserRouter>
      {
        auth ?
          (role === "user" ?
            (<>
              <HeaderClient></HeaderClient >
              <Routes>
                <Route path='/' element={<Clients_products_page />}></Route>
                <Route path='/carrito' element={<Cart_products_page />}></Route>
                <Route path='/orden' element={<Order_products_page />}></Route>
                
                <Route path='/productos' element={<Clients_products_page />}></Route>
                <Route path='*' element={<NotFound />}></Route>
              </Routes>
            </>) : (
              <>
                <HeaderAdmin></HeaderAdmin >
                <Routes>
                  <Route path='/' element={<Dashboard />}></Route>
                  <Route path='/ventas' element={<Sales_page />}></Route>
                  <Route path='/nuevo_producto' element={<New_product_page />}></Route>
                  <Route path='/administrar_productos' element={<Admin_view_products />}></Route>
                  <Route path='*' element={<NotFound />}></Route>
                </Routes>
              </>
            )) :
          (<>
            <AuthHeader></AuthHeader>
            <Routes >
              <Route path='/login' element={<Login setRole={setRole} setAuth={setAuth} />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='*' element={<Login setRole={setRole} setAuth={setAuth} />}></Route>
            </Routes>
          </>)

      }
    </BrowserRouter >


  );
}

export default App;
