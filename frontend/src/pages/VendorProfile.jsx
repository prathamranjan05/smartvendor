import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './VendorProfile.css';
import { FaStar, FaMapMarkerAlt, FaSearch, FaPlus } from 'react-icons/fa';

import wangAvatar from '../images/chinese.png';
import anilAvatar from '../images/northindian.png';
import priyaAvatar from '../images/chaat.png';
import seoulAvatar from '../images/korean.png';
import muruganAvatar from '../images/southindian.png';

const vendors = [
    {
        id: 1,
        name: "Dolma Aunty Momos",
        avatar: wangAvatar,
        rating: 4.7,
        location: 'Shop 39-B, Central Market, Lajpat Nagar 2, New Delhi',
        specialty: 'Tibetan & Street Chinese',
        experience: '25+ years',
        contact: '+91 98106 54249',
        products: [
            { name: 'Steam Chicken Momos', price: '₹70' },
            { name: 'Veg Fried Momos', price: '₹60' },
            { name: 'Chilli Potato', price: '₹100' },
        ],
        paymentMethods: ['Cash Only'],
    },
    {
        id: 2,
        name: 'Pandit Gaya Prasad Shiv Charan Paranthe',
        avatar: anilAvatar,
        rating: 4.5,
        location: 'Paranthe Wali Gali, Chandni Chowk, New Delhi',
        specialty: 'Old Delhi Parathas',
        experience: '100+ years',
        contact: '+91 98991 27472',
        products: [
            { name: 'Aloo Paratha', price: '₹80' },
            { name: 'Papad Paratha', price: '₹90' },
            { name: 'Rabri Paratha', price: '₹100' },
        ],
        paymentMethods: ['Cash', 'UPI'],
    },
    {
        id: 3,
        name: 'Prabhu Chaat Bhandar (UPSC Chaat)',
        avatar: priyaAvatar,
        rating: 4.9,
        location: 'Dholpur House, Shahjahan Road, UPSC, New Delhi',
        specialty: 'Delhi Chaat & Snacks',
        experience: '35+ years',
        contact: '+91 9988776655',
        products: [
            { name: 'Aloo Tikki Chaat', price: '₹70/plate' },
            { name: 'Golgappe (6 pcs)', price: '₹50/plate' },
            { name: 'Bhalla Papdi', price: '₹80/plate' },
        ],
        paymentMethods: ['Cash Only'],
    },
    {
        id: 4,
        name: 'Pop Seoul',
        avatar: seoulAvatar,
        rating: 4.8,
        location: 'M-15, M Block Market, Greater Kailash 1 (GK1), New Delhi',
        specialty: 'Korean Street Food',
        experience: '3 years',
        contact: '+91 9112233445',
        products: [
            { name: 'Tteokbokki', price: '₹250' },
            { name: 'Korean Corn Dog', price: '₹200' },
            { name: 'Kimchi Fried Rice', price: '₹280' },
        ],
        paymentMethods: ['UPI', 'Cards', 'Cash'],
    },
    {
        id: 5,
        name: "Karnataka Food Centre",
        avatar: muruganAvatar,
        rating: 4.8,
        location: 'Delhi Karnataka Sangha, Rao Tula Ram Marg, RK Puram, New Delhi',
        specialty: 'South Indian Snacks',
        experience: '15+ years',
        contact: '+91 97172 78358',
        products: [
            { name: 'Masala Dosa', price: '₹150' },
            { name: 'Idli Vada Combo', price: '₹110' },
            { name: 'Filter Coffee', price: '₹50' },
        ],
        paymentMethods: ['UPI', 'Cash'],
    },
    {
        id: 6,
        name: 'Kuremal Mohanlal Kulfiwale',
        avatar: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&q=80',
        rating: 4.9,
        location: '526, Kucha Pati Ram, Sitaram Bazar, Chandni Chowk, Delhi',
        specialty: 'Stuffed Kulfi',
        experience: '100+ years',
        contact: '+91 98105 40005',
        products: [
            { name: 'Mango Stuffed Kulfi', price: '₹200' },
            { name: 'Paan Kulfi', price: '₹120' },
            { name: 'Jamun Kulfi', price: '₹120' },
        ],
        paymentMethods: ['Cash Only'],
    },
];

const VendorProfileCard = ({ vendor }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<FaStar key={i} className={i <= rating ? 'star filled' : 'star'} />);
        }
        return stars;
    };

    return (
        <div className="profile-card">
            <div className="card-overlay">
                <div className="profile-header">
                    <img src={vendor.avatar} alt={vendor.name} className="vendor-img" />
                    <div className="header-details">
                        <h3 className="vendor-name">{vendor.name}</h3>
                        <div className="rating">
                            {renderStars(vendor.rating)}
                            <span className="rating-value">{vendor.rating.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-body">
                    <p><strong>🍴 Specialty:</strong> {vendor.specialty}</p>
                    <p><strong>⏳ Experience:</strong> {vendor.experience}</p>
                    <a
                        href={`https://www.google.com/maps?q=${encodeURIComponent(vendor.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-link"
                    >
                        <FaMapMarkerAlt /> {vendor.location}
                    </a>
                    <p><strong>💳 Payments:</strong> {vendor.paymentMethods.join(' / ')}</p>
                </div>
                <div className="vendor-products">
                    <h4>🛒 Menu</h4>
                    <ul>
                        {vendor.products.map((product, index) => (
                            <li key={index}>
                                {product.name} - <strong>{product.price}</strong>
                            </li>
                        ))}
                    </ul>

                    <a
                        href={`https://web-dev-hackathon.onrender.com/register`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="edit-profile-btn"
                    >
                        ✏️ Edit Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function VendorPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredVendors = vendors.filter(vendor =>
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container vendor-list-container" data-theme="light">
            <div className="page-header">
                <h2 className="main-title">👨‍🍳 Food Vendors Near You</h2>

                {/* ✅ Updated Add New Vendor Button*/}
                <a
                    href="https://web-dev-hackathon.onrender.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="add-vendor-btn"
                >
                    <FaPlus /> Add New Vendor
                </a>
            </div>

            <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search by name or specialty (e.g., Momos, Chaat...)"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="vendors-grid">
                {filteredVendors.map((vendor) => (
                    <VendorProfileCard key={vendor.id} vendor={vendor} />
                ))}
            </div>
        </div>
    );
}
