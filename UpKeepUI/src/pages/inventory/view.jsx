import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import axios from "axios";

const InventoryView = () => {
  const navigate = useNavigate();
  const [inventoryItemTypes, setInventoryItemTypes] = useState([]);
  const [roomModel, setRoomModel] = useState([]);
    const [qrCodeGenerated, setQRCodeGenerated] = useState(false);
    const [qrCodeImage, setQRCodeImage] = useState("");

  const [inventoryItemId, setInventoryItemId] = useState(-1);
  const [inventoryTypeId, setInventoryItemTypeId] = useState(-1);
  const [roomId, setRoomId] = useState(-1);
  const [purchaseDate, setPurchaseDate] = useState(dayjs("2000-01-01"));
  const [inventoryItemCost, setInventoryItemCost] = useState("");
  const [qrCodeId, setQrCodeId] = useState("");

  const [responseReceived, setResponseReceived] = useState(false);

  const handleInventoryItemChange = (event) => {
    setInventoryItemTypeId(event.target.value); //inventory item type id
  };

  const handleRoomChange = (event) => {
    setRoomId(event.target.value);
  };

  const handleInventoryItemCost = (event) => {
    setInventoryItemCost(event.target.value);
  };

  const handlePurchaseDate = (event) => {
    console.log(event.$d);
    setPurchaseDate(event.$d);
  };

    const handleGenerateClick = (event) => {
      if(!qrCodeGenerated){
      //get page link
      const link = window.location.href;
      console.log(link);

      //submit post
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
      fetch(apiURL + '/QRCode/GenerateQRCodeForInventoryItem?link=' + link, requestOptions)
        .then(response => response.json())
        .then(data => {
          setQRCodeImage('data:image/png;base64,'+ data.fileContents);

          console.log(qrCodeImage);
          setQRCodeGenerated(true);
        });
      }
    }

    const handleDeleteClick = (event) => {
      event.preventDefault();
      const apiURL = process.env.REACT_APP_API_URL;

    //build update model
    const inventoryModel = {
      InventoryItemId: inventoryItemId,
      InventoryItemTypeId: inventoryTypeId,
      InventoryItemCost: inventoryItemCost,
      PurchaseDate: purchaseDate,
      RoomId: roomId,
      QrcodeId: qrCodeId,
    };

    //submit post
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inventoryModel),
    };
      fetch(apiURL + '/InventoryItem/DeleteInventoryItem', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
      

        navigate('/inventory');
        window.location.reload();
    }

    const handleCloseClick = (event) => {
       // setup onclose handler instead of refreshing page
       navigate('/inventory');
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const apiURL = process.env.REACT_APP_API_URL;

    //build update model
    const inventoryModel = {
      InventoryItemId: inventoryItemId,
      InventoryItemTypeId: inventoryTypeId,
      InventoryItemCost: inventoryItemCost,
      PurchaseDate: purchaseDate,
      RoomId: roomId,
      QrcodeId: qrCodeId,
    };

    //submit post
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inventoryModel),
    };
    fetch(apiURL + "/InventoryItem/UpdateInventoryItem", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    // setup onclose handler instead of refreshing page
    navigate("/inventory");
    window.location.reload();
  };

  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const getData = async () => {
      const id = window.location.pathname.split("/")[2];
      const response = await axios.get(
        apiURL + "/InventoryItem/GetInventoryItemById?id=" + id
      );
      if (response.data) {
        setInventoryItemId(response.data.inventoryItemId);
        setInventoryItemTypeId(response.data.inventoryItemTypeId);
        setRoomId(response.data.roomId);
        setInventoryItemCost(response.data.inventoryItemCost);
        setPurchaseDate(response.data.purchaseDate);
        setQrCodeId(response.data.qrcodeId);
        setResponseReceived(true);
      }

      const typeResponse = await axios.get(
        apiURL + "/InventoryItemType/GetInventoryItemTypes"
      );
      if (typeResponse.data) {
        setInventoryItemTypes(typeResponse.data);
      }

      const roomResponse = await axios.get(apiURL + "/Room/GetRooms");
      if (roomResponse.data) {
        setRoomModel(roomResponse.data);
      }
    };
    getData();
  }, []);


  return (
    <Dialog open={responseReceived} m="20px">
      <DialogTitle>INVENTORY ITEM</DialogTitle>
      <DialogContent>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container direction="row" padding="10px">
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="InventoryItemTypes">
                  Inventory Item Type
                </InputLabel>
                <Select
                  labelId="InventoryItemTypes"
                  id="inventoryItemTypes"
                  defaultValue={inventoryTypeId}
                  label="Inventory Item Type"
                  onChange={handleInventoryItemChange}
                >
                  {inventoryItemTypes.map((inventoryItemTypeModel) => (
                    <MenuItem
                      value={inventoryItemTypeModel.inventoryItemTypeId}
                    >
                      {inventoryItemTypeModel.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="Rooms">Rooms</InputLabel>
                <Select
                  labelId="Rooms"
                  id="rooms"
                  defaultValue={roomId}
                  label="Room"
                  onChange={handleRoomChange}
                >
                  {roomModel.map((roomModel) => (
                    <MenuItem value={roomModel.roomId}>
                      {roomModel.roomLocation} - {roomModel.roomNumber}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={12} padding="10px">
              <TextField
                label="Cost"
                required
                name="inventoryItemCost"
                fullWidth
                id="inventoryItemCost"
                defaultValue={inventoryItemCost}
                onChange={handleInventoryItemCost}
              />
            </Grid>
            <Grid item xs={12} padding="10px">
              <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Purchase Date"
                  defaultValue={dayjs(purchaseDate)}
                  onChange={handlePurchaseDate}
                />
              </LocalizationProvider>              
              </Grid>
            </Grid>

            {qrCodeGenerated &&
                <img src={qrCodeImage} alt='qr code here'/>
            }
            </Box>
            </DialogContent>
            <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button
              color="error"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
            <Button
              color="secondary"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleGenerateClick}
            >
              Generate QR Code
            </Button>
            <Button
              color="error"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleCloseClick}
            >
              Close
            </Button>
            </DialogActions>
            

                    
        
        

        
      </Dialog>
    );
  };
  
  export default InventoryView;