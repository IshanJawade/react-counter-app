import React, { Component } from 'react';

class Counter extends Component {
    // state is a object in JavaScript
    state = { 
        value: 0,
    }


    // This construction syntax is used to access object in the event handler
    constructor(){
        super(); 
        this.handleIncreament = this.handleIncreament.bind(this);
    }

    // onClick event handler Decreaments Count 
    handleDencreament = (product) => {
        // This line will tell the react that the state is going to be changed
        this.state.value > 0 ? this.setState({ value: this.state.value - 1 }) : 
        this.state.value = 0;
    }

    // onClick event handler Increaments Count 
    handleIncreament = (product) => {
        // This line will tell the react that the state is going to be changed
        this.setState({ value: this.state.value + 1 });
    }


    render() { 
        console.log('props', this.props);

        return (
            <> {/* Div*/}
        {/* For Button */}
        < button onClick={ () => { this.handleDencreament({ id: 1 } ); } } 
            className="btn btn-secondary btn-sm" >
                Decreament
            </button>

        {/* For counter printing */}
            <span style={this.style} className={this.getDynamicBadges()}>{this.formatCount()}</span>

        {/* For Button */}
            < button onClick={ () => { this.handleIncreament ({ id: 1 } ); } } 
            className="btn btn-secondary btn-sm" >
            Increament
            </button>
            <br/>
            </> // End of  Div
        );
    }

    // for dynamic classes in "ClassName" created method getDynamicBadges()
    getDynamicBadges() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    // to format text dynamically
    formatCount(){
        const { value } = this.state;
        return value === 0 ? "Zero": value;
    }
    
}
 
export default Counter;
