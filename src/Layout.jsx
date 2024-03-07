import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import MainCarousel from "./components/MainCarousel"
import Footer from "./components/Footer";
import MainLoadScreen from "./components/MainLoadScreen";
import EmblaCarousel from "./components/EmblaCarousel"


//
import Loader from "./components/Loader";
import Divider from "./components/Divider";
const MainBanner = lazy(() => import("./components/MainBanner"))

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}><MainBanner /></Suspense>
      <MainCarousel />
      <Divider />
      <EmblaCarousel />
      <Footer />
      <Outlet />
    </>
  );
}

export default Layout;
