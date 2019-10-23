import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Transfert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>{this.props.amout} $ to {this.props.to}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Transfert;
