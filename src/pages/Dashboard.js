import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Service from "../components/Service";
import Product from "../components/Product";
import Reached from "../components/Reached";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <Service />
      <Product />
      <Reached />
      <Blog />
      <Footer />
    </div>
  );
}

export default Dashboard;
