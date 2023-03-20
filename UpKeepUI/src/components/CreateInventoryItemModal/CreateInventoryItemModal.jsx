import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import BasicModal from "../common/BasicModal/BasicModal";
import { useForm } from "react-hook-form";
import Select from "@mui/material/Select";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
  inventoryItemTypeModel: "",
  inventoryItemCost: "",
  purchaseDate: "",
  roomModel: {
    roomLocation: "",
    name: "",
    roomNumber: "",
  },
};

const CreateInventoryItemModal = ({ open, onClose, addNewInventoryItem }) => {
  const [values, setValues] = useState(initialValues);
  const [inventoryItemTypes, setInventoryItemTypes] = useState([]);
  const [roomModel, setRoomModel] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const InventoryItemSchema = Yup.object().shape({
    inventoryItemTypeModel: Yup.object().required("required"),
    inventoryItemCost: Yup.number().required("required"),
    purchaseDate: Yup.date().required("required"),
    roomModel: Yup.object().shape({
      roomLocation: Yup.string().required("required"),
      name: Yup.string().required("required"),
      roomNumber: Yup.string().required("required"),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InventoryItemSchema),
  });

  const addInventoryItem = (data) => {
    addNewInventoryItem(data);
  };

  const handleChange = (value) => {
    setValues(value);
  };
  const handleInventoryItemChange = (event) => {
    setInventoryItemTypes(event.target.value);
  };

  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    if (open) setValues(initialValues);
    //method one sset inventory types
    fetch(apiURL + "/InventoryItemType/GetInventoryItemTypes")
      .then((response) => response.json())
      .then((json) => {
        setInventoryItemTypes(json);
        console.log(json);
      })
      .catch(() => {
        console.log("error");
      });

    //method two set rooms
    fetch(apiURL + "/Room/GetRooms")
      .then((response) => response.json())
      .then((json) => {
        setRoomModel(json);
        console.log(json);
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
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="InventoryItemTypes">Inventory Item Type</InputLabel>
        <Select
          labelId="InventoryItemTypes"
          id="inventoryItemTypes"
          //value={inventoryItemTypes.inventoryItemTypeId.value}
          helperText="Please select your Inventory Item Type"
          variant="filled"
          label="Inventory Item Type"
          onChange={handleInventoryItemChange}
        >
          {inventoryItemTypes.map((inventoryItemTypeModel) => (
            <MenuItem
              key={inventoryItemTypeModel.inventoryItemTypeId.value}
              value={inventoryItemTypeModel.inventoryItemTypeId.value}
            >
              {setInventoryItemTypes.name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
     {/*  <TextField
        fullWidth
        id="InventoryItemTypes"
        select
        label="Select"
        defaultValue=""
        helperText="Please select your Inventory Item Type"
        variant="filled"
      >
        {inventoryItemTypes.map((inventoryItemTypeModel) => (
          <MenuItem
            key={inventoryItemTypeModel.inventoryItemTypeId.value}
            value={inventoryItemTypeModel.inventoryItemTypeId.value}
          >
            {setInventoryItemTypes.name.label}
          </MenuItem>
        ))}
      </TextField> */}
      <TextField
        fullWidth
        variant="filled"
        placeholder="Cost in $ USD"
        name="inventoryItemCost"
        label="$ Inventory Item Cost"
        type="number"
        required
        {...register("inventoryItemCost")}
        error={errors.inventoryItemCost ? true : false}
        helperText={errors.inventoryItemCost?.message}
        value={values.inventoryItemCost}
        onChange={(event) =>
          handleChange({ ...values, inventoryItemCost: event.target.value })
        }
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        name="purchaseDate"
        type="date"
        required
        {...register("inventorypurchaseDateItemCost")}
        error={errors.purchaseDate ? true : false}
        helperText={errors.purchaseDate?.message}
        value={values.purchaseDate}
        onChange={(event) =>
          handleChange({ ...values, purchaseDate: event.target.value })
        }
        sx={{ gridColumn: "span 4" }}
      />
      {/* <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Room Location"
        helperText="Provide Room Floor"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.roomLocation}
        name="roomLocation"
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Room Type"
        helperText="Provide Room Type"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.roomTypeModel.name}
        name="name"
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        fullWidth
        variant="filled"
        type="number"
        label="Room Number"
        helperText="Provide Room Number"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.roomNumber}
        name="roomNumber"
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        placeholder="Room number"
        name="roomNumber"
        label="Room number"
        type
        required
        {...register("phoneNumber")}
        error={errors.phoneNumber ? true : false}
        helperText={errors.phoneNumber?.message}
        value={values.phoneNumber}
        onChange={(event) =>
          handleChange({ ...values, phoneNumber: event.target.value })
        }
      /> */}
    </Box>
  );
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New Inventory Item"
      subTitle="Fill out all the following feilds to create a new Inventory Item."
      content={getContent()}
      onSubmit={handleSubmit(addInventoryItem)}
    />
  );
};

export default CreateInventoryItemModal;
