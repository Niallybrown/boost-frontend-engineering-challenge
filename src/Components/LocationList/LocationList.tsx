import { memo } from "react";
import { LocationData } from "../../types";
import LocationListItem from "../LocationListItem/LocationListItem";
import { LocationListWrapper, StyledLocationList } from "./styles";

interface Props {
  locations: LocationData[];
  onClick: React.MouseEventHandler;
}

const LocationList = memo(({ locations, onClick }: Props) => (
  <LocationListWrapper>
    <h5 style={{ margin: "0 0 0.5rem" }}>Select a location:</h5>
    <StyledLocationList>
      {locations.map((location, index) => (
        <LocationListItem
          location={location}
          onClick={onClick}
          value={index}
          key={`${location.lat}-${location.lon}`}
        />
      ))}
    </StyledLocationList>
  </LocationListWrapper>
));

export default LocationList;
