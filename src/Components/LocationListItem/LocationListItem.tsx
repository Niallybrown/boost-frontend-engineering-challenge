import { memo } from "react";
import { LocationData } from "../../types";
import LocationButton from "../LocationButton/LocationButton";

interface Props {
  location: LocationData;
  onClick: React.MouseEventHandler;
  value: number;
}

const LocationListItem = memo(({ location, onClick, value }: Props) => {
  // Sometimes the data for state can be undefined so remopve it from the string to be displayed
  const text = [location.name, location.state, location.country]
    .filter((item) => !!item)
    .join(", ");
  return (
    <li>
      <LocationButton value={value} text={text} onClick={onClick} />
    </li>
  );
});

export default LocationListItem;
