import React from 'react';
import { redirect } from 'react-router-dom';
import API from '../client/api';

const loader = async () => {
    const user = await API.get("users/me")
    if (!user) {
        localStorage.clear()
        return redirect("/login")
    }
}

export const BaseLayout = () => {
    return (
        <div>

        </div>
    );
}

BaseLayout.loader = loader

