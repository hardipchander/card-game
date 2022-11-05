import React from 'react';
import App from '../App';
import '../Styles/Card.css';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render() {
        if(this.props.show===false) {
            return (
                <div className="Hidden" onClick={this.props.action}>
                    <p></p>
                </div>
            );
        }
        else {
            return (
                <div className='Actual-Card' onClick={this.props.action}>
                    <p>#{this.props.number}</p>
                </div>
            );
        }
    }
}

export default Card;