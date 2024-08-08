import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/student/Signup/SignUp";
import Login from "./pages/student/Signup/Login";
import NewPassword from "./pages/student/Signup/NewPassword";
import ForgotPassword from "./pages/student/Signup/ForgotPassword";
import Verification from "./pages/student/Signup/Verification";
import PasswordChanged from "./pages/student/Signup/PasswordChanged";
import Acknowledgement from "./pages/student/Acknowledgement/Acknowledgement";
import Certificate from "./pages/student/Acknowledgement/Certificate";
import YearSelection from "./pages/student/Acknowledgement/YearSelection";
import Introduction from "./pages/student/Acknowledgement/Introduction";
import Documents from "./pages/student/Acknowledgement/Documents";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/new-password":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/verification":
        title = "";
        metaDescription = "";
        break;
      case "/success":
        title = "";
        metaDescription = "";
        break;
      case "/acknowledgement":
        title = "";
        metaDescription = "";
        break;
      case "/certificate":
        title = "";
        metaDescription = "";
        break;
      case "/year-selection":
        title = "";
        metaDescription = "";
        break;
      case "/introduction":
        title = "";
        metaDescription = "";
        break;
      case "/documents":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/success" element={<PasswordChanged />} />
      <Route path="/acknowledgement" element={<Acknowledgement />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/year-selection" element={<YearSelection />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/documents" element={<Documents />} />
    </Routes>
  );
}
export default App;
