# Ecommerce Clothing Shop

Welcome to the Ecommerce Clothing Shop project! This application is built using React, Redux, and TailwindCSS, and is bootstrapped with Vite. For backend services and authentication, we are using Supabase. It's designed to provide a seamless online shopping experience for clothing enthusiasts.

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
```

Inside the redux folder, there is a feature folder that contains the following slices:

*   ProductSlice.js: Manages the state related to products.
*   ModalSlice.js: Manages the state related to modal visibility and interactions.
*   apiSlice.js: Handles API calls and state management related to data fetching.
*   cartSlice.js: Manages the state of the shopping cart.
*   authSlice.js: Manages user authentication and related state.
    
By organizing our Redux state management this way, we keep our code modular and easier to maintain.

### TailwindCSS Setup
TailwindCSS is already set up. You can start using it by adding classes to your components. For example:

```js
function ProductCard({ product }) {
  return (
    <div className="p-4 m-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-green-500">${product.price}</p>
    </div>
  );
}
```

### Supabase Setup 
Make sure to configure Supabase for backend services and authentication. You can sign up for a free account and create a new project at Supabase.
1. Install Supabase dependencies:
  ```sh
npm install @supabase/supabase-js
# or
yarn add @supabase/supabase-js
```
2. Initialize Supabase in your project:

```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-anon-key';
export const supabase = createClient(supabaseUrl, supabaseKey);
```
3. Use Supabase for authentication and backend services throughout your app.

