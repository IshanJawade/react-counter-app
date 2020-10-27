import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = { 
		counter: [
			{ id:1, value: 4 },
			{ id:1, value: 0 },
			{ id:1, value: 0 },
			{ id:1, value: 0 },
		]
	 };


	render() { 
		return ( 
		<> 
		{/* this will create multiple isolated insatces of counter.jsx */}
			{ this.state.counter.
				map(
					counter => (
						<Counter key={counter.id} value={counter.value} /> 
					)
				)
			}
		</> 
		);
	}
}
 
export default Counters;