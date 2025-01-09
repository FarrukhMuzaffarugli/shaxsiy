import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbarcomponents from "./navbar";
import HomeComponents from "./home";
import Footercomponent from "./footer";

const AppRouter: React.FC = () => {
  return (
    <>
      <Navbarcomponents/>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
      </Routes>
      <Footercomponent/>
    </>
  );
};

export default AppRouter;
