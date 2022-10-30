import React, { Component } from 'react';
import { createRef } from 'react';
import { Form, Button, Table } from "react-bootstrap";


export class Inventory extends Component {
    static displayName = Inventory.name;

    constructor() {
        super();
        this.state = {
            inventoryItems: []
        }
        this.formData = createRef();
    }

    // addInventoryItem handler method
    add = (event) => {
        event.preventDefault();
        //console.log(formData.current)
        const newInventoryItem = {
            inventory_item_type: this.formData.current.inventory_item_type.value,
            purchase_date: this.formData.current.purchase_date.value,
            inventory_item_cost: Number(this.formData.current.inventory_item_cost.value),
            QR_code: this.formData.current.QR_code.value
        }
        // add a new Inventory Item inside products array
        this.state.inventoryItems.push(newInventoryItem);
        this.setState({
            inventoryItems: this.state.inventoryItems
        });
    }

    render() {
        return (
            <div className="InventoryItem">
                <h1>Inventory Items</h1>
                <p>Describe's the use for the page</p>
                {/*<Button variant="primary" type="submit">*/}
                {/*    Create Inventory Item*/}
                {/*</Button>*/}
                {/*<Button variant="primary" type="submit">*/}
                {/*    Edit Inventory Item*/}
                {/*</Button>*/}
            

                <div className="InventoryItemForm">
                    <Form>
                        <Form.Group className="mb-3" controlId="formInvItemType">
                            <Form.Label>Inventory Item Type</Form.Label>
                            <Form.Control type="select" placeholder="Inventory Item Type" name="invItemType" />
                            <Form.Text className="text-muted">
                                I will learn how to make this a dropdown select I almost had it but it wouldnt load properly
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPurchaseDate">
                            <Form.Label>Purchase Date</Form.Label>
                            <Form.Control type="text" placeholder="Enter Purchase Date" name="purchaseDate"/>
                            <Form.Text className="text-muted">
                                I will learn how to make this a calendar date selection & date time format
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formInvItemCost">
                            <Form.Label>Inventory Item Cost</Form.Label>
                            <Form.Control type="number" placeholder="Enter Inventory Item Cost" name="invItemCost "/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formQRCodeID">
                            <Form.Label>QR Code ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter QR Code ID" name="QrCodeId"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <br></br>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Inventory Item Type:</th>
                            <th>Purchase Date:</th>
                            <th>Inventory Ttem Cost</th>
                            <th>QR Code ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.inventoryItems.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.inventory_item_type}</td>
                                        <td>{item.purchase_date}</td>
                                        <td>{item.inventory_item_cost}</td>
                                        <td>{item.QR_code}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}