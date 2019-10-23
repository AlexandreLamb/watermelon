import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import TransactionForm from "../Components/TransactionForm";
import PayForm from "../Components/PayForm";
class HomePage extends Component {
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
              <TransactionForm />
            </Col>
            <Col>
              <PayForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default HomePage;
