import React from "react";
import ImgHeader from "../../assets/image/onlineShop.png";
import SButton from "../Button";

function Header() {
  return (
    <section
      className="header pt-lg-60 pb-50"
      style={{ backgroundColor: "#F9FAFF" }}
    >
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <p className="text-support text-lg color-palette-2">Halo Squad,</p>
            <h1 className="header-title color-palette-1 fw-bold">
              Your Life Becomes
              <br className="d-sm-block d-none" />{" "}
              Fun With BeSmart
            </h1>
            <p className="mt-30 mb-40 text-lg color-palette-1">
              Kami menyediakan apa yang anda butuhkan
              <br className="d-md-block d-none" /> untuk membuat hidup anda lebih menyenangkan
            </p>
            <div className="d-flex flex-lg-row flex-column gap-4">
              <SButton
                className="btn btn-get text-lg text-white rounded-pill"
                href="#feature"
              
              >
                Get Started
              </SButton>
              <a
                className="btn-learn text-lg color-palette-1 my-auto text-center"
                href="#"
                role="button"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-lg-block d-none">
            <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
              <div className="position-relative" data-aos="zoom-in">
                <img src={ImgHeader} height="500" width="500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
