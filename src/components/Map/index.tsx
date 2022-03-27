import { useRef, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux/hooks";
import { selectCoords, selectStatus } from "../../store/infos/infosSlice";
import L, { LatLngTuple } from "leaflet";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import { TextHeading } from "../Text";

const Preview = styled.div`
  height: 500px;
  width: 100%;
`;

const Map = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const status = useAppSelector(selectStatus);
  const coords = useAppSelector(selectCoords);

  useEffect(() => {
    if (ref.current && status === "succeeded") {
      const map = L.map(ref.current).setView([coords[0].x, coords[0].y], 10);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const latlong: LatLngTuple[] = [];
      coords.forEach((item) => latlong.push([item.x, item.y]));
      L.polyline(latlong).addTo(map);
    } else {
      navigate("/");
    }
  }, [coords, navigate, status]);

  return (
    <Card>
      <TextHeading>Map</TextHeading>
      <Preview ref={ref}></Preview>
    </Card>
  );
};

export default Map;
