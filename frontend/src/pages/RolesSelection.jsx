import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './RolesSelection.css'; 
import brandLogo from '../components/logo.png'; 

function RolesSelection() {
  const { t } = useTranslation();

  return (
    <div className="role-selection-container">
      <div className="role-card">
        <img src={brandLogo} alt="Brand Logo" className="brand-logo" />
        
        <h2>{t('whoAreYou')}</h2>
        
        <div className="role-buttons">
          <Link to="/login/vendor" className="btn btn-primary btn-lg">
            {t('foodVendor')}
          </Link>

          {/* --- The Supplier button has been removed --- */}

          <Link to="/login/customer" className="btn btn-secondary btn-lg">
            {t('customer')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RolesSelection;