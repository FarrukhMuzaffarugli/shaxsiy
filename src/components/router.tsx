import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbarcomponents from "./navbar";
import HomeComponents from "./home";
import Footercomponent from "./footer";
import Personalcomponent from "./Personal";

const AppRouter: React.FC = () => {
  return (
    <>
      <Navbarcomponents/>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/personal" element={<Personalcomponent />} />
      </Routes>
      <Footercomponent/>
    </>
  );
};

export default AppRouter;
