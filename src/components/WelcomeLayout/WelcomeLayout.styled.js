import styled from 'styled-components';
import { theme } from '../../theme';

export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-image: url('./hero.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  border-radius: 30px;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  color: ${theme.colors.buttonText};
  max-width: 700px;
  text-align: center;
  align-items: center;
  gap: 30px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: ${theme.colors.hoverColor};
  text-align: center;
  text-shadow:
    -0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
    0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
    -0.5px 0.5px 0 rgba(255, 255, 255, 0.5),
    0.5px 0.5px 0 rgba(255, 255, 255, 0.5);
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
`;

export const Paragraph = styled.p`
  text-align: start;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 160px;
  height: 56px;
  border-radius: 200px;
  background-color: ${theme.colors.red};
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.5%;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: none;
  transition: transform 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${theme.colors.red};
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
