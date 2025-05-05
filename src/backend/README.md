
# Backend Structure

This folder contains a mock backend structure for demonstration purposes. In a real project, this would be a separate Node.js application, not part of the React frontend.

## Important Note

These files are for reference only and won't actually run in a browser environment. In a real project, you would:

1. Create a separate Node.js server project
2. Set up MongoDB connection
3. Implement proper authentication, cart management, and payment processing
4. Use environment variables for sensitive information

## Backend Structure

```
backend/
├── app.js                  # Main server file
├── config/
│   └── db.js               # Database connection
├── middleware/
│   └── authMiddleware.js   # Authentication middleware
├── models/
│   ├── item.js             # Item model
│   └── user.js             # User model
└── routes/
    ├── auth.js             # Authentication routes
    ├── cart.js             # Cart routes
    └── payment.js          # Payment routes
```

## Setup Instructions (for a real Node.js backend)

1. Create a `.env` file in the root directory with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

2. Install dependencies:
   ```
   npm install express mongoose bcryptjs jsonwebtoken dotenv cors
   ```

3. Run the server:
   ```
   npm run server
   ```

## API Endpoints

### Auth
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login and generate OTP
- POST /api/auth/verify - Verify OTP and get token

### Cart
- GET /api/cart - Get user cart
- POST /api/cart - Add item to cart
- PUT /api/cart/:id - Update cart item quantity
- DELETE /api/cart/:id - Remove item from cart

### Payment
- POST /api/payment - Process payment
- GET /api/payment/:id - Get payment status
