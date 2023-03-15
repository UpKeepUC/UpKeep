import React from 'react'
import { Box, Modal, Typography, useTheme } from "@mui/material";
import CommonButton from '../CommonButton/CommonButton';
import { tokens } from "../../../theme";
import { modalStyles } from './styles';


const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Modal open={open} onClose={onClose} >
            <Box sx={modalStyles.wrapper}>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    Text in Modal
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {subTitle}
                </Typography>
                Here is random text 
                <Box sx={modalStyles.buttons} >
                    <CommonButton
                        variant="contained"
                        onClick={onSubmit}
                    >
                        Submit
                    </CommonButton>
                    <CommonButton onClick={onClose}>Cancel</CommonButton>
                </Box>
            </Box>
        </Modal>
    )
}

export default BasicModal