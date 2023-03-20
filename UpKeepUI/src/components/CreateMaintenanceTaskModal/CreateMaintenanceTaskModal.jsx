import React, { useState, useEffect } from "react";
import { Box, TextField, MenuItem, InputAdornment } from "@mui/material";
import BasicModal from "../common/BasicModal/BasicModal";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
  maintenanceTaskId: "",
  name: "",
  description: "",
  maintenanceTaskDueDate: ""
};

const CreateMaintenanceTaskModal = ({ open, onClose, addNewMaintenanceTask }) => {
  const [values, setValues] = useState(initialValues);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const MaintenanceTaskSchema = Yup.object().shape({
    maintenanceTaskId: Yup.object().required("required"),
    name: Yup.string().required("required"),
    description: Yup.object().required("required"),
    maintenanceTaskDueDate: Yup.date().required("required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(MaintenanceTaskSchema),
  });

  const addMaintenanceTask = (data) => {
    addNewMaintenanceTask(data);
  };

  const handleChange = (value) => {
    setValues(value);
  };

  useEffect(() => {
    if (open) setValues(initialValues);
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
      <TextField
        fullWidth
        variant="filled"
        placeholder="Cost in $ USD"
        name="maintenanceTaskId"
        label="Maintenance Task ID"
        type="number"
        {...register("maintenanceTaskId")}
        error={errors.maintenanceTaskId ? true : false}
        helperText={errors.maintenanceTaskId?.message}
        value={values.maintenanceTaskId}
        onChange={(event) =>
          handleChange({ ...values, maintenanceTaskId: event.target.value })
        }
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        name="maintenanceTaskDueDate"
        type="date"
        required
        {...register("maintenanceTaskDueDate")}
        error={errors.maintenanceTaskDueDate ? true : false}
        helperText={errors.maintenanceTaskDueDate?.message}
        value={values.maintenanceTaskDueDate}
        onChange={(event) =>
          handleChange({ ...values, maintenanceTaskDueDate: event.target.value })
        }
        sx={{ gridColumn: "span 4" }}
      />
        <TextField
        fullWidth
        variant="filled"
        placeholder="Name of Task"
        name="name"
        label="Name"
        type="string"
        {...register("name")}
        error={errors.name ? true : false}
        helperText={errors.name?.message}
        value={values.name}
        onChange={(event) =>
          handleChange({ ...values, name: event.target.value })
        }
        sx={{ gridColumn: "span 4" }}
      />
        <TextField
        fullWidth
        variant="filled"
        placeholder="Description of Task"
        name="description"
        label="description"
        type="string"
        {...register("description")}
        error={errors.description ? true : false}
        helperText={errors.description?.message}
        value={values.description}
        onChange={(event) =>
          handleChange({ ...values, description: event.target.value })
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
      title="New Maintenance Task"
      subTitle="Fill out all the following feilds to create a new Inventory Item."
      content={getContent()}
      onSubmit={handleSubmit(addMaintenanceTask)}
    />
  );
};

export default CreateMaintenanceTaskModal;
