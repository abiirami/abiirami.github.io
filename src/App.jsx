import Home from "./pages/Home";
import TechPortfolio from "./pages/TechPortfolio";
import ArtPortfolio from "./pages/ArtPortfolio";
import About from "./pages/AboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-t from-purple-100 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} — Built with ❤️ and a vision</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech_portfolio" element={<TechPortfolio />} />
        <Route path="/art_portfolio" element={<ArtPortfolio />} />
        <Route path="/about_me" element={<About />} />
      </Routes>

      {/* Footer outside routes so it shows everywhere */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;