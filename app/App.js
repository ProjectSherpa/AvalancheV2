import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				Hello Reactly!
			</div>
		)
	}
}

ReactDOM.render( <App />, document.getElementById( 'react' ) );
