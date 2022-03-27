import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import AvgSpeed from "../../components/AvgSpeed";
import Distance from "../../components/Distance";
import Duration from "../../components/Duration";
import EndDate from "../../components/EndDate";
import Map from "../../components/Map";
import StartDate from "../../components/StartDate";
import { useAppSelector } from "../../hooks/redux/hooks";
import { selectStatus } from "../../store/infos/infosSlice";
import CardSkeleton from "../../components/CardSkeleton";

const Dashboard = styled.div`
  margin-top: 2em;
`;

const DashboardView = () => {
  const status = useAppSelector(selectStatus);

  return (
    <Dashboard>
      <Container>
        <Row>
          <Col md="12" lg="6">
            {status === "loading" ? <CardSkeleton size={400} /> : <Map />}
          </Col>
          <Col lg="6">
            {status === "loading" ? <CardSkeleton /> : <AvgSpeed />}
            <Row>
              <Col lg="6">
                {status === "loading" ? <CardSkeleton /> : <Distance />}
              </Col>
              <Col lg="6">
                {status === "loading" ? <CardSkeleton /> : <Duration />}
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                {status === "loading" ? <CardSkeleton /> : <StartDate />}
              </Col>
              <Col lg="6">
                {status === "loading" ? <CardSkeleton /> : <EndDate />}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Dashboard>
  );
};

export default DashboardView;
