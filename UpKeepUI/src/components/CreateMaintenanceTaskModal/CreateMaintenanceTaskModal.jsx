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

const CreateMaintenanceTaskModal = ({ open, onClose, addNewMaintenanceTask }) => {
  const [maintenanceTaskTypes, setMaintenanceTypes] = useState([]);
  const [roomModel, setRoomModel] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [maintenanceTaskTypeId, setMaintenanceTaskTypeId] = useState(-1);
  const [roomId, setRoomId] = useState(-1);
  const [maintenanceTaskDueDate, setMaintenanceTaskDueDate] = useState(new Date());
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  const handleMaintenanceTaskChange = (event) => {
    setMaintenanceTaskTypeId(event.target.value); 
  };

  const handleRoomChange = (event) => {
    setRoomId(event.target.value);
  }

  const handleMaintenanceTaskDueDate = (event) => {
    setMaintenanceTaskDueDate(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    // build inventory model
    const maintenanceModel = {
      MaintenanceTaskId: 0,
      MaintenanceTaskTypeId: maintenanceTaskTypeId,
      RoomId: roomId,
      Name: name,
      Description: description,
      MaintenanceTaskDueDate: maintenanceTaskDueDate
    };

    //make post call to save
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(maintenanceModel)
  };
    fetch(apiURL + "/MaintenanceTask/AddMaintenanceTask", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    //method one set inventory types
    fetch(apiURL + "/MaintenanceTaskType/GetMaintenanceTaskTypes")
      .then((response) => response.json())
      .then((json) => {
        setMaintenanceTypes(json);
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
    //add html element
    //take the item model id to the schema
  }, [apiURL, open]);

  const getContent = () => (
    <Box
      display="grid"
      gap="30px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <FormControl sx={{ gridColumn: "span 4" }}>
        <InputLabel id="MaintenanceTaskTypes" color="grey">
          Maintenance Task Type
        </InputLabel>
        <Select
          color="grey"
          labelId="MaintenanceTaskTypes"
          id="maintenanceTaskTypes"
          helperText="Please select your Maintenance Task Type"
          variant="filled"
          label="Maintenance Task Type"
          onChange={handleMaintenanceTaskChange}
        >
          {maintenanceTaskTypes.map((maintenanceTaskTypeModel) => (
            <MenuItem value={maintenanceTaskTypeModel.maintenanceTaskTypeId}>
              {maintenanceTaskTypeModel.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <FormControl sx={{ gridColumn: "span 4" }}>
        <InputLabel id="Rooms" color="grey">
          Locations
        </InputLabel>
        <Select
          color="grey"
          labelId="Rooms"
          id="rooms"
          helperText="Please select a location"
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
      </FormControl>      */}

      <TextField
        fullWidth
        color="grey"
        variant="filled"
        placeholder="Name of Task"
        name="name"
        label="Name"
        type="string"
        required
        onChange={handleName}
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        fullWidth
        color="grey"
        variant="filled"
        placeholder="Description of Task"
        name="description"
        label="Description"
        type="string"
        onChange={handleDescription}
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        name="maintenanceTaskDueDate"
        type="date"
        required
        onChange={handleMaintenanceTaskDueDate}
        sx={{ gridColumn: "span 4" }}
      />
    
    </Box>
  );
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New Maintenance Task"
      subTitle="Fill out all the following fields to create a new Maintenance Task."
      content={getContent()}
      onSubmit={handleSubmit}
    />
  );
};


export default CreateMaintenanceTaskModal;
