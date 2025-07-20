import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../src/landing_page/Navbar";
import Footer from "../src/landing_page/Footer";


const FrontendLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* public routes go here */}
      <Footer />
    </>
  );
};

export default FrontendLayout;
