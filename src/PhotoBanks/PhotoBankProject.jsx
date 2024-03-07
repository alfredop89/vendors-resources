import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import ProjectCarousel from "../RoomScenesCarousels/ProjectCarousel";
import ProjectCarouselInstallation from "../RoomScenesCarousels/ProjectCarouselInstallation"


function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Project</h2>
        <ProjectCarousel />
        <h2>Installation</h2>
        <ProjectCarouselInstallation />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
