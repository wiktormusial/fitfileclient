import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";
import dataParser from "../../utils/dateParser/dateParser";

const EndDate = () => {
  const endDate = useAppSelector(selectState).data_end;
  return <div>End date: {dataParser(endDate)}</div>;
};

export default EndDate;
