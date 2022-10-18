import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import Clients_products_page from './pages/Clients_products_page';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Clients_products_page />
      <Footer></Footer>
    </div>
  );
}

export default App;
