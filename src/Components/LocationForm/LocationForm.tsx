import React, { FormEvent, memo, MouseEvent, useRef } from "react";
import { Form, LocationInput, LocationLabel, SearchIcon } from "./styles";

interface Props {
  getLocations: (value: string) => Promise<void>;
}

const LocationForm = memo(({ getLocations }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOnKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && inputRef.current?.value) {
      getLocations(inputRef.current.value);
    }
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLImageElement>
  ) => {
    if (inputRef.current?.value) {
      getLocations(inputRef.current.value);
      event.preventDefault();
    }
  };

  return (
    <Form onSubmit={handleSubmit} role="form">
      <LocationLabel>
        <LocationInput
          data-testid="locationInput"
          ref={inputRef}
          placeholder="Search a location"
          onKeyDown={handleOnKeyDown}
          type="text"
        />
        <SearchIcon
          data-testid="searchIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1000px-Search_Icon.svg.png?20181016161702"
          alt="Search icon"
          onClick={handleSubmit}
        />
      </LocationLabel>
    </Form>
  );
});

export default LocationForm;
