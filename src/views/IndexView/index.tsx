import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import { useAppDispatch } from "../../hooks/redux/hooks";
import { dataAdded, setLoading } from "../../store/infos/infosSlice";
import uploadFile from "../../api/uploadFile/uploadFIle";
import { CardIndex } from "../../components/Card";
import { TextLead } from "../../components/Text";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const IndexView = () => {
  const [file, setFile] = useState<File>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getData = () => {
    if (file) {
      uploadFile(file)
        .then((res) => {
          dispatch(dataAdded(res));
        })
        .catch((err) => console.log(err));
    }
    dispatch(setLoading());
    navigate("/dashboard");
  };

  return (
    <Wrapper>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <CardIndex>
          <Row>
            <Col sm={12}>
              <TextLead center>Fit file viewer</TextLead>
            </Col>
            <Col sm={12}>
              <Input
                type="file"
                onChange={(e) => setFile(e.target.files![0])}
              />
              <br />
              <Button onClick={() => getData()}>Upload</Button>
            </Col>
          </Row>
        </CardIndex>
      </Container>
    </Wrapper>
  );
};

export default IndexView;
