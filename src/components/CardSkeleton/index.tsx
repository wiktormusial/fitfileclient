import Skeleton from "react-loading-skeleton";
import Card from "../Card";
import { TextHeading, TextLead } from "../Text";

interface Props {
  size?: number;
}

const CardSkeleton: React.FC<Props> = ({ size }) => {
  return (
    <Card>
      <TextHeading>
        <Skeleton />
      </TextHeading>
      <TextLead>{size ? <Skeleton height={size} /> : <Skeleton />}</TextLead>
    </Card>
  );
};

export default CardSkeleton;
