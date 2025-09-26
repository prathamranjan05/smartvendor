import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Dashboard.css';
import brandLogo from '../components/logo.png';

export default function Dashboard({ role }) {
  const { t } = useTranslation();
  
  const isVendor = role === 'vendor';
  const profileTitleKey = isVendor ? 'supplierProfile' : 'vendorProfile';
  const profileLink = isVendor ? '/supplierprofile' : '/vendorprofile';
  const introTextKey = isVendor ? 'vendorIntro' : 'customerIntro';

  // Component to display the role-specific benefits
  const InfoSection = () => {
    // Determine the correct translation key for the paragraph
    const infoParaKey = isVendor ? 'vendorInfoPara' : 'customerInfoPara';
    const infoTitleKey = isVendor ? 'vendorInfoTitle' : 'customerInfoTitle';

    return (
      <div className="info-section">
        <h3 className="info-title">{t(infoTitleKey)}</h3>
        {/* --- UPDATED: Replaced the list with a single paragraph --- */}
        <p className="info-paragraph">{t(infoParaKey)}</p>
      </div>
    );
  };

  return (
    <div className="dashboard-container-v2">
      <Container className="text-center">
        <img src={brandLogo} alt="Brand Logo" className="dashboard-logo" />
        <p className="dashboard-intro">{t(introTextKey)}</p>

        <InfoSection />

        <Row className="g-4 g-lg-5 justify-content-center">
          <Col md={6} lg={4}>
            <Link to="https://dailycart-plus-copy.onrender.com" className="dashboard-card-v2 daily-cart">
              <div className="card-title-v2">{t('dailyCartCard')}</div>
            </Link>
          </Col>
          <Col md={6} lg={4}>
            <Link to={profileLink} className="dashboard-card-v2 profile">
              <div className="card-title-v2">{t(profileTitleKey)}</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}