import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import InstaLanding from "./pages/InstaLanding";
import YoutubeLanding from "./pages/YoutubeLanding";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import BlogLanding from "./pages/BlogLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogLanding />} />
        <Route path="/instagram" element={<InstaLanding />} />
        <Route path="/youtube" element={<YoutubeLanding />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
