import React, { Component } from "react";
import { Button } from "react-bootstrap";
import LoginPage from "./LoginPage";
import Functionalities from "../Components/Functionalities";
import { apiRequestUser } from "../Utils/api";
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnect: localStorage.getItem("connectUser") ? true : false,
            isUsersLoadByApi: localStorage.getItem("isUsersLoadByApi")
                ? localStorage.getItem("isUsersLoadByApi")
                : false
        };
        this.onChangeConnection = this.onChangeConnection.bind(this);
        this.disconectUser = this.disconectUser.bind(this);
    }
    onChangeConnection(props) {
        console.log(props);
        this.setState({
            isConnect: props
        });
        console.log(this.state.isConnect);
    }
    disconectUser() {
        localStorage.removeItem("connectUser");
        this.onChangeConnection(false);
    }
    componentDidMount() {
        if (!this.state.isUsersLoadByApi) {
            apiRequestUser();
            localStorage.setItem("isUsersLoadByApi", true);
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
                <Button onClick={props.disconectUser}>Disconect</Button>
            </div>
        );
    } else {
        return <LoginPage onChangeConnection={props.onChangeConnection} />;
    }
}

export default HomePage;
