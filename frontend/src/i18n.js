import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // --- General & Navbar ---
      appName: "SMART VENDOR",
      dailyCart: "Daily Cart",
      vendorProfile: "Vendor Profile",
      supplierDirectory: "Supplier Profile",
      manageMyProfile: "Manage My Profile",
      logoutLogin: "Login / Logout",
      language: "Language",
      english: "English",
      hindi: "हिंदी",

      // --- Role Selection Page ---
      whoAreYou: "Who are you?",
      foodVendor: "Food Vendor",
      customer: "Customer",
      rawMaterialSupplier: "Raw Material Supplier",
      
      // --- Login Page ---
      vendorLogin: "Vendor Login",
      customerLogin: "Customer Login",
      supplierLogin: "Supplier Login",
      phoneLabel: "Phone Number",
      otpLabel: "One-Time Password (OTP)",
      sendOtpButton: "Send OTP",
      verifyLoginButton: "Verify & Login",
      phonePlaceholder: "Enter 10-digit number",
      otpPlaceholder: "Enter OTP",
      noAccount: "Don't have an account?",
      registerLink: "Register",
      invalidPhoneError: "Please enter a valid 10-digit phone number.",
      invalidOtpError: "Please enter a valid OTP.",
      otpSentMessage: "OTP sent to +91 {{phone}}.",
      changeNumberLink: "Change?",

      // --- Vendor & Customer Dashboards ---
      vendorDashboardTitle: "Vendor Dashboard",
      customerDashboardTitle: "Customer Dashboard",
      nearbyMandisCard: "Nearby Mandis", // Kept for Dashboard card, even if page is removed
      dailyCartCard: "Daily Cart",
      supplierProfile: "Supplier Profile",
      vendorIntro: "Manage your supplies, track market prices, and connect with suppliers all in one place.",
      customerIntro: "Explore nearby street food vendors, check out their profiles, and find your next favorite meal.",
      vendorInfoTitle: "How SMART VENDOR Helps You Grow",
      vendorBenefit1_title: "More Customers",
      vendorBenefit1_desc: "Get your stall listed online so thousands of new customers in your area can find you.",
      vendorBenefit3_title: "Easy Management",
      vendorBenefit3_desc: "Your phone is now your assistant! Manage everything easily from one place.",
      customerInfoTitle: "Discover the Best Street Food in Delhi",
      customerBenefit1_title: "Find Local Gems",
      customerBenefit1_desc: "Explore hundreds of authentic street food vendors that you won't find anywhere else.",
      customerBenefit2_title: "Know Before You Go",
      customerBenefit2_desc: "Check menus, prices, and vendor ratings before you even leave your home.",
      customerBenefit3_title: "Taste with Trust",
      customerBenefit3_desc: "Connect with trusted, popular vendors loved by your community.",
      welcomeVendor: "Namaste, Vendor!",
      welcomeCustomer: "Welcome!",
      vendorInfoPara: "Welcome to your digital storefront! List your stall online to attract thousands of new customers from all over Delhi. Use our tools to easily manage your daily cart and connect with the best raw material suppliers. We handle the technology so you can focus on what you do best: making delicious food.",
customerInfoPara: "Embark on a culinary adventure through the streets of Delhi! Discover hundreds of authentic food vendors, from famous spots to hidden gems. Check their menus, prices, and real customer ratings before you go. With SMART VENDOR, your next favorite meal is just a tap away.",


      // --- Supplier Dashboard (Form) ---
      supplierDashboardIntro: "This is your space! Create and update your profile so vendors can find you.",
      createYourProfileTitle: "Manage Your Public Profile",
      businessNameLabel: "Business Name",
      contactPersonLabel: "Contact Person",
      avatarLabel: "Your Shop/Brand Logo",
      productsSectionTitle: "Your Products",
      categoryPlaceholder: "Category Name (e.g., Vegetables)",
      itemNamePlaceholder: "Item Name (e.g., Tomato)",
      itemPricePlaceholder: "Price (e.g., ₹12/kg)",
      addItemButton: "Add Item",
      addCategoryButton: "Add Another Category",
      saveProfileButton: "Save Profile",

      // --- Vendor Profile / Supplier List Pages ---
      vendorsNearYou: "Food Vendors Near You",
      specialtyLabel: "Specialty",
      experienceLabel: "Experience",
      paymentsLabel: "Payments",
      menuLabel: "Menu",
      rating: "Rating",
      address: "Address",
      // --- (Specialty Keys for data translation) ---
      specialty_chinese: "Street Chinese",
      specialty_north_indian: "North Indian Thali",
      specialty_chaat: "Delhi Chaat & Snacks",
      specialty_korean: "Korean Street Food",
      specialty_south_indian: "South Indian Snacks",
      specialty_desserts: "Desserts & Beverages",

      vendorsNearYou: "Food Vendors Near You",
specialtyLabel: "Specialty",
experienceLabel: "Experience",
paymentsLabel: "Payments",
menuLabel: "Menu",

meetTheTeamTitle: "Meet Our Team",
teamSubtitle: "The passionate individuals behind SMART VENDOR, dedicated to connecting communities with the best local food.",
teamRole_Developer: "Developer",
getInTouchTitle: "Get In Touch",
getInTouchText: "Have questions, feedback, or want to partner with us? We'd love to hear from you!",

giveFeedbackButton: "Give Feedback",
feedbackTitle: "Share Your Feedback",
feedbackSubtitle: "Your insights help us improve. Let us know what you think!",
nameLabel: "Name (Optional)",
namePlaceholder: "Enter your name",
emailLabelOptional: "Email (Optional)",
emailPlaceholder: "Enter your email address",
feedbackTypeLabel: "Type of Feedback",
feedbackType_General: "General Comment",
feedbackType_Bug: "Bug Report",
feedbackType_Suggestion: "Suggestion",
ratingLabel: "How would you rate your experience?",
messageLabel: "Your Message",
messagePlaceholder: "Tell us more...",
submitFeedbackButton: "Submit Feedback",
feedbackSuccess: "Thank you! Your feedback has been submitted successfully.",
feedbackError: "Something went wrong. Please try again later.",


    }
  },
  hi: {
    translation: {
      // --- General & Navbar ---
      appName: "स्मार्ट वेंडर",
      dailyCart: "दैनिक कार्ट",
      vendorProfile: "विक्रेता प्रोफाइल",
      supplierDirectory: "सप्लायर प्रोफाइल",
      manageMyProfile: "मेरी प्रोफ़ाइल प्रबंधित करें",
      logoutLogin: "लॉगिन / लॉगआउट",
      language: "भाषा",
      english: "English",
      hindi: "हिंदी",
      
      // --- Role Selection Page ---
      whoAreYou: "आप कौन हैं?",
      foodVendor: "स्ट्रीट फूड विक्रेता",
      customer: "ग्राहक",
      rawMaterialSupplier: "कच्चा माल सप्लायर",

      // --- Login Page ---
      vendorLogin: "विक्रेता लॉगिन",
      customerLogin: "ग्राहक लॉगिन",
      supplierLogin: "सप्लायर लॉगिन",
      phoneLabel: "फ़ोन नंबर",
      otpLabel: "वन-टाइम पासवर्ड (ओटीपी)",
      sendOtpButton: "ओटीपी भेजें",
      verifyLoginButton: "सत्यापित करें और लॉगिन करें",
      phonePlaceholder: "10 अंकों का नंबर दर्ज करें",
      otpPlaceholder: "ओटीपी दर्ज करें",
      noAccount: "खाता नहीं है?",
      registerLink: "रजिस्टर करें",
      invalidPhoneError: "कृपया एक मान्य 10-अंकीय फ़ोन नंबर दर्ज करें।",
      invalidOtpError: "कृपया एक मान्य ओटीपी दर्ज करें।",
      otpSentMessage: "+91 {{phone}} पर ओटीपी भेजा गया।",
      changeNumberLink: "बदलें?",
      
      // --- Vendor & Customer Dashboards ---
      vendorDashboardTitle: "विक्रेता डैशबोर्ड",
      customerDashboardTitle: "ग्राहक डैशबोर्ड",
      nearbyMandisCard: "आस-पास की मंडियां",
      dailyCartCard: "दैनिक कार्ट",
      supplierProfile: "सप्लायर प्रोफाइल",
      vendorIntro: "अपनी आपूर्ति प्रबंधित करें, बाजार की कीमतों को ट्रैक करें, और सप्लायरों से एक ही स्थान पर जुड़ें।",
      customerIntro: "आस-पास के स्ट्रीट फूड विक्रेताओं को खोजें, उनकी प्रोफाइल देखें, और अपना अगला पसंदीदा भोजन पाएं।",
      vendorInfoTitle: "स्मार्ट वेंडर आपके व्यवसाय को कैसे बढ़ाता है",
      vendorBenefit1_title: "अधिक ग्राहक",
      vendorBenefit1_desc: "अपनी दुकान को ऑनलाइन लिस्ट करें ताकि आपके इलाके के हजारों नए ग्राहक आपको ढूंढ सकें।",
      vendorBenefit3_title: "आसान प्रबंधन",
      vendorBenefit3_desc: "अब आपका फ़ोन ही आपका असिस्टेंट है! सब कुछ एक ही जगह से आसानी से प्रबंधित करें।",
      customerInfoTitle: "दिल्ली में सर्वश्रेष्ठ स्ट्रीट फूड की खोज करें",
      customerBenefit1_title: "स्थानीय जायके खोजें",
      customerBenefit1_desc: "सैकड़ों प्रामाणिक स्ट्रीट फूड विक्रेताओं को खोजें जो आपको कहीं और नहीं मिलेंगे।",
      customerBenefit2_title: "जाने से पहले जानें",
      customerBenefit2_desc: "घर छोड़ने से पहले मेन्यू, कीमतें और वेंडर की रेटिंग देखें।",
      customerBenefit3_title: "विश्वास के साथ स्वाद लें",
      customerBenefit3_desc: "अपने समुदाय द्वारा पसंद किए जाने वाले भरोसेमंद और लोकप्रिय विक्रेताओं से जुड़ें।",
      welcomeVendor: "नमस्ते, विक्रेता!",
      welcomeCustomer: "आपका स्वागत है!",
      vendorInfoPara: "आपकी डिजिटल दुकान में आपका स्वागत है! दिल्ली भर से हजारों नए ग्राहकों को आकर्षित करने के लिए अपने स्टॉल को ऑनलाइन लिस्ट करें। अपनी दैनिक कार्ट को आसानी से प्रबंधित करने और सर्वोत्तम कच्चा माल सप्लायरों से जुड़ने के लिए हमारे टूल का उपयोग करें। हम तकनीक संभालते हैं ताकि आप उस पर ध्यान केंद्रित कर सकें जो आप सबसे अच्छा करते हैं: स्वादिष्ट भोजन बनाना।",
customerInfoPara: "दिल्ली की सड़कों पर एक लज़ीज़ सफ़र शुरू करें! सैकड़ों प्रामाणिक फूड वेंडरों की खोज करें, प्रसिद्ध जगहों से लेकर छिपे हुए खज़ानों तक। जाने से पहले उनके मेन्यू, कीमतें और वास्तविक ग्राहक रेटिंग देखें। स्मार्ट वेंडर के साथ, आपका अगला पसंदीदा भोजन बस एक टैप दूर है।",


      // --- Supplier Dashboard (Form) ---
      supplierDashboardIntro: "यह आपकी जगह है! अपनी प्रोफ़ाइल बनाएं और अपडेट करें ताकि विक्रेता आपको ढूंढ सकें।",
      createYourProfileTitle: "अपनी सार्वजनिक प्रोफ़ाइल प्रबंधित करें",
      businessNameLabel: "व्यवसाय का नाम",
      contactPersonLabel: "संपर्क व्यक्ति",
      avatarLabel: "आपकी दुकान/ब्रांड का लोगो",
      productsSectionTitle: "आपके उत्पाद",
      categoryPlaceholder: "श्रेणी का नाम (उदा., सब्जियां)",
      itemNamePlaceholder: "आइटम का नाम (उदा., टमाटर)",
      itemPricePlaceholder: "कीमत (उदा., ₹12/किग्रा)",
      addItemButton: "आइटम जोड़ें",
      addCategoryButton: "एक और श्रेणी जोड़ें",
      saveProfileButton: "प्रोफ़ाइल सहेजें",

      // --- Vendor Profile / Supplier List Pages ---
      vendorsNearYou: "आपके आस-पास के फूड वेंडर",
      specialtyLabel: "विशेषता",
      experienceLabel: "अनुभव",
      paymentsLabel: "भुगतान",
      menuLabel: "मेन्यू",
      rating: "रेटिंग",
      address: "पता",
      // --- (Specialty Keys for data translation) ---
      specialty_chinese: "स्ट्रीट चाइनीज",
      specialty_north_indian: "उत्तर भारतीय थाली",
      specialty_chaat: "दिल्ली चाट और स्नैक्स",
      specialty_korean: "कोरियाई स्ट्रीट फूड",
      specialty_south_indian: "दक्षिण भारतीय स्नैक्स",
      specialty_desserts: "डेसर्ट और पेय पदार्थ",

      //--vendorprofile --
      vendors_page_title: "👨‍🍳 आपके आस-पास के फ़ूड वेंडर",
      specialty: "विशेषता",
      experience: "अनुभव",
      payments: "भुगतान के तरीके",
      menu: "मेन्यू",

      // Vendor Names (Proper nouns, can be kept as is or transliterated)
      vendor_name_dolma: "डोल्मा आंटी मोमोज",
      vendor_name_pandit: "पंडित गया प्रसाद शिव चरण परांठे",
      vendor_name_prabhu: "प्रभु चाट भंडार (UPSC चाट)",
      vendor_name_seoul: "पॉप सियोल",
      vendor_name_karnataka: "कर्नाटक फ़ूड सेंटर",
      vendor_name_kuremal: "कुरेमल मोहनलाल कुल्फीवाले",

      // Vendor Specialties
      specialty_tibetan_chinese: "तिब्बती और स्ट्रीट चाइनीज",
      specialty_old_delhi_parathas: "पुरानी दिल्ली के परांठे",
      specialty_delhi_chaat: "दिल्ली चाट और स्नैक्स",
      specialty_korean_food: "कोरियन स्ट्रीट फ़ूड",
      specialty_south_indian: "दक्षिण भारतीय स्नैक्स",
      specialty_kulfi: "भरवां कुल्फी",

      // Payment Methods
      payment_cash_only: "केवल नकद",
      payment_cash: "नकद",
      payment_upi: "UPI",
      payment_cards: "कार्ड"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Explicitly set the default language to English.
    fallbackLng: "en", 
    debug: false, // Set to false for production
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;