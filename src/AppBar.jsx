import * as React from "react";
import AppBarMui from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMui position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ruta del cister 2024
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBarMui>
    </Box>
  );
}
