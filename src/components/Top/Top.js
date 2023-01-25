import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../../context/UserContext';
import { logoutUser } from '../../services/magic';
import { Col, Container, Row } from "react-bootstrap";
import "./Top.css";



function Top(props) {
  const { email } = useContext(UserContext);
  const history = useHistory();
  const handleLogOut = async () => {
    try {
      await logoutUser();
      history.replace('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container fluid >
      <Row className="topMain">
          <Col xs={10}>
          <div className="topHeading1">
              Client Dashboard  
          </div>
          </Col>
          <Col xs={2}>
          <div style={{marginTop:"40px"}}>
            <Button variant="primary" onClick={handleLogOut}>
              Sign Out
            </Button>
            </div>
          </Col>
          <Col xl={12}>
          <div className="topHeading2">
              {props.name}
          </div>
          </Col>
      </Row>
    </Container>
  );
}
export default Top;
