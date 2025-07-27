import React, { useState } from 'react'; // <-- 1. IMPORT useState
import { Container, Row, Col, Card, Accordion, Image } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt, FaCheckCircle, FaSearch } from 'react-icons/fa'; // <-- 2. IMPORT FaSearch
import './SupplierProfile.css';
import spice from '../images/spices.png';
import grain from '../images/grain.png';
import fish from '../images/fish.png';


// --- Data remains the same ---
const suppliersData = [
    {
        id: 'supp_123',
        name: 'Azadpur Fruit & Vegetable Market',
        address: 'Azadpur Mandi, Azadpur, New Delhi, Delhi 110033',
        avatarUrl:  'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80',
        rating: 4.7,
        isVerified: true,
        products: {
            'Vegetables': [ { name: 'Tomato', price: '₹12/kg' }, { name: 'Onion', price: '₹18/kg' } ],
            'Fruits': [ { name: 'Apple', price: '₹80/kg' }, { name: 'Banana', price: '₹40/dozen' } ],
        }
    },
    {
        id: 'supp_456',
        name: 'Khari Baoli Spice Market',
        address: 'Khari Baoli, Chandni Chowk, Old Delhi, Delhi 110006',
        avatarUrl: spice,
        rating: 4.9,
        isVerified: true,
        products: {
            'Spices': [ { name: 'Turmeric Powder', price: '₹200/kg' }, { name: 'Red Chilli Powder', price: '₹250/kg' } ],
            'Dry Fruits': [ { name: 'Almonds', price: '₹600/kg' }, { name: 'Cashews', price: '₹750/kg' } ],
        }
    },
    {
        id: 'supp_223',
        name: 'Naya Bazaar Grain Market',
        address: 'Naya Bazaar, Chandni Chowk, Old Delhi, Delhi 110006',
        avatarUrl: grain,
        rating: 4.6,
        isVerified: true,
        products: {
            'Grains': [ { name: 'Basmati Rice', price: '₹65/kg' }, { name: 'Whole Wheat', price: '₹25/kg' } ],
            'Pulses (Dal)': [ { name: 'Toor Dal', price: '₹110/kg' }, { name: 'Moong Dal', price: '₹95/kg' } ],
        }
    },
    {
        id: 'supp_789',
        name: 'Ghazipur Flower Mandi',
        address: 'Ghazipur Flower Market, Ghazipur, New Delhi, Delhi 110096',
        avatarUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=500&q=80',
        rating: 4.8,
        isVerified: true,
        products: {
            'Indian Flowers': [ { name: 'Marigold', price: '₹50/kg' }, { name: 'Rose', price: '₹80/100 pcs' } ],
            'Decorative Greens': [ { name: 'Ferns', price: '₹30/bunch' }, { name: 'Eucalyptus', price: '₹60/bunch' } ],
        }
    },
    {
        id: 'supp_101',
        name: 'Mother Dairy Plant - Patparganj',
        address: 'Patparganj Industrial Area, New Delhi, Delhi 110092',
        avatarUrl: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=500&q=80',
        rating: 4.6,
        isVerified: true,
        products: {
            'Milk Products': [ { name: 'Full Cream Milk', price: '₹60/L' }, { name: 'Toned Milk', price: '₹50/L' } ],
            'Value-Added': [ { name: 'Paneer', price: '₹320/kg' }, { name: 'Yogurt (Curd)', price: '₹70/kg' } ],
        }
    },
    {
        id: 'supp_112',
        name: 'Ghazipur Fish & Poultry Market',
        address: 'Murga Mandi, Ghazipur, New Delhi, Delhi 110096',
        avatarUrl: fish,
        rating: 4.4,
        isVerified: false,
        products: {
            'Poultry': [ { name: 'Chicken (Whole)', price: '₹180/kg' }, { name: 'Chicken Breast', price: '₹250/kg' } ],
            'Eggs': [ { name: 'White Eggs', price: '₹120/tray' } ],
        }
    }
];

// --- Helper function to render star ratings ---
const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) stars.push(<FaStar key={i} />);
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) stars.push(<FaStarHalfAlt key={i} />);
        else stars.push(<FaRegStar key={i} />);
    }
    return stars;
};

// --- The Reusable Card Component (no changes here) ---
const SupplierProfileCard = ({ supplier, index }) => {
    return (
        <Card className="supplier-card h-100" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="card-header-bg"></div>
            <div className="avatar-container">
                <Image src={supplier.avatarUrl} className="supplier-avatar" />
            </div>
            <Card.Body className="d-flex flex-column text-center">
                <div className="mt-4 flex-grow-1">
                    <h5 className="supplier-name">
                        {supplier.name}
                        {supplier.isVerified && <FaCheckCircle className="verified-badge" title="Verified Supplier" />}
                    </h5>
                    <div className="supplier-rating">
                        {renderStars(supplier.rating)}
                        <span className="rating-text">{supplier.rating}</span>
                    </div>
                    <div className="contact-info mt-3">
                        <a href={`https://www.google.com/maps?q=${encodeURIComponent(supplier.address)}`} target="_blank" rel="noopener noreferrer" className="address-link">
                            <FaMapMarkerAlt /> {supplier.address}
                        </a>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>View Supplied Items</Accordion.Header>
                        <Accordion.Body>
                            {Object.keys(supplier.products).map((category) => (
                                <div key={category} className="category-section">
                                    <strong>{category}</strong>
                                    <ul className="product-list">
                                        {supplier.products[category].map((item) => (
                                            <li key={item.name} className="product-item">
                                                <span>{item.name}</span>
                                                <span className="product-price">{item.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Footer>
        </Card>
    );
};

// --- Main exported page component ---
export default function SupplierPage() {
    // --- 3. ADD STATE FOR SEARCH TERM ---
    const [searchTerm, setSearchTerm] = useState('');

    // --- 4. FILTER SUPPLIERS BASED ON SEARCH TERM ---
    const filteredSuppliers = suppliersData.filter(supplier => {
        const term = searchTerm.toLowerCase();
        // Check supplier name
        if (supplier.name.toLowerCase().includes(term)) {
            return true;
        }
        // Check product categories and item names
        for (const category in supplier.products) {
            if (category.toLowerCase().includes(term)) {
                return true;
            }
            for (const item of supplier.products[category]) {
                if (item.name.toLowerCase().includes(term)) {
                    return true;
                }
            }
        }
        return false;
    });

    return (
        <div className="supplier-profile-container">
            <Container>
                <h2 className="main-title text-center mb-5">Suppliers Near You</h2>

                {/* --- 5. ADD THE SEARCH BAR --- */}
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by supplier or product (e.g., Spices, Fruits...)"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* --- 6. MAP OVER THE FILTERED LIST --- */}
                <Row>
                    {filteredSuppliers.map((supplier, index) => (
                        <Col md={6} lg={4} key={supplier.id} className="mb-4 d-flex align-items-stretch">
                            <SupplierProfileCard supplier={supplier} index={index} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}