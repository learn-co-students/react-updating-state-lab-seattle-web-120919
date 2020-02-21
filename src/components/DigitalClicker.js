import React, {Component} from 'react';

class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    updateTimesClicked = () => {
        this.setState({
            ...this.state,
            timesClicked: this.state.timesClicked+1
        })
    }

    render(){
        return (
            <button onClick={this.updateTimesClicked}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;