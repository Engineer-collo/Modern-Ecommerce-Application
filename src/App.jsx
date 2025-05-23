import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ProductFeed from './components/ProductFeed';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';

import {
  showSuccessToast,
  ToastContainerWrapper,
} from './components/Toast';

function App() {
  const [cart, setCart] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false); 

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
    setCartLoaded(true);
  }, []);

  // Save cart to localStorage when updated
  useEffect(() => {
    if (cartLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, cartLoaded]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    showSuccessToast("Added to cart!");
  };

  const removeFromCart = (product) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
    showSuccessToast("Removed from cart!");
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductFeed
              addToCart={addToCart}
              showSuccessToast={showSuccessToast}
              cart={cart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact showSuccessToast={showSuccessToast} />} />
      </Routes>
      <ToastContainerWrapper />
      <Footer />
    </Router>
  );
}

export default App;
