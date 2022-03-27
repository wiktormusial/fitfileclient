import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";
import dataParser from "../../utils/dateParser/dateParser";
import Card from "../Card";
import { TextHeading, TextLead } from "../Text";

const StartDate = () => {
  const startDate = useAppSelector(selectState).data_start;
  return (
    <Card>
      <TextHeading>Start date:</TextHeading>
      <TextLead>{dataParser(startDate)}</TextLead>
    </Card>
  );
};

export default StartDate;
