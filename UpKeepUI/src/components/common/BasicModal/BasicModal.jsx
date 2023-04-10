import React from "react";
import { Box, Modal, Typography, useTheme, Grid, Stack } from "@mui/material";
import CommonButton from "../CommonButton/CommonButton";
import { tokens } from "../../../theme";
import { modalStyles } from "./styles";

const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2, pb: 2 }} color="secondary">
          {subTitle}
        </Typography>
        {content}
        <Stack spacing={2} direction="row" sx={modalStyles.buttons}>
          <CommonButton
            variant="contained"
            color="secondary"
            onClick={onSubmit}
          >
            Submit
          </CommonButton>

          <CommonButton variant="contained" color="primary" onClick={onClose}>
            Cancel
          </CommonButton>
        </Stack>
      </Box>
    </Modal>
  );
};

export default BasicModal;
