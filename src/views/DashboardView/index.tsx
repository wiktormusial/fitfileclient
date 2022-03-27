import { Col, Container, Row } from "react-bootstrap";
import AvgSpeed from "../../components/AvgSpeed";
import Distance from "../../components/Distance";
import Duration from "../../components/Duration";
import EndDate from "../../components/EndDate";
import Map from "../../components/Map";
import StartDate from "../../components/StartDate";

const DashboardView = () => {
  return (
    <Container>
      <Row>
        <Col md="12" lg="6">
          <Map />
        </Col>
        <Col lg="6">
          <Row>
            <Col lg="6">
              <Distance />
            </Col>
            <Col lg="6">
              <Duration />
            </Col>
          </Row>
          <AvgSpeed />
          <StartDate />
          <EndDate />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardView;
