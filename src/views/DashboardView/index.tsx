import Distance from "../../components/Distance";
import Duration from "../../components/Duration";
import EndDate from "../../components/EndDate";
import Map from "../../components/Map";
import StartDate from "../../components/StartDate";

const DashboardView = () => {
  return (
    <>
      <Map />
      <Distance />
      <Duration />
      <StartDate />
      <EndDate />
    </>
  );
};

export default DashboardView;
