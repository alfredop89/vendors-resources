import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import ProductData from "../ProductData.json"
//
import "../scss/PhotoBank.scss"



function PhotoBank() {

console.log(ProductData)
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <PhotoBankSidebar />
        <div className="photo-bank-container">
          <h1>CPF Photo Bank</h1>
        </div>
      </Suspense>
    </>
  );
}
export default PhotoBank;



