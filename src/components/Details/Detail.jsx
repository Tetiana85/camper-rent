import { uid } from "uid";
import { TagContainer, TagText } from "./Details.styled";
import { Icon } from "../Icon/Icon";

export const Detail = ({ detail, value, iconId }) => {
  return (
    <TagContainer key={uid()}>
      <Icon width={20} height={20} iconId={iconId} />
      <TagText>
        {value} {detail}
      </TagText>
    </TagContainer>
  );
};
