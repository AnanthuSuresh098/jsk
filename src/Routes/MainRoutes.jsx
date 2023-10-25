import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home.jsx";
import { Navbar } from "../Components/Navbar.jsx";
import { OurProducts } from "../Components/OurProducts.jsx";
import { Product } from "../Components/Product.jsx";
import { Markets } from "../Components/Markets.jsx";
import { About } from "../Components/About.jsx";
import { SampleKit } from "../Components/SampleKit.jsx";

export const MainRoutes = () =>{
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="/product" element={<Product />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/about" element={<About />} />
        <Route path="/samplekit" element={<SampleKit />} />
      </Routes>
    );
}