import React, { Component } from 'react';
import { Button, Table, ButtonToolbar } from "react-bootstrap";
import { variables } from './Variables.js';
import { CreateInventoryItemModal } from './CreateInventoryItemModal.js'



export class Inventory extends Component {
    static displayName = Inventory.name;

    constructor() {
        super();
        this.state = {
            InventoryItems: [],
            addModalShow : false,
        }
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        fetch(variables.API_URL +'InventoryItem/GetInventoryItems')
            .then(response => response.json())
            .then(data => {
                this.setState({ InventoryItems: data });
            })
    } 

    componentDidMount() {
        this.refreshList();
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false });
        
    return (
        <div className="InventoryItem">
            <h1>Inventory Items</h1>
            <p>Describe's the use for the page</p>
            <ButtonToolbar>
                <Button
                    variant='primary'
                    onClick={() => this.setState({ addModalShow:true })}
                >Add Inventory Item
                </Button>
                <CreateInventoryItemModal
                    show = {this.state.addModalShow}
                    onHide = {addModalClose}
                />
            </ButtonToolbar>

            <Table className='mt-4' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Inventory Item ID:</th>
                        <th>Inventory Item Type:</th>
                        <th>Purchase Date:</th>
                        <th>Inventory Item Cost</th>
                        <th>Room ID</th>
                        <th>QR Code ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.InventoryItems.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{item.inventoryItemId}</td>
                                    <td>{item.inventoryItemTypeModel.name}</td>
                                    <td>{item.purchaseDate}</td>
                                    <td>{item.inventoryItemCost}</td>
                                    <td>{item.roomId}</td>
                                    <td>{item.qrcodeId}</td>
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