import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Import your pages and components
import Navbar from "./components/Navbar";
import RolesSelection from "./pages/RolesSelection";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DailyCart from "./pages/DailyCart";
import VendorProfile from "./pages/VendorProfile";
import SupplierProfile from "./pages/SupplierProfile"; 
// --- REMOVED: SupplierDashboard is no longer needed ---

/**
 * A layout component that includes the Navbar.
 * Routes wrapped in this layout will display the Navbar.
 */
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the child route's element */}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public routes (without Navbar) --- */}
        <Route path="/" element={<RolesSelection />} />
        <Route path="/login/:role" element={<Login />} />

        {/* --- Protected routes (with Navbar) --- */}
        <Route element={<MainLayout />}>
          <Route
            path="/vendor-dashboard"
            element={<Dashboard role="vendor" />}
          />
          <Route
            path="/customer-dashboard"
            element={<Dashboard role="customer" />}
          />
          
          {/* --- REMOVED: The route for the supplier's dashboard --- */}

          <Route path="/dailycart" element={<DailyCart />} />
          <Route path="/vendorprofile" element={<VendorProfile />} />
          <Route path="/supplierprofile" element={<SupplierProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;