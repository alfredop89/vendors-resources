import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import HydrowoodCarousel from "../RoomScenesCarousels/HydrowoodCarousel"


function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Hydrowood</h2>
        <HydrowoodCarousel />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
