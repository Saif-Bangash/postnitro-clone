import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import PricingSection from "./pages/PricingSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/pricing" element={<PricingSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
