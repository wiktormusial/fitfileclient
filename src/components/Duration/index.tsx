import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";

const Duration = () => {
  const duration = useAppSelector(selectState).duration;
  return <>Duration: {duration}</>;
};

export default Duration;
