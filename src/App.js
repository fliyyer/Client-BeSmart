import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SignupSuccess from "./pages/SignupSuccess";
import SignupPhoto from "./pages/SignupPhoto";
import CompleteOrder from "./pages/CompleteOrder";
import Dashboard from "./pages/Dashboard";
import DetailOrder from "./pages/DetailOrder";
import CreateServicePage from "./pages/CreateServicePage";
import CreateDesignPage from "./pages/CreateDesignPage";
import CreateKonsultasiPage from "./pages/CreateKonsultasiPage";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signupSuccess" element={<SignupSuccess />} />
        <Route path="/signupPhoto" element={<SignupPhoto />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail-order" element={<DetailOrder />} />
        <Route path="/create-service" element={<CreateServicePage />} />
        <Route path="/create-design" element={<CreateDesignPage />} />
        <Route path="/create-konsultasi" element={<CreateKonsultasiPage />} />
      </Routes>
    </>
  );
}

export default App;
