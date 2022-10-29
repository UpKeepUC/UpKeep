import React, { Component } from 'react';
import { Modal,Button,Row,Col,Form } from 'react-bootstrap';


export class CreateInventoryItemModal extends Component {
    static displayName = CreateInventoryItemModal.name;

    constructor(props) {
        super(props);
    }
	handleSubmit(event) {
		event.preventDefault();
		alert(event.target.inventoryItems.value);
    }

    render() {
		return (
			<div className='container'>
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
						<Row>
							<Col sm={8}>
								<Form onSubmit={this.handleSubmit}>
									<Form.Group controlId= "inventoryItemType">
										<Form.Label>Inventory Item Type</Form.Label>
										<Form.Control
											type="text"
											name="inventoryItemType"
											required
											placeholder="Enter Inventory Item Type"
										/>
									</Form.Group>
									<Form.Group controlId="purchaseDate">
										<Form.Label>Purchase Date</Form.Label>
										<Form.Control
											type="date"
											name="purchaseDate"
											required
										/>
									</Form.Group>
									<Form.Group controlId="inventoryItemCost">
										<Form.Label>Inventory Item Cost</Form.Label>
										<Form.Control
											type="number"
											name="inventoryItemCost"
											required
											placeholder="Enter Inventory Item Cost in $USD"
										/>
									</Form.Group>
									<Form.Group controlId="roomId">
										<Form.Label>Room ID Number</Form.Label>
										<Form.Control
											type="number"
											name="roomId"
											required
											placeholder="Enter the Room Id"
										/>
									</Form.Group>
									<Form.Group controlId="QRCodeId">
										<Form.Label>QR Code Id</Form.Label>
										<Form.Control
											type="text"
											name="QRCodeId"
											required
											placeholder="Enter the QR Code Id"
										/>
									</Form.Group>
									<Form.Group>
										<Button variant='primary' type='submit'> Submit </Button>
									</Form.Group>
								</Form>
							</Col>
						</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button  variant = 'danger' onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
            </div>
        );
    }
}
