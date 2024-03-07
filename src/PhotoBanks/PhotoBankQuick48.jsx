import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import Quick48Carousel from "../RoomScenesCarousels/Quick48Carousel";
import Quick48CarouselInstallation from "../RoomScenesCarousels/Quick48CarouselInstallation";


function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Quick48+</h2>
        <Quick48Carousel />
        <h2>Installation</h2>
        <Quick48CarouselInstallation />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
