import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/catalog/:slug" element={<Product />} />
    </Routes>
  );
};

export default RoutesPage;
