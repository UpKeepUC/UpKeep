import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { variables } from './Variables.js';

export class CreateInventoryItemModal extends Component {
    static displayName = CreateInventoryItemModal.name;

    constructor(props) {
		super(props);
		this.state = {
			InventoryItems: [],


        }
    }
	handleSubmit(event) {
		event.preventDefault();		
		fetch(variables.API_URL + 'InventoryItem/AddInventoryItem', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				InventoryItemId: 0,
				InventoryItemTypeId:0 ,
				InventoryItemTypeModel: {},
				PurchaseDate: Date.parse(document.getElementById("PurchaseDate").value),
				InventoryItemCost: String(document.getElementById("InventoryItemCost").value),
				RoomId: String(document.getElementById("RoomId").value),
				QRCodeId: document.getElementById("QRCodeId").value
			})
		})
			.then(res => res.json())
			.then((result) => {
				alert(result);
			},
			(error) => {
				alert('Failed');
			})
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
							<Col sm={6}>
								<Form onSubmit={this.handleSubmit}>
									<Form.Group controlId= "InventoryItemTypeId">
										<Form.Label>Inventory Item Type Id</Form.Label>
										<Form.Control
											type="text"
											name="InventoryItemTypeId"
											required
											placeholder="Enter Inventory Item Type Id"
										/>
									</Form.Group>
									<Form.Group controlId="PurchaseDate">
										<Form.Label>Purchase Date</Form.Label>
										<Form.Control
											type="date"
											name="PurchaseDate"
											required
										/>
									</Form.Group>
									<Form.Group controlId="InventoryItemCost">
										<Form.Label>Inventory Item Cost</Form.Label>
										<Form.Control
											type="number"
											name="InventoryItemCost"
											required
											placeholder="Enter Inventory Item Cost in $USD"
										/>
									</Form.Group>
									<Form.Group controlId="RoomId">
										<Form.Label>Room ID Number</Form.Label>
										<Form.Control
											type="number"
											name="RoomId"
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
