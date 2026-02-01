import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppNavbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import Bestsale from "./pages/Bestsale";
import Rings from "./pages/Rings";
import Necklaces from "./pages/Necklaces";
import Bracelets from "./pages/Bracelets";
import Earrings from "./pages/Earrings";
// import Earrings from "./pages/Earrings"; // Uncomment when ready

function AppRouter() {
  return (
    <BrowserRouter>
      {/* ✅ Navbar stays visible across all routes */}
      <AppNavbar />

      <Routes>
        {/* ✅ Redirect '/' to '/home' or render Home directly */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Bestsale" element={<Bestsale />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/Earrings" element={<Earrings />} />
        {/* <Route path="/earrings" element={<Earrings />} /> */}

        {/* ✅ Catch-all route for 404s */}
        <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
