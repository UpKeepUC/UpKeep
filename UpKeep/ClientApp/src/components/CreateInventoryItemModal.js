import React, { Component } from 'react';
import { Modal,Button,Row,Col,Form } from 'react-bootstrap';


export class CreateInventoryItemModal extends Component {
    static displayName = CreateInventoryItemModal.name;

    constructor(props) {
        super(props);
    }


    render() {
        return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Create Inventory Item 
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Create Inventory Item Form</h4>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
						consectetur ac, vestibulum at eros.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button  variant = 'danger' onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
        );
    }
}
