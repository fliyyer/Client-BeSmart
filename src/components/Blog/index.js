import React from "react";
import startUp from "../../assets/image/startup.png";
import SButton from "../Button";

function Blog({isLoading}) {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div
            className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
            data-aos="zoom-in"
          >
            <img
              src={startUp}
              width="612"
              height="452"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-5 col-12 ps-lg-60">
            <div className="">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                The power of innovation,
                <br /> the promise of progress
              </h2>
              <p className="text-lg color-palette-1 mb-30">
                Kami menyediakan apa yang anda butuhkan
                <br className="d-sm-block d-none" /> untuk membuat hidup anda
                lebih menyenangkan
              </p>
              <div className="d-md-block d-flex flex-column w-100">
              <SButton
                  loading={isLoading}
                  disabled={isLoading}
                  variant="primary"
                  className="btn-read rounded-5 py-2 px-4"
                >
                  Lihat Cerita
                </SButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
