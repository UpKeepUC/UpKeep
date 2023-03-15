import React from 'react'
import { Box, Modal, Typography, useTheme } from "@mui/material";
import CommonButton from '../../components/common/CommonButton/CommonButton';
import { tokens } from "../../theme";


const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Modal open={open} onClose={onClose} >
            <Box >
                <Typography
                    variant="h6"
                    component="h2"
                >
                    {title}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {subTitle}
                </Typography>
                {content}
                <Box >
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