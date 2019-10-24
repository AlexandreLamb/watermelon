import React, { Component } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import TransactionForm from "../Components/TransactionForm";
import PayForm from "../Components/PayForm";
import TransfertsPage from "./TransfertsPage";
import CardManagePage from "./CardManagePage";
import TransactionPage from "./TransactionPage";
import LoginPage from "./LoginPage";
import Functionalities from "../Components/Functionalities";
import NavBarHome from "../Components/NavBarHome";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnect: localStorage.getItem("connectUser") ? true : false
    };
  }
  onChangeConnection() {
    this.setState({
      isConnect: localStorage.getItem("connectUser") ? true : false
    });
  }
  render() {
    return (
      <div>
        <DisplayConnection
          onChangeConnection={this.onChangeConnection.bind(this)}
          isConnect={this.state.isConnect}
        />
      </div>
    );
  }
}
function DisplayConnection(props) {
  if (props.isConnect) {
    return (
      <div>
        <Functionalities onChangeConnection={props.onChangeConnection} />
      </div>
    );
  } else {
    return <LoginPage onChangeConnection={props.onChangeConnection} />;
  }
}

export default HomePage;
