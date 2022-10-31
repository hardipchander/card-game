import React from 'react';
import '../Styles/Card.css';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isFlipped:false  
        };
    }

    pressedCard=() => {
        this.setState(state => ({isFlipped: !state.isFlipped}));
    };

    render() {
        if(this.state.isFlipped===false) {
            return (
                <div className="Hidden" onClick={this.pressedCard}>
                    <p></p>
                </div>
            );
        }
        else {
            return (
                <div className='Actual-Card' onClick={this.pressedCard}>
                    <p>#{this.props.number}</p>
                </div>
            );
        }
    }
}

export default Card;