# Ecommerce Site
1. Demo Client Side link: https://mern-ecommerce-client-git-main-realmastergods-projects.vercel.app/
2. Demo Admin Side link: https://mern-ecommerce-admin-git-main-realmastergods-projects.vercel.app/

# Table of Content

1. About The App
2. Technologies
3. Prerequisites
4. Setup
5. Status

# 1. About The App
Ecommerce site/store where you can buy stuff. You can query products by categories and click ona product to get more info about it as well as choose its size, color,
quantity and finally add to your cart. You have to login to add products to your cart. You may also search/sort products by color, size or price.
Finally you can go to cart page and checkout to place an order. To remove a product from cart simply make it's quantity less than one.
There is also an admin panel site associated with this where only admins can login and update/delete products or create new ones as well as update users.
The admin panel also shows monthly revenue and sales of a particular product by month.

# 2. Technologies
I have used ReactJs, Vite to create the frontend and Redux Tookit for state management and to persist the users, cart, products in local Storage. It uses 
jwt authentication for login. For making payments I have used stripe payment API.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### To create your own react + vite app run this command:
```bash
npm create vite@latest --your-app-name -- --template react
```
Or you may refer to https://vitejs.dev/guide/   for more details.

## Redux Tookit
Learn more about redux toolkit
- https://redux-toolkit.js.org/
- To use redux in your projects just run the following commands:
  ```bash
  npm install react-redux @reduxjs/toolkit
  ```

## Material UI Icons
Material UI icons are easy to use and provides a ton of choices for each icon. Chances are if you are looking for 
an icon, they have it.

Refer to the offical site to get started with material ui : https://mui.com/material-ui/getting-started/

## Styled Components
Styled components make it much easier to write css and the option to pass props from the components makes it
a powerful tool for conditional css rendering rules. I prefer it over plain css.

Getting started with styled components : https://styled-components.com/docs

## JWT
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. These may be used for authorisation of users making your apps more seacure.
Add it in your project:
```bash
npm i jsonwebtoken
```
Please refer to https://jwt.io/introduction for detailed information about jwt and why and how to use them. 

# 3. Prerequisites
## Install Node Package Manager
Refer to https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

# 4. Setup
- Clone the repository or download as zip.
- Go to the cloned folder on your local machine.
- Open terminal in api folder and also create a .env file where you have to create a variable MONGODB_URI and assign your mongodb database to this.
- Also create three more variables - PASS_SEC and assign any value of your liking, this will be used to encrypt passwords. Next create JWT_SEC and again assign any value you like, this will be your jwt secret. Finally you need STRIPE_KEY and its value will be whatever the stripe payment api provides you (you can create an account on stripe and use itin test mode where you will have two key - only the private key is to be assigned to STRIPE_KEY variable).
- Open terminal and run the following commands in order.
  ```bash
  npm install
  ```
  ```bash
  npm start
  ```
- Similarly open terminal in client folder and also create a .env file where you have to create a variable REACT_APP_BASE_URL and assign the url your api is running on.
- Create another variable in .env VITE_REACT_APP_STRIPE and assign your stripe public key to this variable.
- Now in client folder just run:
  ```bash
  npm install && npm run dev
  ```
- Now just click/copy the link that would appear in the console and paste on your browser and hit enter. That's it you can now see the project on your local machine.

# 5. Status
The project is incomplete. The action to get and update product and user is not yet implemented. I will complete this soon.
Additionally I would like to add a search bar to search products directly either by name or category as well as add a user profile page where users can update their profiles.


