import {
  WelcomeWrapper,
  Paragraph,
  Title,
  WelcomeContainer,
  TextContainer,
  TextWrap,
  Button,
} from "./WelcomeLayout.styled";
import { Link } from "react-router-dom";

export const WelcomeLayout = () => {
  return (
    <WelcomeWrapper>
      <WelcomeContainer>
        <TextContainer>
          <Title>Camper Rent Ukraine</Title>
          <TextWrap>
            <Paragraph>
              Welcome to Camper Rent Ukraine, where your adventure begins! At
              Camper Rent Ukraine, we believe that travel is not just about
              destinations but about journeys and new experiences. Our mission
              is to make it easier and more affordable for everyone to explore
              the great outdoors.
            </Paragraph>
            <Paragraph>
              With our wide selection of top-quality campers, you can hit the
              road on your terms, without breaking the bank. Renting a camper
              from us is quick, straightforward, and designed with your
              convenience in mind. Whether you're planning a weekend getaway or
              a cross-country tour, we provide fully-equipped campers to meet
              all your travel needs.
            </Paragraph>
            <Paragraph>
              Join us in embracing the spirit of adventure—where freedom,
              flexibility, and the open road await. Book your camper today and
              start your journey with Camper Rent Ukraine!
            </Paragraph>
          </TextWrap>
        </TextContainer>
        <Link to="/catalog">
          <Button>Book now</Button>
        </Link>
      </WelcomeContainer>
    </WelcomeWrapper>
  );
};
