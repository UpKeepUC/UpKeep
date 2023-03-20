import { Box } from "@mui/material";
import Header from "../../components/common/Header";
import { Box, Grid, Modal } from "@mui/material";
import React, { useEffect, useState } from 'react'
import Header from "../../components/common/header";
import InventoryTable from '../../components/InventoryTable/InventoryTable';
import "../../index.css";

const Rooms = ({ onError }) => {
  const [rooms, setRooms] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;
   useEffect(() => {
        fetch(apiURL + '/Room/GetRooms')
            .then((response) => response.json())
            .then((json) => {
                setRooms(json);
                console.log(json);
            })
            .catch(() => onError())
        }, []);

  const handleRoomClick = (room) => {
    console.log(room);
    // setSelectedRoom(room);
  };

  const handleClose = () => {
    // setSelectedRoom(null);
  };


  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="ROOMS" subtitle="" />
      </Box>
      <Box mt="20px">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <Box className="floor-plan">
                {rooms.map((room) => (
                  <div
                    key={room.roomId}
                    className={`room room-${room.roomNumber}`}
                    onClick={() => handleRoomClick(`Room ${room}`)}
                  >
                    <div className="room-number">{room.roomNumber}</div>
                  </div>
                ))}
              </Box>
              {/* <Box className="floor-plan">
                {rooms200to240.map((room) => (
                  <div
                    key={room}
                    className={`room room-${room}`}
                    onClick={() => handleRoomClick(`Room ${room}`)}
                  >
                    <div className="room-number">{room}</div>
                  </div>
                ))}
              </Box><Box className="floor-plan">
                {rooms300to340.map((room) => (
                  <div
                    key={room}
                    className={`room room-${room}`}
                    onClick={() => handleRoomClick(`Room ${room}`)}
                  >
                    <div className="room-number">{room}</div>
                  </div>
                ))}
              </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Modal open={rooms !== null} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "75%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>{room.roomNumber}</h2>
          <p><InventoryTable></InventoryTable></p>
        </Box>
      </Modal> */}
    </Box>
  );
};

export default Rooms;
