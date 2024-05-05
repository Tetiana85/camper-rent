import styled from "styled-components";

export const Location = styled.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`;

export const FilterText = styled.p`
  margin-top: 32px;
  margin-bottom: 14px;
  color: rgba(71, 84, 103, 1);
`;

export const CategoriesText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const CategoriesLine = styled.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`;

export const FiltersButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`;

export const SearchButton = styled.button`
  width: 173px;
  height: 56px;
  margin-top: 32px;

  background-color: ${(p) => p.theme.colors.red};
  border-radius: ${(p) => p.theme.radius.xlg};
  border: none;
  color: ${(p) => p.theme.colors.buttonText};

  transition: background-color ${(p) => p.theme.transition.transitionDurAndFunc};

  &:hover {
    background-color: ${(p) => p.theme.colors.hoverColor};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 18px 18px 18px 40px;
  border: none;
  border-radius: ${(p) => p.theme.radius.sm};
  background-color: ${(p) => p.theme.colors.white};
  outline: none;
`;
