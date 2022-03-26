import { useRef, useEffect } from "react";
import { useAppSelector } from "../../hooks/redux/hooks";
import { selectCoords, selectStatus } from "../../store/infos/infosSlice";
import L, { LatLngTuple } from "leaflet";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const status = useAppSelector(selectStatus);
  const coords = useAppSelector(selectCoords);

  useEffect(() => {
    if (ref.current && status === "succeeded") {
      const map = L.map(ref.current).setView([coords[0].x, coords[0].y], 10);

      L.tileLayer(
        `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_KEY}`,
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: process.env.REACT_APP_MAPBOX_KEY,
        }
      ).addTo(map);

      const latlong: LatLngTuple[] = [];
      coords.forEach((item) => latlong.push([item.x, item.y]));
      L.polyline(latlong).addTo(map);
    } else {
      navigate("/");
    }
  }, [coords, navigate, status]);

  return <div ref={ref} style={{ height: 400, width: 600 }}></div>;
};

export default Map;
