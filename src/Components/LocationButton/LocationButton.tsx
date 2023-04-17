import { memo } from "react";
import { StyledLocationButton } from "./styles";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  text: string;
}

const LocationButton = memo(({ text, value, onClick }: Props) => (
  <StyledLocationButton type="button" value={value} onClick={onClick}>
    {text}
  </StyledLocationButton>
));

export default LocationButton;
