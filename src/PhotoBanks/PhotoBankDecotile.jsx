import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import DecotileCarousel from "../RoomScenesCarousels/DecotileCarousel"


function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Decotile</h2>
        <DecotileCarousel />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
