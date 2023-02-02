import React, { UseState, Component } from 'react';
import { Modal, Form, Button } from "react-bootstrap";

export class UpdateInventoryItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventoryItemId: '',
            inventoryItemType: '',
            purchaseDate: '',
            inventoryItemCost: '',
            roomId: '',
            qrcodeId: '',
        }
    }

    componentDidMount() {
        let data = this.props.dataFromParent;

        this.setState({
                    inventoryItemId: data.inventoryItemId,
                    inventoryItemType: data.inventoryItemTypeModel.name,
                    purchaseDate: data.purchaseDate,
                    inventoryItemCost: data.inventoryItemCost,
                    roomId: data.roomId,
                    qrcodeId: data.qrcodeId,
                });

        //fetch(`https://localhost:7285/api/InventoryItem/GetInventoryItem/` + this.props.selectedItemId)
        //    .then(response => response.json())
        //    .then(data => {
        //        this.setState({
        //            inventoryItemId: data.inventoryItemId,
        //            inventoryItemType: data.inventoryItemTypeModel.name,
        //            purchaseDate: data.purchaseDate,
        //            inventoryItemCost: data.inventoryItemCost,
        //            roomId: data.roomId,
        //            qrcodeId: data.qrcodeId,
        //        });
        //    });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`https://localhost:7285/api/InventoryItem/UpdateInventoryItem`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                inventoryItemId: this.state.inventoryItemId,
                inventoryItemType: this.state.inventoryItemType,
                purchaseDate: this.state.purchaseDate,
                inventoryItemCost: this.state.inventoryItemCost,
                roomId: this.state.roomId,
                qrcodeId: this.state.qrcodeId,
            }),
        })
            .then(res => {
                if (res.ok) {
                    alert('Inventory Item updated');
                    this.props.onHide();
                    this.props.refreshList();
                } else {
                    alert('Error updating Inventory Item');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error updating Inventory Item');
            });
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
                        Update Inventory Item
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="inventoryItemType">
                            <Form.Label>Inventory Item Type</Form.Label>
                            <Form.Control
                                type="text"
                                name="inventoryItemType"
                                value={this.state.inventoryItemType}
                                onChange={e => this.setState({ inventoryItemType: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="purchaseDate">
                            <Form.Label>Purchase Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="purchaseDate"
                                value={this.state.purchaseDate}
                                onChange={e => this.setState({ purchaseDate: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="inventoryItemCost">
                            <Form.Label>Inventory Item Cost</Form.Label>
                            <Form.Control
                                type="number"
                                name="inventoryItemCost"
                                value={this.state.inventoryItemCost}
                                onChange={e => this.setState({ inventoryItemCost: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="roomId">
                            <Form.Label>Room ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="roomId"
                                value={this.state.roomId}
                                onChange={e => this.setState({ roomId: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="qrcodeId">
                            <Form.Label>QR Code ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="qrcodeId"
                                value={this.state.qrcodeId}
                                onChange={e => this.setState({ qrcodeId: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="success" type="submit">
                                Update
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}


