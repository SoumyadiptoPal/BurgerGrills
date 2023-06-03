# BurgerGrills

BurgerGrills is a web application for ordering and managing burgers and grills online. This repository contains the source code and related files for the BurgerGrills project.

## Features

- User registration and authentication
- Browse menu to view available burgers and grills
- Add items to the cart and place orders
- Real-time order tracking
- Admin dashboard for managing products, orders, and users
- Payment integration
- Order history and user profile management

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Getting Started

To get started with BurgerGrills, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or above)
- MongoDB

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/SoumyadiptoPal/BurgerGrills.git
   ```

2. Navigate to the project directory:

   ```bash
   cd BurgerGrills
   ```

3. Install the dependencies for both the server and client:

   ```bash
   # Install dependencies
   cd User
   npm install
   
   # Install dependencies
   cd ../admin
   npm install
   ```
    # Install dependencies
   cd ../backend
   npm install
   ```

5. Start the server and client:

   ```bash
   # Start the server
   cd ../backend
   nodemon index.js
   
   # Start the User-side client
   cd ../User
   npm start
   
    # Start the Admin-side client
   cd ../admin
   npm start
   ```

6. Access the application by opening your browser and navigating to `http://localhost:3000`.

## Contributing

Contributions to BurgerGrills are welcome! If you find any bugs or want to suggest new features, please open an issue or submit a pull request.
