import React from 'react'

const ContactForm = props => {
	const data = props.contactData

	return (
		<div className="container contactForm">
			{data.isModalOpen ? <h3>Edit Information</h3> : <h3>Contact Information</h3>}
			<form onSubmit={props.onClose}>
				<div className="form-group" >
					<label>First Name </label>
					<input type="text" name="firstName" value={data.firstName} onChange={props.handleChange} className="form-control" required/>
				</div>
				<div className="form-group" >
					<label>Last Name </label>
					<input type="text" name="lastName" value={data.lastName} onChange={props.handleChange} className="form-control" required/>
				</div>
				<div className="form-group" >
					<label>Email Address </label>
					<input type="text" name="email" value={data.email} onChange={props.handleChange} className="form-control" required/>
				</div>
				<div className="form-group" >
					<label>Phone Number </label>
					<input type="text" name="phone" value={data.phone}onChange={props.handleChange} className="form-control" required/>
				</div>
				{data.isModalOpen && <button className="btn btn-primary modalBtn">Save and Close</button>}
			</form>
		</div>
	)
}

export default ContactForm
