import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Clients_products_page from './pages/Clients_products_page';
import { NotFound } from './pages/NotFound';
function App() {
  return (

    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Clients_products_page />}></Route>
        <Route path='/about' element={<div>about</div>}></Route>
        <Route path='/productos' element={<Clients_products_page />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>




    </BrowserRouter>

  );
}

export default App;
