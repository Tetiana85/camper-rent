import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";

const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavouritePage = lazy(() => import("./pages/FavouritePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
