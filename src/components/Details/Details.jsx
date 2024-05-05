import { uid } from "uid";
import { TagContainer, TagText } from "./Details.styled";
import { Icon } from "../Icon/Icon";

export const Details = ({ details }) => {
  const defineTabsValue = (tab, value) => {
    if (tab === "beds") {
      return value;
    } else if (tab === "hob") {
      return value;
    } else if (tab === "airConditioner") {
      return value;
    }
    return value === 1 ? "" : value;
  };

  const defineTabs = (tab, value) => {
    if (tab === "beds") {
      return value === 1 ? "bed" : tab;
    } else if (tab === "airConditioner") {
      return convertString(tab);
    }
    return tab;
  };

  const convertString = (string) => {
    const firstPart = string.charAt(0).toUpperCase() + string.slice(1, 3);
    const secondPart = string.slice(3).toLowerCase();
    return firstPart + " " + secondPart;
  };
  return (
    <>
      {Object.entries(details).map(([key, value]) => {
        return value === 0 ? (
          <div style={{ display: "none" }} key={uid()}></div>
        ) : (
          <TagContainer key={uid()}>
            <Icon
              width={20}
              height={20}
              iconId={key === "bathroom" ? "toilet" : key.toLowerCase()}
            />
            <TagText>
              {defineTabsValue(key, value)} {defineTabs(key, value)}
            </TagText>
          </TagContainer>
        );
      })}
    </>
  );
};
