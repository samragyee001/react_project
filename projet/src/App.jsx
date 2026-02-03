// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import About from "./components/About";
import "./styles/global.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar />

      {page === "home" && (
        <>
          <Hero />
          <Features />
          <Categories setPage={setPage} />
          <About />
        </>
      )}

      {page === "shop" && (
        <div>
          <h1>Shop Page</h1>
          <button onClick={() => setPage("categories")}>Back</button>
        </div>
      )}

      {page === "rings" && (
        <div>
          <h1>Rings Page</h1>
          <button onClick={() => setPage("categories")}>Back</button>
        </div>
      )}

      {page === "bracelets" && (
        <div>
          <h1>Bracelets Page</h1>
          <button onClick={() => setPage("categories")}>Back</button>
        </div>
      )}

      {page === "necklace" && (
        <div>
          <h1>Necklace Page</h1>
          <button onClick={() => setPage("categories")}>Back</button>
        </div>
      )}
    </>
  );
}

export default App;




