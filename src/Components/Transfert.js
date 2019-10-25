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
        <DisplayTransfert
          mode={this.props.mode}
          amout={this.props.amout}
          from={this.props.from}
          to={this.props.to}
        />
      </div>
    );
  }
}
function DisplayTransfert(props) {
  if (props.mode == "in") {
    return (
      <Container>
        <Row>
          <Col>
            {props.amout} $ from {props.from}{" "}
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col>
            {props.amout} $ to {props.to}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Transfert;
