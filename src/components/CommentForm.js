import React from 'react'

const CommentForm = props => {
	const data = props.commmentData

	return (
		<div className="container commentForm">
			{data.isModalOpen ? <h3>Edit Feedback</h3> : <h3>Comment Form</h3>}
			<form onSubmit={props.onClose}>
				<div className="form-group comment-group" >
					<label>Type</label>
					<select value={data.commentType} name="commentType" onChange={props.handleChange} className="form-control" required>
						<option >Select Type</option>
						<option value="Staff Feedback">Staff Feedback</option>
						<option value="Checkout Feedback">Checkout Feedback</option>
						<option value="Product Feedback">Product Feedback</option>
					</select>
				</div>
				<div className="form-group comment-group" >
					<label>Comment</label>
					<textarea value={data.commentText} name="commentText" rows="10" column="15" onChange={props.handleChange} maxLength={1000} className="form-control" required/>
				</div>
				{data.isModalOpen && <button className="btn btn-primary modalBtn">Confirm Changes</button>}
			</form>
		</div>
	)
}

export default CommentForm
