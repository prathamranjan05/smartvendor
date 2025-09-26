import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contactus.css'; // We will create this stylesheet next
import { Link } from 'react-router-dom';

// --- TEAM MEMBER DATA ---
// NOTE: I've added placeholder avatars and roles. Replace them with your actual details.
const teamMembers = [
    {
        name: 'Ishani Jindal',
        role: 'teamRole_Developer', // Using a key for translation
        avatarUrl: 'https://placehold.co/200x200/FF7B00/FFFFFF?text=IJ',
        githubUrl: 'https://github.com/ishanijdev',
        linkedinUrl: 'https://www.linkedin.com/in/ishani-jindal-37b3b9325/',
    },
    {
        name: 'Aditi Mehta',
        role: 'teamRole_Developer',
        avatarUrl: 'https://placehold.co/200x200/00A86B/FFFFFF?text=AM',
        githubUrl: 'https://github.com/Dynamic-ctrl',
        linkedinUrl: 'https://www.linkedin.com/in/aditi-mehta/',
        
    },
    {
        name: 'Pratham Ranjan',
        role: 'teamRole_Developer',
        avatarUrl: 'https://placehold.co/200x200/007BFF/FFFFFF?text=PR',
        githubUrl: 'https://github.com/prathamranjan05',
        linkedinUrl: 'https://www.linkedin.com/in/pratham-ranjan/',
    },
    {
        name: 'Mehar Bhanwra',
        role: 'teamRole_Developer',
        avatarUrl: 'https://placehold.co/200x200/C0392B/FFFFFF?text=MB',
        githubUrl: 'https://github.com/meharbhanwra',
        linkedinUrl: 'https://www.linkedin.com/in/mehar-bhanwra-a0b369215',
    },
];

const TeamMemberCard = ({ member }) => {
    const { t } = useTranslation();
    return (
        <Card className="team-member-card">
            <div className="card-img-container">
                <Image src={member.avatarUrl} roundedCircle className="member-avatar" />
            </div>
            <Card.Body className="text-center">
                <Card.Title className="member-name">{member.name}</Card.Title>
                <Card.Text className="member-role">{t(member.role)}</Card.Text>
                <div className="member-socials">
                    <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                        <FaGithub />
                    </a>
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                        <FaLinkedin />
                    </a>
                </div>
            </Card.Body>
        </Card>
    );
};

export default function Contactus() {
    const { t } = useTranslation();
    return (
        <div className="contact-us-container">
            <Container>
                <div className="page-intro text-center">
                    <h1 className="page-title">{t('meetTheTeamTitle')}</h1>
                    <p className="page-subtitle">{t('teamSubtitle')}</p>
                </div>
                <Row className="justify-content-center">
                    {teamMembers.map((member, index) => (
                        <Col lg={3} md={6} key={index} className="mb-4 d-flex align-items-stretch">
                            <TeamMemberCard member={member} />
                        </Col>
                    ))}
                </Row>

                {/* --- NEW "Get in Touch" Section --- */}
                <div className="get-in-touch-section text-center">
                <h2 className="section-title">{t('getInTouchTitle')}</h2>
                   <p className="section-text">{t('getInTouchText')}</p>
                {/* --- UPDATED: This is now a Link to the feedback page --- */}
                   <Link to="/feedback" className="contact-email-link">
                       {t('giveFeedbackButton')}
              </Link>
        </div>
            </Container>
        </div>
    );
}