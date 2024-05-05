import styled from "styled-components";

export const FeaturesContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const FeaturesWrapper = styled.div`
  width: 430px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`;

export const FeaturedHead = styled.p`
  padding-bottom: 24px;
  border-bottom: 1px solid ${(p) => p.theme.colors.borderColor};
  font-size: ${(p) => p.theme.fonts.mdSize};
  font-weight: ${(p) => p.theme.fonts.bold};
`;

export const InfoContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoText = styled.p`
  font-size: ${(p) => p.theme.fonts.smSize};
  font-weight: ${(p) => p.theme.fonts.md};
`;
