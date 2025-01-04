import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbarcomponents from "./navbar";
import HomeComponents from "./home";

const AppRouter: React.FC = () => {
  return (
    <>
      <Navbarcomponents />
      <Routes>
        <Route path="/" element={<HomeComponents />} />
      </Routes>
    </>
  );
};

export default AppRouter;
