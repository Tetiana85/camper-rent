import { Outlet } from "react-router-dom";
import { Suspense, useEffect, startTransition } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { Loader } from "../Loader/Loader";
import HeaderLayout from "../Header/Header";

export const AppLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    startTransition(() => {
      dispatch(fetchCars());
    });
  }, [dispatch]);

  return (
    <>
      <header>
        <HeaderLayout />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </>
  );
};
