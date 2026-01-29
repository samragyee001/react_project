
import React from 'react';
import AppRouter from './Router';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
 function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </ThemeProvider>
  )
}
export default App;