import React, { Component } from 'react';

class Counter extends Component {
    // state is a object in JavaScript
    state = { 
        count: 0,
        name:"Ishan",
        imgUrl:"https://picsum.photos/300",
        tags: ['tag1', 'tag2', 'tag3'],
    }

    // Apply style 
    style = {
        //fontSize: 100,
        fontWeight: "bold",
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
        return <ul>
                 { this.state.tags.map( tag => <li key={tag}>{ tag }</li>) }
               </ul>
    }

    render() { 

        return (
            <>     
            <img src={this.state.imgUrl} alt=''/>

           <span style={this.style} className={this.getDynamicBadges()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increament</button>
            {this.renderTags()}
            </>
        );
    }
    
    // for dynamic classes in "ClassName" created method getDynamicBadges()
    getDynamicBadges() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero": count;
    }
}
 
export default Counter;
