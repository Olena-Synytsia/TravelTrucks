import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/AppBar/Header/Header.jsx";
import Loader from "./components/Loader/Loader.jsx";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const DetailsPage = lazy(() =>
  import("./components/DetailsWrap/DetailsWrap.jsx")
);
const DetailsWrap = lazy(() =>
  import("./components/DetailsWrap/DetailsWrap.jsx")
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />
          <Route path="/catalog/:id/:tab" element={<DetailsWrap />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
