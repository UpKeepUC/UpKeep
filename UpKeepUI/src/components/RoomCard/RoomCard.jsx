import React, { useEffect, useState } from 'react'
import { Box, Grid, Modal, useTheme, Card } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const RoomCard = ({ RoomCard, key }) => (

    <Card sx={{ mb: 3, boxShadow: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 4.5,
          bgcolor: "primary.light",
          color: "grey.800",
        }}
      >
        <Box sx={{ color: "inherit" }}>
         {/*  RoomCard:
          {rooms.map((room) => (
            <div
              key={room.roomId}
              className={`room room-${room.roomNumber}`}
              //onClick={() => handleRoomClick(room)}
            >
              <div className="room-number">{room.roomNumber}</div>
            </div>
          ))} */}
        </Box>
      </Box>
    </Card>
  );

  export default RoomCard