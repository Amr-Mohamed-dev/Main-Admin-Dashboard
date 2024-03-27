import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

const regEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = () => {
    console.log("done");
    handleClick();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" sx={{ gap: 2 }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName ? "This feild is required & min 3 character" : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          id="filled-basic"
          label="First Name"
          variant="filled"
          type="text"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "This feild is required & min 3 character" : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          id="filled-basic"
          label="Last Name"
          variant="filled"
          type="text"
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "Please provide a valid email address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        id="filled-basic"
        label="Email"
        variant="filled"
        type="email"
      />
      <TextField
        error={Boolean(errors.number)}
        helperText={
          errors.number ? "Please provide a valid Phone number" : null
        }
        {...register("number", { required: true, pattern: phoneRegExp })}
        id="filled-basic"
        label="Contact Number"
        type="number"
        variant="filled"
      />
      <TextField id="filled-basic" label="Address 1" variant="filled" />
      <TextField id="filled-basic" label="Address 2" variant="filled" />

      <TextField
        id="outlined-select-currency"
        variant="filled"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          create new user
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={2500}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
