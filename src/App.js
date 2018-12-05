import React, { Component } from 'react'
import StepZilla from "react-stepzilla"
import Modal from 'react-responsive-modal'
import './App.css'
import './css/main.css'

import ContactForm from './components/ContactForm'
import AddressForm from './components/AddressForm'
import CommentForm from './components/CommentForm'
import Review from './components/Review'
import Confirmation from './components/Confirmation'

class App extends Component {

	state = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		streetOne: "",
		streetTwo: "",
		city: "",
		state: "",
		zipcode: "",
		commentType: "",
		commentText: "",
		isModalOpen: false,
		component: ''
	}

	handleChange = e => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		})
	}

	handleClick = data => { 
		localStorage.setItem('wizardData', JSON.stringify(data))
	}

	showModal = component => {
		this.setState(prevState => {
			return ({
				isModalOpen: !prevState.isModalOpen,
				component
			})
		})
	}

	onCloseModal = () => {
		this.setState({
			isModalOpen: false
		})
	}

	render() {
		const steps = 
			[
				{name: 'Contact', component: <ContactForm contactData={this.state} handleChange={this.handleChange} />},
				{name: 'Address', component: <AddressForm addressData={this.state} handleChange={this.handleChange} />},
				{name: 'Feedback', component: <CommentForm commmentData={this.state} handleChange={this.handleChange} />},
				{name: 'Review', component: <Review allData={this.state} handleClick={this.handleClick} showModal={this.showModal} />},
				{name: "Confirmation", component: <Confirmation />}
			]
		const open = this.state.isModalOpen

		return (
			<div>
				<div className='step-progress app'>
				<StepZilla steps={steps} showNavigation={true} prevBtnOnLastStep={false} nextButtonCls="btn btn-next btn-primary btn-lg pull-left" backButtonCls="btn btn-prev btn-primary btn-lg pull-right" nextTextOnFinalActionStep="Save" />
				</div>
				{
					open && 
					<Modal open={open} onClose={this.onCloseModal} closeOnOverlayClick={false} showCloseIcon={false} center>
						{this.state.component === 'contact' && <ContactForm contactData={this.state} handleChange={this.handleChange} onClose={this.onCloseModal} />}
						{this.state.component === 'address' && <AddressForm addressData={this.state} handleChange={this.handleChange} onClose={this.onCloseModal} />}
						{this.state.component === 'comment' && <CommentForm commmentData={this.state} handleChange={this.handleChange} onClose={this.onCloseModal} />}
					</Modal>
				}
			</div>
		)
	}
}

export default App
