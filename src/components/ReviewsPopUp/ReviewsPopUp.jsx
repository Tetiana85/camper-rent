import { uid } from "uid";
import {
  Review,
  ReviewComment,
  ReviewHeader,
  ReviewHeaderWrapper,
  ReviewImageLetter,
  ReviewList,
  ReviewerName,
  ReviewsContainer,
  StarsContainer,
} from "./ReviewsPopUp.styled";
import { Icon } from "../Icon/Icon";
import { FeedbackForm } from "../FeedbackForm/FeedbackForm";

export const ReviewsPopUp = ({ reviews }) => {
  const renderStars = (rating) => {
    const yellowStars = Math.floor(rating);
    const grayStars = 5 - yellowStars;

    const stars = [];
    for (let i = 0; i < yellowStars; i++) {
      stars.push(
        <Icon width={16} height={16} key={`star-${i}`} iconId={"star-yellow"} />
      );
    }
    for (let i = 0; i < grayStars; i++) {
      stars.push(
        <Icon width={16} height={16} key={`gray-star-${i}`} iconId={"star"} />
      );
    }
    return stars;
  };
  return (
    <ReviewsContainer>
      <ReviewList>
        {reviews.map((review) => {
          return (
            <Review key={uid()}>
              <ReviewHeader>
                <ReviewImageLetter>
                  {review.reviewer_name
                    ? review.reviewer_name.charAt(0).toUpperCase()
                    : "A"}
                </ReviewImageLetter>
                <ReviewHeaderWrapper>
                  <ReviewerName>
                    {review.reviewer_name ? review.reviewer_name : "anonim"}
                  </ReviewerName>
                  <StarsContainer>
                    {renderStars(review.reviewer_rating)}
                  </StarsContainer>
                </ReviewHeaderWrapper>
              </ReviewHeader>
              <ReviewComment>{review.comment}</ReviewComment>
            </Review>
          );
        })}
      </ReviewList>
      <FeedbackForm />
    </ReviewsContainer>
  );
};
