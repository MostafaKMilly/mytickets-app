import { createTheme } from '@mui/material/styles';

const primaryColor = {
	light: "#ecd6f0",
	main: "#9c27b0",
	dark: "#4b0150",
};

const secondaryColor = {
	main: "#ffe2a7",
	light: "#fcf8e8",
	dark: "#dcbc8c",
};

const fontColor = "#302d2d";

export const theme = createTheme({
	palette: {
		primary: {
			...primaryColor,
		},
		secondary: {
			...secondaryColor,
		},
	},
	typography: {
		allVariants: {
			fontFamily: "Segoe UI",
			color: fontColor,
		},
	},
});
