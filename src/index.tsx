import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { responsiveFontSizes, ThemeProvider } from '@mui/material';
import { theme } from './themes/BaseTheme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);

