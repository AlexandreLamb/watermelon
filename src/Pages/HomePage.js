import React, { Component } from "react";
import { Row, Col, Container, Alert,Button } from "react-bootstrap";
import TransactionForm from "../Components/TransactionForm";
import PayForm from "../Components/PayForm";
import TransfertsPage from "./TransfertsPage";
import CardManagePage from "./CardManagePage";
import TransactionPage from "./TransactionPage";
import LoginPage from "./LoginPage";
import Functionalities from "../Components/Functionalities";
import NavBarHome from "../Components/NavBarHome";
import { apiRequestUser} from "../Utils/api"
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnect: localStorage.getItem("connectUser") ? true : false,
      isUsersLoadByApi : localStorage.getItem("isUsersLoadByApi") ? localStorage.getItem("isUsersLoadByApi") : false
    };
    this.onChangeConnection = this.onChangeConnection.bind(this)
    this.disconectUser = this.disconectUser.bind(this)
  }
  onChangeConnection() {
    this.setState({
      isConnect: localStorage.getItem("connectUser") ? false : true
    });
  }
  disconectUser(){
    localStorage.removeItem("connectUser");
    this.onChangeConnection()
  }
  componentDidMount(){
    if(!this.state.isUsersLoadByApi){
      apiRequestUser();
      localStorage.setItem("isUsersLoadByApi",true)
    }
  }
  
  render() {
    return (
      <div>

        <DisplayConnection
          onChangeConnection={this.onChangeConnection}
          isConnect={this.state.isConnect}
          disconectUser={this.disconectUser}
        />
      </div>
    );
  }
}
function DisplayConnection(props) {
  if (props.isConnect) {
    return (
      <div>
        <Functionalities />
        <Button onClick={props.disconectUser} >Disconect</Button>

      </div>
    );
  } else {
    return <LoginPage onChangeConnection={props.onChangeConnection} />;
  }
}

export default HomePage;
