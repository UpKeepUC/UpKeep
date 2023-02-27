import { Box } from "@mui/material";
import Header from "../../components/common/header";

const UserForm = () => {
  return (
  <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="USER FORM" subtitle="Create a user profile!" />
    </Box>
  </Box>
  );
};

export default UserForm;