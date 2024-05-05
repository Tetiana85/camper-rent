import { useDispatch } from "react-redux";
import { CarsList } from "../components/CarsList/CarsList";
import { Filters } from "../components/Filters/Filters";
import { useEffect } from "react";
import { clearFilters } from "../redux/filter/filterSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  return (
    <section className="container">
      <Filters />
      <CarsList />
    </section>
  );
}
