import React, { Component } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import PayForm from "./PayForm";
import CardManagePage from "../Pages/CardManagePage";
import TransactionPage from "../Pages/TransactionPage";
class Functionalities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <TransactionPage />
            </Col>
            <Col>
              <PayForm />
            </Col>
            <Col>
              <CardManagePage />
            </Col>
          </Row>
        </Container>{" "}
      </div>
    );
  }
}

export default Functionalities;
