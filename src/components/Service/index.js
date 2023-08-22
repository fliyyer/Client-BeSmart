import React from "react";
import iconOne from "../../assets/image/development.png";
import iconTwo from "../../assets/image/consultation.png";
import iconThree from "../../assets/image/design.png";

function Service() {
  return (
    <section id="feature" className="container-fluid feature pt-50 pb-15">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          Choose The Service
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <div className="col-lg-4">
            <div className="card feature-card border-0">
              <img src={iconOne} className="mb-30" width="100" height="100" />
              <p className="fw-semibold text-2xl mb-2 color-palette-1">
                Website & Aplication Development
              </p>
              <p className="text-lg color-palette-1 mb-0">
                Pembuatan aplikasi & web profesional
                <br />
                dengan coding yang praktis.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card feature-card border-0">
              <img src={iconTwo} className="mb-30" width="100" height="100" />
              <p className="fw-semibold text-2xl mb-2 color-palette-1">
                Consultation
              </p>
              <p className="text-lg color-palette-1 mb-0">
                Jasa konsultasi berbagai keperluan bisnis 
                <br />
                anda dengan berbagai pakar ahli
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card feature-card border-0">
              <img src={iconThree} className="mb-30" width="100" height="100" />
              <p className="fw-semibold text-2xl mb-2 color-palette-1">
                Design
              </p>
              <p className="text-lg color-palette-1 mb-0">
                Layanan pembuatan Desain untuk kebutuhan usaha
                <br />
                dan pemasaran produk atau perusahaan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
