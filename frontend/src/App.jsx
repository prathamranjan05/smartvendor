import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Import your pages and components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RolesSelection from "./pages/RolesSelection";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DailyCart from "./pages/DailyCart";
import VendorProfile from "./pages/VendorProfile";
import SupplierProfile from "./pages/SupplierProfile"; 
import Contactus from "./pages/Contactus"; 
import FeedbackPage from "./pages/Feedbackpage"; // <-- 1. IMPORT THE NEW PAGE

/**
 * A layout component that includes the Navbar and Footer.
 */
const MainLayout = () => {
  return (
    <>
        <Navbar />
        <main className="main-content">
              <Outlet />
        </main>
        <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public routes (without Navbar/Footer) --- */}
        <Route path="/" element={<RolesSelection />} />
        <Route path="/login/:role" element={<Login />} />

        {/* --- Protected routes (with Navbar/Footer) --- */}
        <Route element={<MainLayout />}>
          <Route
            path="/vendor-dashboard"
            element={<Dashboard role="vendor" />}
          />
          <Route
            path="/customer-dashboard"
            element={<Dashboard role="customer" />}
          />
          
          <Route path="/dailycart" element={<DailyCart />} />
          <Route path="/vendorprofile" element={<VendorProfile />} />
          <Route path="/supplierprofile" element={<SupplierProfile />} />
          {/* Corrected path to lowercase for consistency */}
          <Route path="/contactus" element={<Contactus />} /> 
          {/* <-- 2. ADD THE NEW ROUTE FOR THE FEEDBACK PAGE --> */}
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;