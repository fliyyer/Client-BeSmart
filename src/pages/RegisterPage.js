import React from "react";
import RegisterInput from "../components/RegisterInput";
import LogoImg from "../assets/image/logoHTA.png";

function RegisterPage() {
  return (
    <section class="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div class="container mx-auto">
        <form action="">
          <div class="pb-50">
            <a class="navbar-brand" href="../index.html">
              <img src={LogoImg} alt="Logo Brand" width="80" height="80" />
            </a>
          </div>
          <h2 class="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
          <p class="text-lg color-palette-1 m-0">
            Daftar dan bergabung dengan kami
          </p>
          <RegisterInput />
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;
