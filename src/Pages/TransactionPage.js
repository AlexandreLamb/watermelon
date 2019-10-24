import React, { Component } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import TransactionForm from "../Components/TransactionForm";
import PayForm from "../Components/PayForm";
import TransfertsPage from "./TransfertsPage";
class TransactionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transferts: localStorage.getItem("Transfers")
        ? JSON.parse(localStorage.getItem("Transfers"))
        : []
    };
  }
  onChangeTransaction() {
    this.setState({
      transferts: localStorage.getItem("Transfers")
        ? JSON.parse(localStorage.getItem("Transfers"))
        : []
    },this.props.onChangeBalance());
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <TransfertsPage transferts={this.state.transferts} />
            </Col>
            <Col>
              <TransactionForm
                onChangeTransaction={this.onChangeTransaction.bind(this)}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default TransactionPage;
