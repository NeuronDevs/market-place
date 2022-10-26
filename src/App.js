import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Clients_products_page from './pages/Clients_products_page';
import Admin_view_products from './pages/Admin_view_products';
import New_product_page from './pages/New_product_page';
import { NotFound } from './pages/NotFound';
import Sales_page from './pages/Sales_page';

function App() {
  return (

    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path='/ventas' element={<Sales_page />}></Route>
        <Route path='/nuevo_producto' element={<New_product_page />}></Route>

        <Route path='/' element={<Clients_products_page />}></Route>
        <Route path='/about' element={<div>about</div>}></Route>
        <Route path='/productos' element={<Clients_products_page />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/administrar_productos' element={<Admin_view_products />}></Route> 
      </Routes>
      <Footer></Footer>

    </BrowserRouter>

  );
}

export default App;
