import { useDispatch } from 'react-redux';
import { FilterButton } from '../FilterButton/FilterButton';
import {
  CategoriesLine,
  CategoriesText,
  FilterText,
  FiltersButtonContainer,
  Location,
  SearchButton,
  InputWrapper,
  StyledInput,
} from './Filters.styled';
import { changeInputFilter } from '../../redux/filter/filterSlice';
import styled from 'styled-components';

const SVGIcon = ({ iconId, width, height, className }) => (
  <svg className={className} width={width} height={height}>
    <use href={`./sprite.svg#${iconId}`}></use>
  </svg>
);

const StyledSVGIcon = styled(SVGIcon)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  z-index: 1;
`;

export const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Location>Location</Location>
        <InputWrapper>
          <StyledSVGIcon iconId="map-pin" />
          <StyledInput
            onChange={(e) => dispatch(changeInputFilter(e.target.value))}
            name="location"
            type="text"
            placeholder="Kyiv, Ukraine"
          />
        </InputWrapper>
      </div>
      <FilterText>Filters</FilterText>
      <div>
        <CategoriesText>Vehicle equipment</CategoriesText>
        <CategoriesLine></CategoriesLine>
        <FiltersButtonContainer>
          <FilterButton id="airConditioner" iconType="equipment" text="AC" />
          <FilterButton id="automatic" iconType="equipment" text="Automatic" />
          <FilterButton id="kitchen" iconType="equipment" text="Kitchen" />
          <FilterButton id="tv" iconType="equipment" text="TV" />
          <FilterButton id="shower" iconType="equipment" text="Shower/WC" />
        </FiltersButtonContainer>
        <CategoriesText>Vehicle type</CategoriesText>
        <CategoriesLine></CategoriesLine>
        <FiltersButtonContainer>
          <FilterButton id="paneltruck" iconType="vehicle" text="Van" />
          <FilterButton
            id="fullyintegrated"
            iconType="vehicle"
            text="Fully Integrated"
          />
          <FilterButton id="alcove" iconType="vehicle" text="Alcove" />
        </FiltersButtonContainer>
      </div>
      <SearchButton>Search</SearchButton>
    </div>
  );
};
