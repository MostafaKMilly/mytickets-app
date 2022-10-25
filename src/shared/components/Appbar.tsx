import React from "react";
import { AppBar as MuiAppBar, Avatar, Box, IconButton, Menu, MenuItem, TextField, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Container from "./Container";
import SearchIcon from '@mui/icons-material/Search';

export const AppBar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear()
        handleClose()
        navigate("/login")
    }

    return (
        <MuiAppBar
            position="sticky"
            color="inherit"
            elevation={0}>
            <Container>
                <Toolbar
                    disableGutters
                    variant="dense"
                    sx={{ justifyContent: "space-between", alignItems: "center" }}
                >
                    <Logo
                        width="40px"
                        height="40px"
                        onClick={() => navigate("/")}
                        sx={{ cursor: "pointer" }}
                    />
                    <Box display="flex" columnGap={4} alignItems="center">
                        <TextField variant="outlined" color="secondary"
                            size="small" placeholder="Search for ticket" InputProps={{
                                startAdornment: <SearchIcon />
                            }} />
                        <IconButton
                            onClick={handleClick}
                            size="small"
                        >
                            <Avatar
                                sx={{ width: "50px", height: "50px" }}
                                src={"assets/images/Avatar.png"}
                            />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            elevation={0}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </MuiAppBar >
    );
}

