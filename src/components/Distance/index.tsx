import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";

const Distance = () => {
  const distance = useAppSelector(selectState).distance;
  return <div>Distance: {distance}km</div>;
};

export default Distance;
