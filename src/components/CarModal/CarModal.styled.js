import styled, { keyframes } from "styled-components";

export const CloseModal = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  border: none;
  background-color: transparent;
`;

export const ModalName = styled.p`
  font-size: ${(p) => p.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${(p) => p.theme.fonts.bold};
  margin-bottom: 10px;
`;

export const ModalLocationAndRating = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalPrice = styled.p`
  font-size: ${(p) => p.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${(p) => p.theme.fonts.bold};
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const ImagesList = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ModalDescription = styled.p`
  color: ${(p) => p.theme.colors.grey};
`;

export const PopUpsBtnContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${(p) => p.theme.colors.borderColor};
`;

const expandAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

export const PopupsBtns = styled.button`
  position: relative;
  font-size: ${(p) => p.theme.fonts.mdSize};
  font-weight: ${(p) => p.theme.fonts.bold};
  border: none;
  background-color: transparent;
  padding-bottom: 24px;

  &.isOpen {
    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: -3px;
      width: 85px;
      height: 5px;
      background-color: ${(p) => p.theme.colors.red};
      animation: ${expandAnimation} 0.3s ease-out forwards;
    }
  }
`;
