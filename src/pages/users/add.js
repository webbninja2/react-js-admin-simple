import { Button, Grid } from "@mui/material";
import React from "react";
import InputFormText from "../../utility/forms/inputFormText";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slice/user";
import uniqid from "uniqid";
import { successMsg } from "../../utility/toaster";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/layout/Header";

function AddUser() {
  const dispatch = useDispatch(); //dispatch hook
  const navigate =useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  ///add user handler
  const addUserHandler = (data) => {
    const uId = uniqid();
    dispatch(addUser({ id: uId, ...data }));
    successMsg("User added successfully");
    navigate("/all-user")
  };

  return (
    <>
    <PageHeader title="Add User" />
      <form onSubmit={handleSubmit(addUserHandler)}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <InputFormText
              control={control}
              name="name"
              label="Name"
              error={errors}
              className="w-full mb-4"
            />
          </Grid>

          <Grid item xs={4}>
            <InputFormText
              control={control}
              name="email"
              label="Email"
              error={errors}
              className="w-full mb-4"
            />
          </Grid>

          <Grid item xs={4}>
            <InputFormText
              control={control}
              name="phone"
              label="Phone"
              error={errors}
              className="w-full mb-4"
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              className="bg-blue-500"
              type="submit"
              variant="contained"
              sx={{ mb: 2 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default AddUser;
