import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import FeaturedInfo from "./components/FeaturedInfo";
import WidgetLg from "./components/WidgetLg";
import WidgetSm from "./components/WidgetSm";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import NewUser from "./pages/NewUser";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import UserList from "./pages/UserList";
import User from "./pages/User";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  const user = useSelector((store) => store?.user?.currentUser?.isAdmin);
  return (
    <BrowserRouter>
      {user && <Topbar />}
      <Container>
        {user && <Sidebar />}
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/newProduct"
            element={user ? <NewProduct /> : <Navigate to="/login" />}
          />
          <Route
            path="/newUser"
            element={user ? <NewUser /> : <Navigate to="/login" />}
          />
          <Route
            path="/product/:productId"
            element={user ? <Product /> : <Navigate to="/login" />}
          />
          <Route
            path="/products"
            element={user ? <ProductList /> : <Navigate to="/login" />}
          />
          <Route
            path="/users"
            element={user ? <UserList /> : <Navigate to="/login" />}
          />
          <Route
            path="/newUser"
            element={user ? <NewUser /> : <Navigate to="/login" />}
          />
          <Route
            path="/user/:userId"
            element={user ? <User /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
