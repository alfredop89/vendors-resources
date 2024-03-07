import TechSidebar from "../Sidebars/TechSidebar";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import "../scss/TechnnicalData.scss"
import {motion } from "framer-motion";
import Footer from "../components/Footer"
import SellSheetsCarousel from "../MerchCarousels/SellSheetsCarousel"
import ProductsGuideCarousel from "../MerchCarousels/ProductsGuideCarousel"
import CPFBenefitsCarousel from "../MerchCarousels/CPFBenefitsCarousel"
import ProductKitCarousel from "../MerchCarousels/ProductKitCarousel"
import MediaKitCarousel from "../MerchCarousels/MediaKitCarousel"
import MerchSidebar from "../Sidebars/MerchSidebar"

function Merch() {
  return (
    <>
      <Suspense fallback={<Loader />}>
      <Header />
      <h2>Sell Sheets</h2>
      <SellSheetsCarousel />
      <h2>Products Guide</h2>
      <ProductsGuideCarousel/>
      <h2>CPF Benefits</h2>
      <CPFBenefitsCarousel/>
      <h2>Product Kit</h2>
      <ProductKitCarousel/>
      <h2>Media & Press Kit</h2>
      <MediaKitCarousel/>
          

      </Suspense>
      <Footer />


    </>
  );
}

export default Merch;
