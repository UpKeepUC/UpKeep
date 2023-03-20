import React, { useState, useEffect } from "react";
import { Box, TextField, MenuItem, InputAdornment } from "@mui/material";
import BasicModal from "../common/BasicModal/BasicModal";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
  maintenanceTaskId: "null",
  location: "",
  name: "",
  description: "",
  maintenanceTaskDueDate: ""
};

const CreateMaintenanceTaskModal = ({ open, onClose, addNewMaintenanceTask }) => {
  const [values, setValues] = useState(initialValues);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const MaintenanceTaskSchema = Yup.object().shape({
    maintenanceTaskId: Yup.object().required("required"),
    location: Yup.string().required("required"),
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
      {/* <TextField
        fullWidth
        variant="filled"
        placeholder="Maintenance Task ID"
        name="maintenanceTaskId"
        label="Maintenance Task ID"
        type
        {...register("maintenanceTaskId")}
        error={errors.maintenanceTaskId ? true : false}
        helperText={errors.maintenanceTaskId?.message}
        value={values.maintenanceTaskId}
        onChange={(event) =>
          handleChange({ ...values, maintenanceTaskId: event.target.value })
        }
        sx={{ gridColumn: "span 4" }}
      /> */}
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
        placeholder="Maintenance Task Location"
        name="location"
        label="Maintenance Task Loction"
        type
        {...register("location")}
        error={errors.location ? true : false}
        helperText={errors.location?.message}
        value={values.location}
        onChange={(event) =>
          handleChange({ ...values, location: event.target.value })
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
        placeholder="Description of Task"
        name="description"
        label="Description"
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
    </Box>
  );

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New Maintenance Task"
      subTitle="Fill out all the following fields to create a new Maintenance Task."
      content={getContent()}
      onSubmit={handleSubmit(addMaintenanceTask)}
    />
  );
};

export default CreateMaintenanceTaskModal;
