import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage.jsx";
import Header from "./components/AppBar/Header/Header.jsx";
import DetailsWrap from "./components/DetailsWrap/DetailsWrap.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />
          <Route path="/catalog/:id/:tab" element={<DetailsWrap />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
