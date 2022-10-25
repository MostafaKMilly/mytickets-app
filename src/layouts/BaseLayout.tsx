import React from 'react';
import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import API from '../client/api';

const loader = async (request: LoaderFunctionArgs) => {
    const user = await API.get("users/me")
    if (!user) {
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

