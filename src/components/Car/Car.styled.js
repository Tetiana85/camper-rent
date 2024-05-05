import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const CarItem = styled.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${(p) => p.theme.colors.borderColor};
  border-radius: ${(p) => p.theme.radius.md};

  animation: ${fadeIn} 0.5s ease;

  &.hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    bottom: -100px;
    margin: -1px;
    border: 0;
    padding: 0;

    opacity: 0;
    animation: ${fadeOut} 0.5s ease;

    pointer-events: none;
  }
`;

export const CarImage = styled.div`
  width: 100%;
  height: 310px;

  border-radius: ${(p) => p.theme.radius.sm};
  background-image: url(${(props) => props.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

export const HeadInfocontainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeadName = styled.p`
  width: 370px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${(p) => p.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${(p) => p.theme.fonts.bold};
`;

export const HeadInfo = styled.p`
  font-size: ${(p) => p.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${(p) => p.theme.fonts.bold};
`;

export const FavouriteButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const LocationAndRating = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewsAndStarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-right: 16px;
`;

export const Location = styled.p``;

export const Desctiption = styled.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 23px;

  color: ${(p) => p.theme.colors.grey};
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ShowMoreBtn = styled.button`
  width: 166px;
  height: 56px;

  background-color: ${(p) => p.theme.colors.red};
  border-radius: ${(p) => p.theme.radius.xlg};
  border: none;
  color: ${(p) => p.theme.colors.buttonText};
  transition: background-color ${(p) => p.theme.transition.transitionDurAndFunc};
  &:hover {
    background-color: ${(p) => p.theme.colors.hoverColor};
  }
`;
