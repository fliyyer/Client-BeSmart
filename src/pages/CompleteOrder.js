import React from "react";
import { Link } from "react-router-dom";
import completeImg from "../assets/image/complete-order.png";

function CompleteOrder() {
  return (
    <section class="complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80">
      <div class="container-fluid">
        <div class="text-center">
          <img
            src={completeImg}
            alt="complete illustration image."
            className="img-fluid"
          />
        </div>
        <div class="pt-70 pb-50">
          <h2 class="text-4xl fw-bold text-center color-palette-1 mb-10">
            Checkout Completed
          </h2>
          <p class="text-lg text-center color-palette-1 m-0">
            Kami akan periksa pesanan anda
            <br class="d-sm-block d-none" /> dan akan segera diproses
          </p>
        </div>
        <div class="button-group d-flex flex-column mx-auto">
          <Link
            class="btn btn-dashboard btn-danger fw-medium text-lg text-white rounded-pill mb-16"
            to="/dashboard"
            role="button"
          >
            My Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CompleteOrder;
