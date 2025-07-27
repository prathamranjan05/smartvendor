import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Login.css';
import brandLogo from '../components/logo.png';

function Login() {
  const { t } = useTranslation();
  const { role } = useParams();
  const navigate = useNavigate();

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');

  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      setError(t('invalidPhoneError'));
      return;
    }
    setError('');
    console.log(`Requesting OTP for phone: ${phone}`);
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length < 4) {
      setError(t('invalidOtpError'));
      return;
    }
    setError('');
    console.log(`Verifying OTP ${otp} for role ${role}`);
    
    // --- UPDATED: Navigation logic now includes the 'supplier' role ---
    if (role === 'vendor') {
      navigate('/vendor-dashboard');
    } else if (role === 'customer') {
      navigate('/customer-dashboard');
    } else if (role === 'supplier') {
      navigate('/supplier-dashboard'); // Navigate to the new supplier dashboard
    }
  };

  // --- UPDATED: Title logic to handle all three roles ---
  const getTitleKey = (currentRole) => {
    switch (currentRole) {
      case 'vendor':
        return 'vendorLogin';
      case 'customer':
        return 'customerLogin';
      case 'supplier':
        return 'supplierLogin'; // New key for suppliers
      default:
        return 'login'; // Generic fallback
    }
  };
  const title = t(getTitleKey(role));

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={brandLogo} alt="Brand Logo" className="login-logo" />
        <h2 className="text-center mb-4">{title}</h2>
        {error && <div className="alert alert-danger">{error}</div>}

        {!otpSent ? (
          <form onSubmit={handleRequestOtp}>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">{t('phoneLabel')}</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('phonePlaceholder')} // Made placeholder translatable
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">{t('sendOtpButton')}</button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>
            <p className="text-center text-muted small">
              {t('otpSentMessage', { phone: phone })}
              <button type="button" className="btn btn-link btn-sm p-1" onClick={() => setOtpSent(false)}>
                {t('changeNumberLink')}
              </button>
            </p>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">{t('otpLabel')}</label>
              <input
                type="text"
                inputMode="numeric"
                className="form-control"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder={t('otpPlaceholder')} // Made placeholder translatable
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">{t('verifyLoginButton')}</button>
          </form>
        )}

        <p className="text-center mt-3">
          {t('noAccount')} <Link to={`/register/${role}`}>{t('registerLink')}</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;