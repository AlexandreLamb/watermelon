import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Pay from "./Pay";
class PayForm extends Component {
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
              <Pay mode="out" />
            </Col>
            <Col>
              <Pay mode="in" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PayForm;
