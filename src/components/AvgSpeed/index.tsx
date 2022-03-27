import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";

const AvgSpeed = () => {
  const avgSpeed = useAppSelector(selectState).avg_speed;
  return <div>Avg Speed: {avgSpeed}km/h</div>;
};

export default AvgSpeed;
