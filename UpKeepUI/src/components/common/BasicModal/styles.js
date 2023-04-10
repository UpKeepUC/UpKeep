export const modalStyles = {
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  },
  inputFields: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    marginBottom: "15px",
    ".MuiInput-root": {
      marginBottom: "20px",
    },
  },
  buttons: {
    display: "flex",
    marginTop: "25px",
  },
};
