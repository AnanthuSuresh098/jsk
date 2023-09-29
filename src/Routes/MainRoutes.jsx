import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home.jsx";
import { Navbar } from "../Components/Navbar.jsx";

export const MainRoutes = () =>{
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
}