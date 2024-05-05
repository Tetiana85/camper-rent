import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const CarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LoadMore = styled.button`
  width: 145px;
  height: 56px;

  margin: 0 auto;

  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.loadMoreBorderColor};
  border-radius: ${(p) => p.theme.radius.xlg};

  transition: border ${(p) => p.theme.transition.transitionDurAndFunc};

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.red};
  }
`;
