import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/AppBar/Header/Header.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ScrollUp from "./components/ScrollUp/ScrollUp.jsx";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage.jsx"));
const FeaturesWrap = lazy(() =>
  import(
    "./components/DetailsWrap/FeaturesOrReviews/FeaturesWrap/FeaturesWrap.jsx"
  )
);
const ReviewsWrap = lazy(() =>
  import(
    "./components/DetailsWrap/FeaturesOrReviews/ReviewsWrap/ReviewsWrap.jsx"
  )
);

const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route index element={<FeaturesWrap />} />
            <Route path="features" element={<FeaturesWrap />} />
            <Route path="reviews" element={<ReviewsWrap />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ScrollUp />
    </>
  );
}

export default App;
