import { useSelector } from "react-redux";
import { selectFilteredCars } from "../../redux/cars/carsSelectors";
import { Car } from "../Car/Car";
import { CarList, ListContainer, LoadMore } from "./CarsList.styled";
import { useState } from "react";

export const CarsList = () => {
  const [visibleCars, setVisibleCars] = useState(4);
  const filteredCars = useSelector(selectFilteredCars);

  const loadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 4);
  };

  const allCarsDisplayed = visibleCars >= filteredCars.length;

  return (
    <ListContainer>
      <CarList>
        {filteredCars.map((car, index) => (
          <Car key={car.id} car={car.car} hidden={index >= visibleCars} />
        ))}
      </CarList>
      {!allCarsDisplayed && (
        <LoadMore onClick={loadMore} disabled={allCarsDisplayed}>
          Load more
        </LoadMore>
      )}
    </ListContainer>
  );
};
