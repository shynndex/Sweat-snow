# Online Bookstore – MERN Stack

## Project Description

This project is a full-stack **Online Bookstore Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application allows users to browse books, view product details, place orders, and make payments online.

The project was developed by a **team of three members**, where I was mainly responsible for the **backend development**, including authentication, order management, payment integration, and API design.

The system provides common e-commerce features such as user authentication, product browsing, order placement, and order status tracking. Users can also update their personal information, manage multiple shipping addresses, and apply discount vouchers when placing orders.

Online payments are supported through **VNPay** and **MoMo**, along with **Cash on Delivery (COD)**. The project also integrates several supporting technologies such as **Cloudinary** for image storage, **Redis** for rate limiting to prevent email request spam, and **RabbitMQ** for asynchronous payment processing.

Additional features include an **AI chatbot for product suggestions** and a **blog system** for sharing book-related content.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/shynndex/project-3.1.git
```

### 2. Install dependencies

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

### 3. Configure environment variables

Create a `.env` file in the backend folder and configure the required environment variables such as:

* MongoDB connection string
* JWT secret key
* Email service configuration
* Cloudinary credentials
* VNPay and MoMo payment configuration
* Redis configuration
* RabbitMQ configuration

### 4. Run the project

Start the backend server:

```bash
npm run dev
```

Start the frontend application:

```bash
npm start
```

### 5. Access the application

Open your browser and navigate to:

```
http://localhost:3000
```
