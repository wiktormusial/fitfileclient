import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";
import Card from "../Card";
import { TextHeading, TextLead } from "../Text";

const Distance = () => {
  const distance = useAppSelector(selectState).distance;
  return (
    <Card>
      <TextHeading>Distance</TextHeading>
      <TextLead>{distance}km</TextLead>
    </Card>
  );
};

export default Distance;
