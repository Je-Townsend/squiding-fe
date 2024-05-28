import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Footer from "../organisms/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/footer"} element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
