import React, { Component } from "react";
import {
  Button,
  FormControl,
  ListGroup,
  FormGroup,
  FormLabel
} from "react-bootstrap";
class FormSearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: "",
      userResult: [],
      userSelect: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchUser = this.searchUser.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      this.searchUser
    );
  }
  searchUser() {
    let users = JSON.parse(localStorage.getItem("Users"));
    let userLike = [];
    users.forEach(user => {
      if (
        user.email.includes(this.state.userSearch) &&
        this.state.userSearch != ""
      ) {
        console.log(
          user.email +
            " " +
            this.state.userSearch +
            " " +
            user.email.includes(this.state.userSearch) &&
            this.state.userSearch != ""
        );
        userLike.push(user.email);
      }
    });
    this.setState({
      userResult: userLike
    });
    this.props.onChangeUserSelect("");
    this.setState({
        userSelect : ""
    })
  }
  handleSelect(eventKey) {
    this.setState(
      {
        userSelect: eventKey
      },
      this.props.onChangeUserSelect(eventKey)
    );
  }

  render() {
    return (
      <div>
        <FormGroup>
          <FormLabel>Search user</FormLabel>
          <FormControl
            type="text"
            placeholder="User"
            className="mr-sm-2"
            name="userSearch"
            onChange={this.handleChange}
            value={this.state.userSearch}
          />
        </FormGroup>
        <ListGroup onSelect={this.handleSelect}>
          Result of search
          {this.state.userResult.map(result => (
            <ListGroup.Item active={false} key={result} eventKey={result}>
              {result}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
export default FormSearchUser;
