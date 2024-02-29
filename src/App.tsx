import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="bg-[#F3EDE1] font-hiro-misake text-[#333F72] relative">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
        <div className="paperOverlay"></div>
      </div>
  );
}

export default App;
