import Home from "./pages/Home";
import TechPortfolio from "./pages/TechPortfolio";
import ArtPortfolio from "./pages/ArtPortfolio";
import About from "./pages/AboutMe";

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";



export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tech_portfolio"
          element={<TechPortfolio />}
        />

        <Route
          path="/art_portfolio"
          element={<ArtPortfolio />}
        />

        <Route
          path="/about_me"
          element={<About />}
        />
      </Routes>

    </HashRouter>
  );
}