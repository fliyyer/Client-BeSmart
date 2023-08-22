import React from "react";
import DoneRegist from "../assets/image/done-register.png";

function SignupSuccess() {
  return (
    <section class="sign-up-success mx-auto pt-md-179 pb-md-179 pt-150 pb-100">
      <div class="container-fluid">
        <div class="text-center">
          <img src={DoneRegist} alt="done regist." className="img-fluid" />
        </div>
        <div class="pt-70 pb-md-50 pb-150">
          <h2 class="text-4xl fw-bold text-center color-palette-1 mb-10">
            Well Done!
          </h2>
          <p class="text-lg text-center color-palette-1 m-0">
            Kamu sudah bisa explore BeSmart
            <br class="d-sm-block d-none" />
            dan menjadi bagian dari kami!
          </p>
        </div>
        <div class="button-group d-flex flex-column mx-auto">
          <a
            class="btn btn-top-up fw-medium text-lg text-white rounded-pill"
            href="../index.html"
            role="button"
          >
            Kunjungi
          </a>
        </div>
      </div>
    </section>
  );
}

export default SignupSuccess;
