import { Icon } from "../Icon/Icon";
import {
  CarImage,
  CarItem,
  Desctiption,
  FavouriteButton,
  HeadInfo,
  HeadInfocontainer,
  HeadName,
  LocationAndRating,
  PriceContainer,
  ReviewsAndStarContainer,
  ShowMoreBtn,
  TagsContainer,
} from "./Car.styled";
import { CarModal } from "../CarModal/CarModal";
import { useState } from "react";
import { Details } from "../Details/Details";
import { useDispatch } from "react-redux";
import { toggleFavourite } from "../../redux/cars/carsSlice";
import { useIsFavourite } from "../../hooks/useIsFavourite";
import { Detail } from "../Details/Detail";

export const Car = ({ car, hidden }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const toogleFavouriteCar = (id) => {
    dispatch(toggleFavourite(id));
  };

  const isFavourite = useIsFavourite(car._id);

  return (
    <CarItem className={hidden ? "hidden" : ""}>
      <CarImage
        $bgImage={
          car.gallery[0] ||
          "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
      ></CarImage>
      <div>
        <HeadInfocontainer>
          <HeadName>{car.name}</HeadName>
          <PriceContainer>
            <HeadInfo>€{car.price}.00</HeadInfo>
            <FavouriteButton onClick={() => toogleFavouriteCar(car._id)}>
              <Icon
                width={24}
                height={24}
                iconId={isFavourite ? "heart-red" : "heart"}
              />
            </FavouriteButton>
          </PriceContainer>
        </HeadInfocontainer>
        <LocationAndRating>
          <ReviewsAndStarContainer>
            <Icon width={16} height={16} iconId={"star-yellow"} />
            <p>{car.rating}</p>
            <span>({car.reviews.length || 0} Reviews)</span>
          </ReviewsAndStarContainer>
          <Icon width={16} height={16} iconId={"map-pin"} />
          <span style={{ marginLeft: "4px" }}>
            <p>{car.location}</p>
          </span>
        </LocationAndRating>
        <Desctiption>{car.description}</Desctiption>
        <TagsContainer>
          <Detail detail={"adults"} value={car.adults} iconId={"people"} />
          <Detail detail={car.transmission} value={""} iconId={"automatic"} />
          <Details details={car.details} />
        </TagsContainer>
        <ShowMoreBtn onClick={() => openModal()}>Show more</ShowMoreBtn>
      </div>

      <CarModal modalIsOpen={modalIsOpen} closeModal={closeModal} car={car} />
    </CarItem>
  );
};
