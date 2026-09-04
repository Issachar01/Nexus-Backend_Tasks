<<<<<<< HEAD
# Nexus Backend Tasks

A curated collection of backend development projects, task solutions, and mini-applications built during the Nexus program. This repository tracks practical implementations ranging from system logic to API design.

---

## Repository Structure

```text
Nexus-Backend-Tasks/
├── 01-sequencing-animation/           # Animation sequencing & custom search/filter logic
├── product-inventory-api/             # RESTful product inventory API built with Node.js & Express
├── student-management-api/            # Core student management system implementation
├── student-management-api-with-auth/  # Secure RESTful student management API with JWT auth & RBAC
└── task-management-system/            # Full-featured backend system for task management
=======
# Nexus Simple E-Commerce API

A backend e-commerce API built with Node.js, Express.js, and MongoDB, providing a robust foundation for product management, user authentication, cart operations, and order processing.

## Table of Contents
- [Project Overview](#project-overview)
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
  .env
  package.json
  server.js
  config/
    db.js
  models/
    Product.js
    User.js
    Cart.js
    Order.js
  routes/
    productRoutes.js
    userRoutes.js
    cartRoutes.js
    orderRoutes.js
  controllers/
    productController.js
    userController.js
    cartController.js
    orderController.js
Getting StartedPrerequisitesNode.js installed on your machineMongoDB instance running locally or via MongoDB AtlasInstallationClone the repository:Bashgit clone <repository-url>
cd ecommerce-backend
Install dependencies:Bashnpm install
Configure environment variables in a .env file at the root directory.Start the application in development mode:Bashnpm run dev
Environment ConfigurationCreate a .env file in the root directory and supply the following configuration keys:Code snippetPORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/nexus-ecommerce
JWT_SECRET=your_super_secret_key_here
API Endpoints Reference1. Products (/api/products)MethodEndpointDescriptionGET/api/productsRetrieve all productsGET/api/products/:idRetrieve a single product by IDPOST/api/productsCreate a new productPATCH/api/products/:idUpdate an existing productDELETE/api/products/:idDelete a product2. Users (/api/users)MethodEndpointDescriptionPOST/api/users/registerRegister a new userPOST/api/users/loginAuthenticate and login user3. Cart (/api/cart)MethodEndpointDescriptionGET/api/cart/:userIdRetrieve the active cart for a userPOST/api/cart/addAdd a product quantity to the user cartPOST/api/cart/removeRemove a product from the user cart4. Orders (/api/orders)MethodEndpointDescriptionPOST/api/ordersCreate an order utilizing items from the active cartGET/api/orders/:userIdRetrieve all historical orders for a specific user
>>>>>>> c230c9c (Add ecommerce backend project)
