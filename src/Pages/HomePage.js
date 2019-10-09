import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    render(){
        return(
            <div>
              Transaction recentes
              {this.props.email}
            </div>
        )
    }


}
export default HomePage;