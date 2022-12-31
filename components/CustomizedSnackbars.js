import * as React from "react";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CustomizedSnackbars(props) {
  const { severity, message } = props;

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Alert severity={severity}>{message}</Alert>

      {/* <Alert severity="error">This is an error message!</Alert> */}
      {/* <Alert severity="warning">This is a warning message!</Alert> */}
      {/* <Alert severity="info">This is an information message!</Alert> */}
      {/* <Alert severity="s÷ccess">This is a success message!</Alert> */}
    </Stack>
  );
}
export { CustomizedSnackbars };
