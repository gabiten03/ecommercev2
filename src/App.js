
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Hero from './components/Hero/Hero';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Cart from './components/Cart/Cart';
import { CartProvider } from '../src/CartContext';




function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/item/:id" component={ItemDetailContainer} >
            </Route>
            <Route exact path="/categorias/:id" component={ItemListContainer}>
            </Route>


            <Route path="/" exact>
              <Hero />
              <ItemListContainer />
            </Route>
            <Route path="/tienda" exact>

              <ItemListContainer />
            </Route>

            <Route path="/cart" exact>

              <Cart />
            </Route>
          </Switch>

        </Router>




        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
