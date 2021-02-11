import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = { 
		counter: [
			{ id:1, value: 0 },
			{ id:1, value: 0 },
			{ id:1, value: 0 },
			{ id:1, value: 0 },
		]
	 };


	render() { 
		return ( 
			<div className='main'>
				<div className='header'>
					Counter Application
				</div>


				<div className='everything' > 
				{/* this will create multiple isolated insatces of counter.jsx */}
				{ this.state.counter.
					map(counter => (<Counter key={counter.id} value={counter.value} />))
				}
				</div> 

				<div className='footer'>
					< button onClick={ () => { window.location.reload() } } 
					className="btn btn-secondary btn-sm" >
					Reset
					</button>
				</div>			
			</div>
		);
	}
}
 
export default Counters;