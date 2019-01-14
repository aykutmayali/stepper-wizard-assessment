import React from 'react'

export default () => {
	return(
		<div className="container" >
			<h2>Your response has been saved! Thanks!</h2>
			<button className="btn btn-primary confirmBtn" onClick={ () => window.location.reload() } >Done</button>
		</div>
	)
}
