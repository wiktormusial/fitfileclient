import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";
import dataParser from "../../utils/dateParser/dateParser";
import Card from "../Card";
import { TextHeading, TextLead } from "../Text";

const EndDate = () => {
  const endDate = useAppSelector(selectState).data_end;
  return (
    <Card>
      <TextHeading>End date</TextHeading>
      <TextLead>{dataParser(endDate)}</TextLead>
    </Card>
  );
};

export default EndDate;
