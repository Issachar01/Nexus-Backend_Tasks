# Nexus Backend Tasks - ecommerceBackend

- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [API Endpoints Reference](#api-endpoints-reference)

## Project Overview

This project implements a backend REST API designed to handle core e-commerce functionalities. It supports data modeling with Mongoose, route organization via Express routers, and asynchronous error handling for production-ready reliability.

## Technology Stack

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Configuration:** dotenv
- **Development Tools:** Nodemon

## Project Structure

```text
ecommerce-backend/
├── .env
├── package.json
├── server.js
├── config/
│   └── db.js
├── models/
│   ├── Product.js
│   ├── User.js
│   ├── Cart.js
│   └── Order.js
├── routes/
│   ├── productRoutes.js
│   ├── userRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
└── controllers/
    ├── productController.js
    ├── userController.js
    ├── cartController.js
    └── orderController.js
```markdown
# Nexus Backend Tasks - ecommerceBackend

- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [API Endpoints Reference](#api-endpoints-reference)

## Project Overview

This project implements a backend REST API designed to handle core e-commerce functionalities. It supports data modeling with Mongoose, route organization via Express routers, and asynchronous error handling for production-ready reliability.

## Technology Stack

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Configuration:** dotenv
- **Development Tools:** Nodemon

## Project Structure

```text
ecommerce-backend/
├── .env
├── package.json
├── server.js
├── config/
│   └── db.js
├── models/
│   ├── Product.js
│   ├── User.js
│   ├── Cart.js
│   └── Order.js
├── routes/
│   ├── productRoutes.js
│   ├── userRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
└── controllers/
    ├── productController.js
    ├── userController.js
    ├── cartController.js
    └── orderController.js

```

## Getting Started

### Prerequisites

* Node.js installed on your machine
* MongoDB instance running locally or via MongoDB Atlas

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-backend

```


2. Install dependencies:
```bash
npm install

```


3. Configure environment variables in a `.env` file at the root directory.
4. Start the application in development mode:
```bash
npm run dev

```



## Environment Configuration

Create a `.env` file in the root directory and supply the following configuration keys:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/nexus-ecommerce
JWT_SECRET=your_super_secret_key_here

```

## API Endpoints Reference

### 1. Products (`/api/products`)

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a single product by ID |
| POST | `/api/products` | Create a new product |
| PATCH | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product |

### 2. Users (`/api/users`)

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Authenticate and login user |

### 3. Cart (`/api/cart`)

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/cart/:userId` | Retrieve the active cart for a user |
| POST | `/api/cart/add` | Add a product quantity to the user cart |
| POST | `/api/cart/remove` | Remove a product from the user cart |

### 4. Orders (`/api/orders`)

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/orders` | Create an order utilizing items from the active cart |
| GET | `/api/orders/:userId` | Retrieve all historical orders for a specific user |

```

```
