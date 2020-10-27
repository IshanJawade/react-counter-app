import React, { Component } from 'react';

class Counter extends Component {
    // state is a object in JavaScript
    state = { 
        count: 0,
        name:"Ishan",
        
    }


    // This construction syntax is used to access object in the event handler
    constructor(){
        super(); 
        this.handleIncreament = this.handleIncreament.bind(this);
    }

    // onClick event handler Increaments Count 
    handleIncreament(){
        console.log("Increament Cliked", this.state.count + 1);
        this.setState({ count: this.state.count + 1 });
    }

    render() { 

        return (
            <>     
        {/* For counter printing */}
            <span style={this.style} className={this.getDynamicBadges()}>{this.formatCount()}</span>

        {/* For Button */}
            <button onClick={this.handleIncreament} className="btn btn-secondary btn-sm">Increament</button>

            </>
        );
    }

    // for dynamic classes in "ClassName" created method getDynamicBadges()
    getDynamicBadges() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    // to format text dynamically
    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero": count;
    }
    
}
 
export default Counter;
