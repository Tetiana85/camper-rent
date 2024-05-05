import { RotatingLines } from "react-loader-spinner";
import { LoaderContainer, Backbrop } from "./Loader.styled";

export const Loader = () => {
  return (
    <Backbrop>
      <LoaderContainer>
        <RotatingLines
          strokeColor="#D84343"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </LoaderContainer>
    </Backbrop>
  );
};
