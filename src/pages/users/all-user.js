import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";

import { deleteUser } from "../../store/slice/user";
import EditUserModal from "../../components/modal/user/Edit-User"
export default function UserList() {
  // Select user data from the Redux store
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  // State to manage the visibility of the edit user modal
  const [isEditUserModalOpen, setIsEditUserModalOpen] = React.useState(false);
  
  // State to keep track of the currently selected user ID for editing
  const [selectedUserId, setSelectedUserId] = React.useState();

  // Handler to open the edit user modal and set the selected user ID
  const handleEditModalOpen = (id) => {
    setSelectedUserId(id);
    setIsEditUserModalOpen(true);
  };

  // Handler to close the edit user modal
  const handleEditModalClose = () => {
    setIsEditUserModalOpen(false);
  };

  // Handler to dispatch the delete user action
  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      {/* Title for the user list */}
      <Typography variant="h4" className="header-title">All Users</Typography>

      {users.data.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell align="right"><b>Email</b></TableCell>
                <TableCell align="right"><b>Phone</b></TableCell>
                <TableCell align="right"><b>Action</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.phone}</TableCell>
                  <TableCell align="right">
                    {/* Edit and delete icons with corresponding handlers */}
                    <EditIcon className="cursor" onClick={() => handleEditModalOpen(user.id)} />
                    <DeleteIcon className="cursor color-red" onClick={() => handleDeleteUser(user.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        // Message displayed when no users are found
        <Typography variant="subtitle1">No users found</Typography>
      )}

      {/* Edit user modal */}
      <EditUserModal
        open={isEditUserModalOpen}
        onClose={handleEditModalClose}
        userId={selectedUserId}
      />
    </>
  );
}
