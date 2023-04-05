import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Matrominal from "./Components/Matrominal";
import MatrominalDetails from "./Components/Matrominal/MatrominalDetails";
import Header from "./Header";
import GiveAdvertisement from "./Components/GiveAdvertisement";
import ContactUs from "./Components/ContactUs";
import Prizes from "./Components/Prizes";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="blog" element={<Blog />} />
          <Route path="matrominal" element={<Matrominal />} />
          <Route path="matrominal/:id" element={<MatrominalDetails />} />
          <Route path="giveadvertisement" element={<GiveAdvertisement />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="prizes" element={<Prizes />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
