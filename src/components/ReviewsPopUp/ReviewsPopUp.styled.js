import styled from "styled-components";

export const ReviewsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`;

export const Review = styled.li``;

export const ReviewHeader = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`;

export const ReviewImageLetter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  padding: 15px 21px;

  font-size: ${(p) => p.theme.fonts.bigSize};
  font-weight: ${(p) => p.theme.fonts.bold};

  color: ${(p) => p.theme.colors.red};
  background-color: ${(p) => p.theme.colors.mainWhite};
  border-radius: ${(p) => p.theme.radius.rewiewLogo};
`;

export const ReviewerName = styled.p`
  font-size: ${(p) => p.theme.fonts.smSize};
  font-weight: ${(p) => p.theme.fonts.bold};
`;

export const ReviewHeaderWrapper = styled.div``;

export const ReviewComment = styled.p``;
