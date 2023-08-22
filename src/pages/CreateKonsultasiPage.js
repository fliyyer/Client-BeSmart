import React from "react";
import Navbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import Footer from "../components/Footer";
import CreateKonsultasiInput from "../components/CreateKonsultasiInput";

function CreateKonsultasiPage() {
  return (
    <div
      className="transactions overflow-auto h-screen"
      style={{ height: "100vh" }}
    >
      <Navbar />
      <div className="pt-lg-100 pb-4 responsive-form-checkout transactions mx-auto">
        <Card style={{ width: "50%" }} className="m-auto">
          <h2 className="fw-bold text-xxl color-palette-1 text-center mt-3">
            Konsultasi IT
          </h2>
          <div>
            <CreateKonsultasiInput />
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default CreateKonsultasiPage;
