import { useSelector } from "react-redux";
import { selectFavourites } from "../redux/cars/carsSelectors";

export const useIsFavourite = (id) => {
  const favourites = useSelector(selectFavourites);

  return favourites.some((favorite) => favorite.car._id === id);
};
