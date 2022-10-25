import { Box } from '@mui/material';
import React from 'react';
import { redirect } from 'react-router-dom';
import API from '../client/api';
import { AppBar } from '../shared/components';

const loader = async () => {
    const user = await API.get("users/me")
    if (!user) {
        localStorage.clear()
        return redirect("/login")
    }
}

export const BaseLayout = () => {
    return (
        <Box>
            <AppBar />
        </Box>
    );
}

BaseLayout.loader = loader

