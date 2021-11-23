import {
  Alert,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Links from "./Links";

function Landing() {
  const [beginDate, setBeginDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [generated, setGenerated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const performAction = () => {
    setErrorMessage("");
    setGenerated(false);
    if (beginDate !== null && endDate !== null && beginDate < endDate) {
      setGenerated(true);
    } else {
      setErrorMessage(
        `Make sure Start Date (${beginDate}) is before End Date (${endDate}) and both are set.`
      );
    }
  };

  return (
    <>
      <Snackbar
        open={errorMessage !== ""}
        onClose={() => setErrorMessage("")}
      >
        <Alert
          onClose={() => setErrorMessage("")}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                error
                label="Start Date"
                value={beginDate}
                onChange={(newValue) => {
                  setBeginDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} key="primary button">
            <Button variant="contained" onClick={() => performAction()}>
              Generate Links
            </Button>
          </Grid>
          {generated && <Links begin={beginDate} end={endDate} />}
        </Grid>
      </Container>
    </>
  );
}

export default Landing;
