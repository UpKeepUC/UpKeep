import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { variables } from './Variables.js';

export class CreateInventoryItemModal extends Component {
    static displayName = CreateInventoryItemModal.name;
    inventoryItemTypeSave = "0";

    constructor(props) {
        super(props);
        this.state = {
            InventoryItemId: 0,
            InventoryItemTypeId: 0,
            InventoryItemTypeModel: {},
            PurchaseDate: new Date(),
            InventoryItemCost: "",
            RoomId: 0,
            QRCodeId: "",
            InventoryItemTypes: [],

        }

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCostChange = this.handleCostChange.bind(this);
        this.handleRoomChange = this.handleRoomChange.bind(this);
        this.handleQRChange = this.handleQRChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    componentDidMount() {
        this.getInventoryItemTypes();
    }

    getInventoryItemTypes() {
        fetch(variables.API_URL + 'InventoryItemType/GetInventoryItemTypes')
            .then(response => response.json())
            .then(data => {
                this.setState({ InventoryItemTypes: data });
            })
    }

    handleTypeChange(event) {
        this.setState({
            InventoryItemTypeId: event.target.value
        });
    }

    handleDateChange(event) {
        this.setState({
            PurchaseDate: event.target.value
        });
    }

    handleCostChange(event) {
        this.setState({
            InventoryItemCost: event.target.value
        });
    }

    handleRoomChange(event) {
        this.setState({
            RoomId: event.target.value
        });
    }

    handleQRChange(event) {
        this.setState({
            QRCodeId: event.target.value

        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(variables.API_URL + 'InventoryItem/AddInventoryItem', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                InventoryItemId: 0,
                InventoryItemTypeId: this.state.InventoryItemTypeId,
                InventoryItemTypeModel: {},
                PurchaseDate: new Date(this.state.PurchaseDate),
                InventoryItemCost: String(this.state.InventoryItemCost),
                RoomId: String(this.state.RoomId),
                QRCodeId: this.state.QRCodeId
            })
        })
            .then(res => res.json())
            .then((result) => {
                if (result != 1) {
                    alert(result);
                }
                window.location.reload();
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
                                    <Form.Group controlId="InventoryItemTypeId">
                                        <Form.Label>Inventory Item Type </Form.Label>
                                        <Form.Control as="select" onChange={this.handleTypeChange}>
                                            {this.state.InventoryItemTypes.map((InvItemTypeModel, i) =>
                                                <option key={i} id="InvItemTypeId" value={InvItemTypeModel.inventoryItemTypeId}>{InvItemTypeModel.name}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="PurchaseDate">
                                        <Form.Label>Purchase Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="PurchaseDate"
                                            onChange={this.handleDateChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="InventoryItemCost">
                                        <Form.Label>Inventory Item Cost</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="InventoryItemCost"
                                            onChange={this.handleCostChange}
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
                                            onChange={this.handleRoomChange}
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
                                            onChange={this.handleQRChange}
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
                        <Button variant='danger' onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
