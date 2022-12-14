import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";

const drawerWidth = "160px";

const AudienceMemberNavBar = () => {
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pages = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Artists", path: "/viewAllArtists" },
    { label: "Events", path: "/viewEvents" },
    { label: "Profile", path: "/profile" },
    { label: "Log Out", path: "/home" },
  ];

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const drawer = (
    <Box sx={{ backgroundColor: "#303030", color: "#fff", height: "100%" }}>
      <Toolbar>
        <Typography>{`${user.firstName} ${user.lastName}`}</Typography>
        <Avatar
          alt="Remy Sharp"
          src={user.imageUrl}
          sx={{ marginLeft: "15px" }}
        />
      </Toolbar>
      <Divider />
      <List>
        {pages.map((item, index) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => {
                if (item.label === "Log Out") {
                  logout();
                } else {
                  navigate(item.path);
                }
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        margin: 0,
        height: { sm: "7vh", xs: "5vh" },
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          ml: { md: `${drawerWidth}px` },
          backgroundColor: "#0A0A0A",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { md: "110vw" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: "500", fontSize: "25px" }}
          >
            FOUNDSOUND AUDIENCE MEMBER
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default AudienceMemberNavBar;
