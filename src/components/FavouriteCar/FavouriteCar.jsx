import { useState } from 'react';
import {
  CarImage,
  Desctiption,
  FavouriteButton,
  HeadInfo,
  HeadInfocontainer,
  LocationAndRating,
  PriceContainer,
  ShowMoreBtn,
  TagsContainer,
} from '../Car/Car.styled';
import { Icon } from '../Icon/Icon';
import { CarModal } from '../CarModal/CarModal';
import { Details } from '../Details/Details';
import { useDispatch } from 'react-redux';
import { toggleFavourite } from '../../redux/cars/carsSlice';
import { useIsFavourite } from '../../hooks/useIsFavourite';

export const FavouriteCar = ({ favCar }) => {
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

  const isFavourite = useIsFavourite(favCar._id);

  return (
    <li>
      <CarImage
        $bgImage={
          favCar.gallery[0] ||
          'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
        }
      ></CarImage>
      <div>
        <HeadInfocontainer>
          <HeadInfo>{favCar.name}</HeadInfo>
          <PriceContainer>
            <HeadInfo>€{favCar.price}.00</HeadInfo>
            <FavouriteButton onClick={() => toogleFavouriteCar(favCar._id)}>
              <Icon
                width={24}
                height={24}
                iconId={isFavourite ? 'heart-red' : 'heart'}
              />
            </FavouriteButton>
          </PriceContainer>
        </HeadInfocontainer>
        <LocationAndRating>
          <p>
            {favCar.rating} <span>({favCar.reviews.length || 0} Reviews)</span>
          </p>
          <p>{favCar.location}</p>
        </LocationAndRating>
        <Desctiption>{favCar.description}</Desctiption>
        <TagsContainer>
          <Details details={favCar.details} />
        </TagsContainer>
        <ShowMoreBtn onClick={() => openModal()}>Show more</ShowMoreBtn>
      </div>

      <CarModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        car={favCar}
      />
    </li>
  );
};
