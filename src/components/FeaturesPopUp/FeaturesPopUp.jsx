import { Detail } from "../Details/Detail";
import { Details } from "../Details/Details";
import { FeedbackForm } from "../FeedbackForm/FeedbackForm";
import {
  DetailsContainer,
  FeaturedHead,
  FeaturesContainer,
  FeaturesWrapper,
  InfoContainer,
  InfoText,
  InfoWrapper,
} from "./FeaturesPopUp.styled";

export const FeaturesPopUp = ({ car }) => {
  const notSpecified = "not specified";

  return (
    <FeaturesContainer>
      <FeaturesWrapper>
        <DetailsContainer>
          <Detail detail={"adults"} value={car.adults} iconId={"people"} />
          <Detail detail={car.transmission} value={""} iconId={"automatic"} />
          <Details details={car.details} />
        </DetailsContainer>
        <FeaturedHead>Vehicle details</FeaturedHead>
        <InfoContainer>
          <InfoWrapper>
            <InfoText>Form</InfoText>
            <InfoText>{car.form || notSpecified}</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <InfoText>Length</InfoText>
            <InfoText>{car.length || notSpecified}</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <InfoText>Width</InfoText>
            <InfoText>{car.width || notSpecified}</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <InfoText>Height</InfoText>
            <InfoText>{car.height || notSpecified}</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <InfoText>Tank</InfoText>
            <InfoText>{car.tank || notSpecified}</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <InfoText>Consumption</InfoText>
            <InfoText>{car.consumption || notSpecified}</InfoText>
          </InfoWrapper>
        </InfoContainer>
      </FeaturesWrapper>
      <FeedbackForm />
    </FeaturesContainer>
  );
};
