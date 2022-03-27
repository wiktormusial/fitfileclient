import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";
import Card from "../Card";
import { TextHeading, TextLead } from "../Text";

const AvgSpeed = () => {
  const avgSpeed = useAppSelector(selectState).avg_speed;
  return (
    <Card>
      <TextHeading>Average speed</TextHeading>
      <TextLead>{avgSpeed}km/h</TextLead>
    </Card>
  );
};

export default AvgSpeed;
