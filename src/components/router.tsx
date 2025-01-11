import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbarcomponents from "./navbar";
import HomeComponents from "./home";
import Footercomponent from "./footer";
import Personalcomponent from "./personalcare/Personal";
import FamilycatigoryComponent from "./familycare/familycatigory";
import BlogComponent from "./blogfolder/blogcomponent";
import BloginfoConponent from "./blogfolder/bloginfo";

const AppRouter: React.FC = () => {
  return (
    <>
      <Navbarcomponents />
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/personal" element={<Personalcomponent />} />
        <Route path="/familycare" element={<FamilycatigoryComponent />} />
        <Route path="/blog" element={<BlogComponent />} />
        <Route path="/blog/:id" element={<BloginfoConponent/>} />
      </Routes>
      <Footercomponent />
    </>
  );
};

export default AppRouter;
