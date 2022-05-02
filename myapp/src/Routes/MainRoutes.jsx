import React from "react";
import { Navbar } from "../components/Navbar";
import {Routes, Route} from "react-router-dom"
import {Home} from "../components/Home"
import { Products } from "../components/Products";
import {About} from "../components/About"
// import {Men} from "../components/Men";
// import {Women} from "../components/Wommen";
// import {Kids} from "../components/Kids";
// import {HomeDecor} from "../components/"

const MainRoutes = () => {
  return <>
  {/* Navbar and all the routes */}

  <Navbar>

  <Routes>
    <Route path = "/" element ={ <Home />} />
    <Route path ="about" element={  <About />} />
    <Route path ="products" element={  <Products />} />
    <Route path ="/products/men" element={  <Products />} />
    <Route path ="/products/women" element={  <Products />} />
    <Route path ="/products/kids" element={  <Products />} />
    <Route path ="/products/homedecor" element={  <Products />} />


  </Routes>

  </Navbar>

  </>;
};
export { MainRoutes };
