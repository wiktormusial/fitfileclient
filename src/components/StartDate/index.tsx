import { useAppSelector } from "../../hooks/redux/hooks";
import { selectState } from "../../store/infos/infosSlice";
import dataParser from "../../utils/dateParser/dateParser";

const StartDate = () => {
  const startDate = useAppSelector(selectState).data_start;
  return <div>Start date: {dataParser(startDate)}</div>;
};

export default StartDate;
