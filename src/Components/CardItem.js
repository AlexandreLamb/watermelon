import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


class CardItem extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    render(){
        return(
            <div>
               <Cards
                cvc={this.props.cvc}
                expiry={this.props.expiry}
                name={this.props.name}
                number=""
                />
            </div>
        )
    }


}
export default CardItem;