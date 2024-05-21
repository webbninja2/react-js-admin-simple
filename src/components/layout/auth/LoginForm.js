import React from "react";
import { Button, Box, Container, FormControl, Typography } from "@mui/material";
import InputFormText from "../../../utility/forms/inputFormText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./loginValidation";
import { useNavigate } from "react-router-dom";
import { errorMsg, successMsg } from "../../../utility/toaster";

const LoginForm = () => {
  const navigate = useNavigate();

  // Dummy user details for login
  const dummyUser = {
    email: "admin@yopmail.com",
    password: "12345",
  };

  // Setting up form handling with react-hook-form and validation schema
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(LoginSchema),
  });

  // Handler for form submission and login logic
  const handleLogin = async (data) => {
    if (dummyUser.email === data.email && dummyUser.password === data.password) {
      localStorage.setItem("userDetails", JSON.stringify(dummyUser));
      navigate("/dashboard");
      successMsg("Logged in Successfully");
    } else {
      errorMsg("Invalid Credentials");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        className="loginOuter"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        }}
      >
        {/* Header with title and dummy login information */}
        <Box className="flex bg-black w-full items-center justify-center py-1">
          <Typography variant="h5" color="textPrimary">
            Sign in to your account <br />
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Email: admin@yopmail.com, Password: 12345
          </Typography>
        </Box>

        <Box sx={{ mt: 1, width: "100%" }}>
          {/* Login form */}
          <form onSubmit={handleSubmit(handleLogin)}>
            <FormControl fullWidth className="!mt-6">
              <InputFormText
                control={control}
                name="email"
                label="Email"
                error={errors}
                className="w-full mb-4"
              />
            </FormControl>
            <FormControl fullWidth className="!mt-6">
              <InputFormText
                control={control}
                name="password"
                label="Password"
                error={errors}
                className="w-full"
                type="password"
              />
            </FormControl>
            <Button
              className="bg-blue-500"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
