import React from 'react'


const Review = props => {
	const data = props.allData

	//grabbing the save button to use in calling the handleClick function and to be able to save data in the LocalStorage
	const saveBtn = document.querySelector('#next-button');
	saveBtn.addEventListener('click', () => { props.handleClick(data) })

	return(
		<div className="container review">
			<h3>Review</h3>
			<div className="topReview" >
				<div className="contactInfo">
					<h4>Contact Information<button className="editBtn" onClick={() => props.showModal('contact')}>edit</button></h4>
					<p>First Name: {data.firstName} </p>
					<p>Last Name: {data.lastName} </p>
					<p>Email Address: {data.email} </p>
					<p>Phone Number: {data.phone} </p>
				</div>
				<div className="addressInfo">
					<h4>Address Information<button className="editBtn" onClick={() => props.showModal('address')}>edit</button></h4>
					<p>Street 1: {data.streetOne} </p>
					<p>Street 2: {data.streetTwo} </p>
					<p>City: {data.city} </p>
					<p>State: {data.state} </p>
					<p>Zip Code: {data.zipcode} </p>
				</div>
			</div>
			<hr />
			{data.commentType && <h3>{data.commentType}<button className="editBtn" onClick={() => props.showModal('comment')}>edit</button></h3>}
			<p>{data.commentText}</p>
			<hr />
		</div>
	)
}

export default Review
