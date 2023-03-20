import { Box, Grid, Modal } from "@mui/material";
import React, { useEffect, useState } from 'react';
import Header from "../../components/common/Header";
import "../../index.css";
import RoomModal from "../../components/RoomModal/RoomModal";

const Rooms = ({ onError }) => {
  const [selectedRoom, setRoom] = useState(null);
  const [rooms, setRooms] = useState([]);

  const apiURL = process.env.REACT_APP_API_URL;

  useEffect( () => {
    fetch(apiURL + '/Room/GetRooms')
            .then((response) => response.json())
            .then((json) => {
                setRooms(json)
            })
            .catch(() => onError());        
  });


  const handleRoomClick = (room) => {
    setRoom(room);
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
                    onClick={() => handleRoomClick(room)}
                  >
                    <div className="room-number">{room.roomNumber}</div>
                  </div>
                  
                ))}
                
              </Box>
            </Box>
          </Grid>
        </Grid>        
      </Box>
      {selectedRoom && <RoomModal selectedObject={selectedRoom} onClose={() => setRoom(null)}/>}
    </Box>
  );
};

export default Rooms;
