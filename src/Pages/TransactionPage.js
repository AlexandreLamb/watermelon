import React, { Component } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import TransactionForm from "../Components/TransactionForm";
import PayForm from "../Components/PayForm";
import TransfertsPage from "./TransfertsPage";
import { returnTransfertsIn, returnTransfertsOut } from "../Utils/utils";
import NavBarHome from "../Components/NavBarHome";
class TransactionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transfertsIn: returnTransfertsIn(),
      transfertsOut : returnTransfertsOut()
    };
  }
  onChangeTransaction() {
    this.setState({
      transfertsIn: returnTransfertsIn(),
      transfertsOut : returnTransfertsOut()
    },this.props.onChangeBalance());
  }
  renderGoBack() {
    if (this.props.isRenderByRouter) {
      return (
        <NavBarHome/>
        );
    }
  }

  render() {
    return (
      <div>
        {this.renderGoBack()}
          <Row>
            <Col>
              <TransfertsPage transfertsOut={this.state.transfertsOut} transfertsIn={this.state.transfertsIn} />
            </Col>
            <Col>
              <TransactionForm
                onChangeTransaction={this.onChangeTransaction.bind(this)}
              />
            </Col>
          </Row>
      </div>
    );
  }
}
export default TransactionPage;
