import { useRef, useEffect } from "react";
import L from "leaflet";

const Map = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const map = L.map(ref.current).setView([50.96507, 7.11468], 10);

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
    }
  }, []);

  return <div ref={ref} style={{ height: 400, width: 600 }}></div>;
};

export default Map;
