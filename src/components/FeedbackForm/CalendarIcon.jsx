import styled from "styled-components";

const Icon = styled.svg`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const CalendarIcon = () => (
  <Icon viewBox="0 0 24 24">
    <svg width="20" height="20">
      <use href="#calendar"></use>
    </svg>
  </Icon>
);
