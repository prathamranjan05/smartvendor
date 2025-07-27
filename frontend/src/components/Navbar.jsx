import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppContext } from './ThemeLanguageProvider';
import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { language, toggleLanguage } = useContext(AppContext);

  const location = useLocation();
  
  // --- UPDATED: Simplified logic for two roles ---
  const isVendor = location.pathname.includes('/vendor-dashboard');

  // Dynamic links based on the user's role
  const dashboardLink = isVendor ? "/vendor-dashboard" : "/customer-dashboard";
  const profileLink = isVendor ? "/supplierprofile" : "/vendorprofile";
  const profileTextKey = isVendor ? "supplierDirectory" : "vendorProfile";

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to={dashboardLink} className="app-name">{t("appName")}</Link>
      </div>

      <div className="nav-right">
        <button className="lang-btn" onClick={toggleLanguage}>
          {language === "en" ? t("hindi") : t("english")}
        </button>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      {isOpen && (
        <ul className="nav-dropdown">
          <li><Link to="/dailycart">{t("dailyCart")}</Link></li>
          <li><Link to={profileLink}>{t(profileTextKey)}</Link></li>
          <hr className="dropdown-divider" />
          <li><Link to="/">{t("logoutLogin")}</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;