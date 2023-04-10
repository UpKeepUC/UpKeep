import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import BasicModal from "../common/BasicModal/BasicModal";
import Select from "@mui/material/Select";
import useMediaQuery from "@mui/material/useMediaQuery";

const CreateInventoryItemModal = ({ open, onClose, addNewInventoryItem }) => {
  const [inventoryItemTypes, setInventoryItemTypes] = useState([]);
  const [roomModel, setRoomModel] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [inventoryTypeId, setInventoryItemTypeId] = useState(-1);
  const [roomId, setRoomId] = useState(-1);
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [inventoryItemCost, setInventoryItemCost] = useState("");

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
    setPurchaseDate(event.target.value);
  };

  const handleSubmit = (event) => {
    // build inventory model
    const inventoryModel = {
      InventoryItemId: 0,
      InventoryItemTypeId: inventoryTypeId,
      InventoryItemCost: inventoryItemCost,
      PurchaseDate: purchaseDate,
      RoomId: roomId,
      QrcodeId: null,
    };

    //make post call to save
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inventoryModel),
    };
    fetch(apiURL + "/InventoryItem/AddInventoryItem", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    //method one sset inventory types
    fetch(apiURL + "/InventoryItemType/GetInventoryItemTypes")
      .then((response) => response.json())
      .then((json) => {
        setInventoryItemTypes(json);
      })
      .catch(() => {
        console.log("error");
      });

    //method two set rooms
    fetch(apiURL + "/Room/GetRooms")
      .then((response) => response.json())
      .then((json) => {
        setRoomModel(json);
      })
      .catch(() => {
        console.log("error");
      });
    //add html elment
    //take the item model id to the schema
  }, [open]);

  const getContent = () => (
    <Box
      display="grid"
      gap="30px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        "& .MuiTextField-root": { alignContent: "center" },
      }}
    >
      <FormControl sx={{ gridColumn: "span 4" }}>
        <InputLabel id="InventoryItemTypes" color="grey">
          Inventory Item Type
        </InputLabel>
        <Select
          color="grey"
          labelId="InventoryItemTypes"
          id="inventoryItemTypes"
          helperText="Please select your Inventory Item Type"
          variant="filled"
          label="Inventory Item Type"
          onChange={handleInventoryItemChange}
        >
          {inventoryItemTypes.map((inventoryItemTypeModel) => (
            <MenuItem value={inventoryItemTypeModel.inventoryItemTypeId}>
              {inventoryItemTypeModel.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ gridColumn: "span 4" }}>
        <InputLabel id="Rooms" color="grey">
          Rooms
        </InputLabel>
        <Select
          color="grey"
          labelId="Rooms"
          id="rooms"
          helperText="Please select a room"
          variant="filled"
          label="Room"
          onChange={handleRoomChange}
          sx={{ gridColumn: "span 4" }}
        >
          {roomModel.map((roomModel) => (
            <MenuItem value={roomModel.roomId}>
              {roomModel.roomLocation} - {roomModel.roomNumber}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        color="grey"
        variant="filled"
        //placeholder="Cost in $ USD"
        name="inventoryItemCost"
        label="$ Inventory Item Cost"
        type="number"
        required
        onChange={handleInventoryItemCost}
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        color="grey"
        name="purchaseDate"
        variant="filled"
        type="date"
        required
        onChange={handlePurchaseDate}
        sx={{ gridColumn: "span 4" }}
      />
    </Box>
  );
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New Inventory Item"
      subTitle="Fill out all the following fields to create a new Inventory Item."
      content={getContent()}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateInventoryItemModal;
