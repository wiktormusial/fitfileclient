import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import AvgSpeed from "../../components/AvgSpeed";
import Distance from "../../components/Distance";
import Duration from "../../components/Duration";
import EndDate from "../../components/EndDate";
import Map from "../../components/Map";
import StartDate from "../../components/StartDate";

const Dashboard = styled.div`
  margin-top: 2em;
`;

const DashboardView = () => {
  return (
    <Dashboard>
      <Container>
        <Row>
          <Col md="12" lg="6">
            <Map />
          </Col>
          <Col lg="6">
            <AvgSpeed />
            <Row>
              <Col lg="6">
                <Distance />
              </Col>
              <Col lg="6">
                <Duration />
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <StartDate />
              </Col>
              <Col lg="6">
                <EndDate />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Dashboard>
  );
};

export default DashboardView;
