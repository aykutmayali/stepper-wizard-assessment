import React from 'react'

export default props => {
	const data = props.addressData

	return (
		<div className="container addressForm">
			{data.isModalOpen ? <h3>Edit Address</h3> : <h3>Address Information</h3>}
			<form onSubmit={props.onClose}>
				<div className="form-group" >
					<label>Street 1 </label>
					<input type="text" value={data.streetOne} name="streetOne" onChange={props.handleChange} className="form-control" required/>
				</div>
				<div className="form-group" >
					<label>Street 2 </label>
					<input type="text" value={data.streetTwo} name="streetTwo" onChange={props.handleChange} className="form-control" required/>
				</div>
				<div className="form-group" >
					<label>City </label>
					<input type="text" value={data.city} name="city" onChange={props.handleChange} className="form-control" required/>
				</div>
				<div className="form-group" >
					<label>State </label>
					<input type="text" value={data.state} name="state" onChange={props.handleChange} className="form-control" required/>
				</div>
				<div className="form-group" >
					<label>Zipcode </label>
					<input type="text" value={data.zipcode} name="zipcode" onChange={props.handleChange} className="form-control" required/>
				</div>
				{data.isModalOpen && <button className="btn btn-primary modalBtn">Confirm Changes</button>}
			</form>
		</div>
	)
}
