import React, { Component } from 'react';
import { Button, Table, ButtonToolbar } from "react-bootstrap";
import { CreateInventoryItemModal } from './CreateInventoryItemModal.js'
import { UpdateInventoryItemModal } from './UpdateInventoryItemModal.js'




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
        fetch('https://localhost:7285/api/InventoryItem/GetInventoryItems')
            .then(response => response.json())
            .then(data => {
                this.setState({ InventoryItems: data });
            })
    }
    handleDelete(item) {
        console.log(item);

        if (window.confirm("Are you sure you want to delete this item?")) {
            fetch('https://localhost:7285/api/InventoryItem/DeleteInventoryItem/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    InventoryItemId: item.inventoryItemId,
                    InventoryItemTypeId: item.inventoryItemTypeId,
                    InventoryItemTypeModel: item.inventoryItemTypeModel ?? null,
                    PurchaseDate: item.purchaseDate,
                    InventoryItemCost: item.inventoryItemCost,
                    RoomId: item.roomId,
                    QrcodeId: item.qrcodeId,
                }),
            })
                .then(() => {
                    this.refreshList();
                });
        }
    }

    handleUpdate(id) {
        this.setState({ updateModalShow: true, selectedItemId: id });
    }


    componentDidMount() {
        this.refreshList();
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false });
        let updateModalClose = () => this.setState({ updateModalShow: false });

        
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
                        <th>Inventory Item Cost:</th>
                        <th>Room ID:</th>
                        <th>QR Code ID:</th>
                        <th>Edit Item:</th>
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
                                    <td>
                                        <Button variant="danger" onClick={() => this.handleDelete(item)}>Delete</Button>
                                        <Button variant="warning" onClick={() => this.handleUpdate(item.inventoryItemId)}>Update</Button>
                                        <UpdateInventoryItemModal dataFromParent={item} show={this.state.updateModalShow} onHide={updateModalClose}/>
                                    </td>

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