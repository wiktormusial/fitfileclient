import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";
import Card from "../Card";
import { TextHeading, TextLead } from "../Text";

const Duration = () => {
  const duration = useAppSelector(selectState).duration;
  return (
    <Card>
      <TextHeading>Duration</TextHeading>
      <TextLead>{duration}</TextLead>
    </Card>
  );
};

export default Duration;
