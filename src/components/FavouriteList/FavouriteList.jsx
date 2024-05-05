import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/cars/carsSelectors";

import { Car } from "../Car/Car";
import { FavList } from "./FavouriteList.styled";

export const FavouriteList = () => {
  const favouritesCars = useSelector(selectFavourites);
  return (
    <>
      <FavList>
        {favouritesCars.map((favouriteCar) => {
          return <Car key={favouriteCar.id} car={favouriteCar.car} />;
        })}
      </FavList>
    </>
  );
};
