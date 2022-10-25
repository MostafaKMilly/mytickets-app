import React from "react";
import { AppBar as MuiAppBar, Box, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Container from "./Container";

export const AppBar = () => {
    const navigate = useNavigate();

    return (
        <MuiAppBar
            position="sticky"
            color="inherit"
            elevation={0}>
            <Container>
                <Toolbar
                    disableGutters
                    variant="dense"
                    sx={{ justifyContent: "space-between" }}
                >
                    <Box display="flex" alignItems="center" columnGap={2} zIndex={99}>
                        <Logo
                            width="40px"
                            height="40px"
                            onClick={() => navigate("/")}
                            sx={{ cursor: "pointer" }}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </MuiAppBar>
    );
}

