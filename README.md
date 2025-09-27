# SmartVendor: Street Food Vendor Hub

> A full-stack platform built during the TuteDev 48-hour web development hackathon to empower local street food vendors by providing them with a digital storefront and supply chain management tools.

## 🚀 Live Demo

You can view the live deployed version of our project here:

**[https://smart-vendor.netlify.app/](https://smart-vendor.netlify.app/)**

(NOTE: Use any 10-digit phone number and any 4-digit otp at the login page)
---

## 🌟 About The Project

**SmartVendor** is a digital solution designed to help street food vendors in Delhi manage their business more efficiently. The platform allows vendors to list their stalls online, attract new customers, manage their daily raw material needs ("Daily Cart"), and connect directly with suppliers to track market prices. Our goal is to handle the technology so vendors can focus on what they do best: making delicious food.

This project was built from scratch in 48 hours with a focus on creating a dynamic, user-friendly interface and a robust back-end to handle all the necessary business logic.

---

## ✨ Key Features

* **Vendor Registration & Profile:** Vendors can sign up and create a digital profile for their stall.
* **Digital Menu Management:** Easily create and update menus that customers can view online.
* **Location Mapping:** Helps customers find nearby street food stalls.
* **Customer Reviews & Ratings:** Build credibility with a transparent review system.
* **Supplier Connection:** A dedicated portal for vendors to connect with raw material suppliers.
* **Supply Management:** Track daily supplies and manage inventory with the "Daily Cart" feature.
* **User Authentication:** Role-based sign-up/login using Firebase Phone Verification.
* **Dynamic Updates:** API endpoints for continuous, background updating of user and vendor locations.


---

## 💻 Tech Stack

The application is built with a modern tech stack to ensure performance and scalability.

* **Front-End:**
    * React
    * JavaScript
    * Bootstrap
    * HTML5 & CSS3
* **Back-End:**
    * Flask
    * Python
    * SQLAlchemy (for SQLite database)
* **Security:**
    * Firebase Phone Authentication
    * Flask Sessions
* **Location Logic:**
    * Haversine Formula for distance calculation
* **API/Frontend Bridge:**
    * JSON
    * CORS

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and Python installed on your machine.
* npm
    ```sh
    npm install npm@latest -g
    ```
* pip
    ```sh
    python -m ensurepip --upgrade
    ```

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/prathamranjan05/smartvendor.git
    ```
2.  **Navigate to the backend directory and install packages**
    ```sh
    cd backend
    pip install flask
    pip install jinja2
    ```
3.  **Navigate to the frontend directory and install NPM packages**
    ```sh
    cd frontend
    npm install
    ```
4.  **Start the backend server (from the `backend` folder)**
    ```sh
    flask run
    ```
5.  **Start the frontend development server (from the `frontend` folder)**
    ```sh
    npm start
    ```

---

## 👥 Our Team & Contributions

This project was made possible by the collaborative effort of our dedicated team members.

| Name                        | Role & Key Contributions                                                                                             | GitHub Profile                                     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `[ADITI MEHTA]`  | **Front-End Developer** <br/> - Designed and built the main UI components with **React** and designing using **Bootstrap**.    | [Link](https://github.com/Dynamic-ctrl)           |
| `[ISHANI JINDAL]`  | **Front-End Developer** <br/> - Build UI components with **React** and focused on creating a responsive design using **Bootstrap**. | [Link](https://github.com/ishanijdev)           |
| `[PRATHAM RANJAN]`   | **Back-End Developer** <br/> - Developed the feature: daily cart plus and deployed the web app.     | [Link](https://github.com/prathamranjan05)           |
| `[MEHAR BHANWRA]`   | **Back-End Developer** <br/> - Implemented user authentication and authorization logic for new vendors. <br/>  | [Link](https://github.com/meharbhanwra)           |

---

📜 License: This project is open-source and free to use for educational purposes.




