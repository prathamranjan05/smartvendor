import React, { useState } from 'react'; // <-- THIS LINE IS NOW CORRECT
import { Container, Button, Form, Spinner, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import axios from 'axios'; 
import './Feedbackpage.css';
import { FaStar } from 'react-icons/fa';

export default function FeedbackPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'General',
    rating: 0,
    message: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg({ type: '', text: '' });
    
    // --- TEMPORARY CODE FOR TESTING THE SUCCESS MESSAGE ---
    setTimeout(() => {
      console.log("Simulating a successful submission. Data that would be sent:", formData);
      setLoading(false);
      setResponseMsg({ type: 'success', text: t('feedbackSuccess') });
      setFormData({ name: '', email: '', feedbackType: 'General', rating: 0, message: '' });
    }, 2000);
  };

  return (
    <div className="feedback-container">
      <Container>
        <div className="feedback-card">
          <h1 className="feedback-title">{t('feedbackTitle')}</h1>
          <p className="feedback-subtitle">{t('feedbackSubtitle')}</p>

          {responseMsg.text && (
            <div className={`alert ${responseMsg.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
              {responseMsg.text}
            </div>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>{t('nameLabel')}</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('namePlaceholder')} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>{t('emailLabelOptional')}</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('emailPlaceholder')} />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3" controlId="formFeedbackType">
              <Form.Label>{t('feedbackTypeLabel')}</Form.Label>
              <Form.Select name="feedbackType" value={formData.feedbackType} onChange={handleChange}>
                <option value="General">{t('feedbackType_General')}</option>
                <option value="Bug">{t('feedbackType_Bug')}</option>
                <option value="Suggestion">{t('feedbackType_Suggestion')}</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRating">
              <Form.Label>{t('ratingLabel')}</Form.Label>
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <FaStar
                      key={ratingValue}
                      className="star"
                      size={30}
                      color={(ratingValue <= (hoverRating || formData.rating)) ? "#ffc107" : "#e4e5e9"}
                      onMouseEnter={() => setHoverRating(ratingValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setFormData({ ...formData, rating: formData.rating === ratingValue ? 0 : ratingValue })}
                    />
                  );
                })}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>{t('messageLabel')}</Form.Label>
              <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder={t('messagePlaceholder')} required />
            </Form.Group>
            
            <Button type="submit" className="submit-button w-100" disabled={loading}>
              {loading ? <Spinner as="span" animation="border" size="sm" /> : t('submitFeedbackButton')}
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}