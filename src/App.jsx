import './App.css';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import CartProvider from './context/CartContext';

export const CartContext=React.createContext([])

function App() {
  return (
  <>
  
    <BrowserRouter>
    <Navbar/>
    
    <CartProvider>
    <Routes>
    
      <Route path='/'element={<ItemListContainer/>} />
      <Route path='/Category/:categoriaId'element={<ItemListContainer/>} />
      <Route path='/Cart'element={<Cart/> } />
      <Route path='/Detalle/:detalleId'element={<ItemDetailContainer/> } />
      
    </Routes>
    </CartProvider>
    
     
    


    </BrowserRouter>
  </>
    
  );
}

export default App;
