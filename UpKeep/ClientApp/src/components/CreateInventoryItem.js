import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class CreateInventoryItem extends Component {
    static displayName = CreateInventoryItem.name;



    render() {
        return (
            <div className="CreateInventoryItem">
                <h1>Create Inventory Item</h1>
                <p>Describe's the use for the page</p>
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
            </div>
        );
    }
}
