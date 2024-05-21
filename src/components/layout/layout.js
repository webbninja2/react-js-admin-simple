import React from "react";
import SideMenu from "./sideMenu";
import { Box } from "@mui/material";

function MainLayout({ children }) {
  return (
    <>
      <SideMenu />
      <Box component="main" sx={{ flexGrow: 2, p: "0 1rem 0 17rem" }}>
        {children}
      </Box>
    </>
  );
}

export default MainLayout;
