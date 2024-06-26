import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

export const Header = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${theme.colors.red};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 150px;
  font-size: ${theme.fonts.bigSize};
  font-weight: ${theme.fonts.bold};
`;

export const Link = styled(NavLink)`
  align-items: center;
  padding: 6px 10px;
  border-radius: 10px;
  text-decoration: none;
  transition: box-shadow 0.5s, color 0.5s, transform 0.5s ease-in-out;
  color: ${theme.colors.dark};

  &.active {
    transform: scale(1.1);
    color: ${theme.colors.red};
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${theme.colors.red};
  }
`;
const slideIn = keyframes`
  0% {
    transform: translateX(-2000%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  opacity: 1;
  animation: ${slideIn} 4s forwards;
`;
