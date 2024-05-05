import { useDispatch } from "react-redux";
import { Icon } from "../Icon/Icon";
import {
  ButtonContentContainer,
  FilterButtonStyled,
} from "./FilterButton.styled";
import {
  toogleEquipmentFilter,
  toogleTypeFilter,
} from "../../redux/filter/filterSlice";
import { useState } from "react";

export const FilterButton = ({ id, iconType, text }) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const toogleFilter = () => {
    const toggleAction =
      iconType === "equipment" ? toogleEquipmentFilter : toogleTypeFilter;

    dispatch(toggleAction(id.toLowerCase()));
    setIsSelected(!isSelected);
  };

  return (
    <FilterButtonStyled
      className={isSelected ? "isSelected" : ""}
      onClick={() => toogleFilter()}
    >
      <ButtonContentContainer>
        <Icon
          iconId={id}
          width={iconType === "equipment" ? 32 : 40}
          height={iconType === "equipment" ? 32 : 28}
        />
        <p>{text}</p>
      </ButtonContentContainer>
    </FilterButtonStyled>
  );
};
