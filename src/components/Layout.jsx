import React from "react";

import Header from "./Header";
import ProductViewModal from "./ProductViewModal";
import Footer from "./Footer";

import RoutesPage from "../routes/RoutesPage";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <RoutesPage />
        </div>
      </div>
      <Footer />
      <ProductViewModal />
    </>
  );
};

export default Layout;
