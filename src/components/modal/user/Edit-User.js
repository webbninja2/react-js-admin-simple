import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import InputFormText from "../../../utility/forms/inputFormText";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../store/slice/user";
import { successMsg } from "../../../utility/toaster";

function EditUserModal({ open, onClose, userId }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  // Setting up form handling with react-hook-form
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  // Handler for form submission
  const handleEditUser = (data) => {
    dispatch(editUser(data));
  };

  // Effect to populate form fields when a user is selected
  React.useEffect(() => {
    if (userId) {
      const user = users.data.find((user) => user.id === userId);
      if (user) {
        reset(user);
      }
    }
  }, [userId, reset, users.data]);

  // Handler for closing the modal and showing a success message
  const handleCloseModal = () => {
    successMsg("User information successfully updated");
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="edit-user-dialog-title"
        aria-describedby="edit-user-dialog-description"
      >
        <DialogTitle id="edit-user-dialog-title">{"Edit User Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="edit-user-dialog-description">
            <form onSubmit={handleSubmit(handleEditUser)} style={{ marginTop: "10px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputFormText
                    control={control}
                    name="name"
                    label="Name"
                    error={errors}
                    className="w-full mb-4"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputFormText
                    control={control}
                    name="email"
                    label="Email"
                    error={errors}
                    className="w-full mb-4"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputFormText
                    control={control}
                    name="phone"
                    label="Phone"
                    error={errors}
                    className="w-full mb-4"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    onClick={handleCloseModal}
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default EditUserModal;
