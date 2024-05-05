import { useEffect, useState } from "react";
import Modal from "react-modal";
import { CarImage } from "../Car/Car.styled";
import { uid } from "uid";
import {
  CloseModal,
  ImagesList,
  ModalDescription,
  ModalLocationAndRating,
  ModalName,
  ModalPrice,
  PopUpsBtnContainer,
  PopupsBtns,
} from "./CarModal.styled";
import { FeaturesPopUp } from "../FeaturesPopUp/FeaturesPopUp";
import { ReviewsPopUp } from "../ReviewsPopUp/ReviewsPopUp";
import { Icon } from "../Icon/Icon";

const customStyles = {
  overlay: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    padding: "40px 0 40px 0",
    background: "rgba(0, 0, 0, 0.8)",
  },

  content: {
    position: "relative",
    width: "982px",
    height: "700px",
    margin: "0 auto",
    top: "0",
    borderRadius: "4px",
    outline: "none",
    padding: "20px 20px 40px 20px",
  },
};

Modal.setAppElement("#root");

export const CarModal = ({ modalIsOpen, closeModal, car }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (modalIsOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = parseInt(document.body.style.top || "0");
      document.body.style.overflow = originalOverflow;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY * -1);
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = "";
      document.body.style.top = "";
    };
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Car Modal"
    >
      <div>
        <CloseModal onClick={() => closeModal()}>
          <Icon width={32} height={32} iconId={"close"} />
        </CloseModal>
        <ModalName>{car.name}</ModalName>
        <ModalLocationAndRating>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon width={16} height={16} iconId={"star-yellow"} />
            <p style={{ marginLeft: "4px" }}>
              {car.rating} <span>({car.reviews.length || 0} Reviews)</span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "16px",
            }}
          >
            <Icon width={16} height={16} iconId={"map-pin"} />
            <span style={{ marginLeft: "4px" }}>
              <p>{car.location}</p>
            </span>
          </div>
        </ModalLocationAndRating>
        <ModalPrice>€{car.price}.00</ModalPrice>
        <ImagesList>
          {car.gallery.map((el) => {
            return <CarImage $bgImage={el} key={uid()}></CarImage>;
          })}
        </ImagesList>
        <ModalDescription>{car.description}</ModalDescription>
        <PopUpsBtnContainer>
          <PopupsBtns
            onClick={() => setShowPopUp(!showPopUp)}
            className={showPopUp ? "" : "isOpen"}
          >
            Features
          </PopupsBtns>
          <PopupsBtns
            onClick={() => setShowPopUp(!showPopUp)}
            className={showPopUp ? "isOpen" : ""}
          >
            Reviews
          </PopupsBtns>
        </PopUpsBtnContainer>
        {showPopUp ? (
          <ReviewsPopUp reviews={car.reviews || []} />
        ) : (
          <FeaturesPopUp car={car} />
        )}
      </div>
    </Modal>
  );
};
