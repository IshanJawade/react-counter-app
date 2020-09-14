import React, { Component } from 'react';

class Counter extends Component {
    // state is a object in JavaScript
    state = { 
        count: 0,
        name:"Ishan",
        imgUrl:"https://picsum.photos/300",
        tags: ['tag1', 'tag2', 'tag3'],
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
            {this.renderTags()}
            </>
        );
    }
    
}
 
export default Counter;
