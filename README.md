# eCommerce Clothing Shop

Welcome to the eCommerce Clothing Shop project! This application is built using React, Redux, and TailwindCSS, and is bootstrapped with Vite. For backend services and authentication, we are using Supabase. It's designed to provide a seamless online shopping experience for clothing enthusiasts.

## Demo

### Home page
![Screenshot_18-10-2024_9344_localhost](https://github.com/user-attachments/assets/f75a81ae-87a1-4154-a7a7-a5eee47fa3a1)

### Shop page
![Screenshot_18-10-2024_93529_localhost](https://github.com/user-attachments/assets/1c040bc5-d966-462d-ad24-ddd2d7fab2cb)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Redux Setup](#redux-setup)
- [TailwindCSS Setup](#tailwindcss-setup)
- [Supabase Setup](#supabase-setup)
- [Contributing](#contributing)
- [License](#license)

## Features

- User-friendly shopping interface
- Product listings with detailed views
- Filter products by color, price range, size, and availability
- Shopping cart functionality
- User authentication and account management
- Responsive design with TailwindCSS
- State management using Redux
- Backend services and authentication handled by Supabase
- Skeleton loader for product loading

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yasibena/redux-react-ecommerce.git
   cd ecommerce

### Usage
1. Start project
   ```sh
   npm install
   or
   yarn install

### Redux Setup 
Our Redux setup is organized into a `redux` folder. Within this folder, you'll find `store.js` which sets up the Redux store. Additionally, there is a `feature` folder that contains different slices for handling various parts of the state.

#### Store Configuration

The `store.js` file is responsible for configuring the Redux store. Here’s a snippet of how it’s set up:

```js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from './feature/ProductSlice';
import modalReducer from "./feature/modalSlice";
import { apiSlice } from "./feature/apiSlice";
import cartSlice from "./feature/cartSlice";
import authReducer from './feature/authSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    modal: modalReducer,
    auth: authReducer,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

Inside the redux folder, there is a feature folder that contains the following slices:

*   ProductSlice.js: Manages the state related to products.
*   ModalSlice.js: Manages the state related to modal visibility and interactions.
*   apiSlice.js: Handles API calls and state management related to data fetching.
*   cartSlice.js: Manages the state of the shopping cart.
*   authSlice.js: Manages user authentication and related state.
    
By organizing our Redux state management this way, we keep our code modular and easier to maintain.
