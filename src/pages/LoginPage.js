/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import LoginImg from "../assets/image/computer.png";
import LogoImg from "../assets/image/logoHTA.png";
import LoginInput from "../components/LoginInput";

function LoginPage() {
  return (
    <section class="sign-in mx-auto">
      <div class="row">
        <div class="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <div class="container mx-auto">
            <div class="pb-50">
              <a class="navbar-brand" href="../index.html">
                <img src={LogoImg} alt="Logo Brand" width="80" height="80" />
              </a>
            </div>
            <h2 class="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
            <p class="text-lg color-palette-1 m-0">
              Masuk untuk melakukan proses order
            </p>
            <LoginInput />
          </div>
        </div>
        <div class="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
          <img
            src={LoginImg}
            width="502"
            height="391.21"
            class="img-fluid pb-50"
            alt=""
          />
          <h2 class="text-4xl fw-bold text-white mb-30">
            Technology wears you out.
            <br />
            we make you happy.
          </h2>
          <p class="text-white m-0">
            Kami siap melayani apa yang Anda butuhkan
            <br /> untuk bekerja dengan bahagia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
