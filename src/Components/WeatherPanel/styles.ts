import styled from "styled-components";

export const WeatherPanelWrapper = styled.div`
  padding: 0 1rem 0;
  text-align: center;
`;

export const WeatherPanelStat = styled.div`
  &:first-child(1) {
    margin-bottom: 20px;
    color: red !important;
  }
  border-bottom: solid 1px #eee;
  padding: 0.5rem;
`;
