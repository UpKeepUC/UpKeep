import { Box } from "@mui/material";
import Header from "../../components/common/header";

const Admin = () => {
  return (
  <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="ADMIN MANAGER" subtitle="Admin Mangement!" />
    </Box>
  </Box>
  );
};

export default Admin;