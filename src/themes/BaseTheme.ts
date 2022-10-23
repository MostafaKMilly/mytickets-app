import { createTheme } from '@mui/material/styles';

export const primaryColor = {
	light: "#C34AED",
	main: "#AB31D6",
	dark: "#930FBF",
};

export const secondaryColor = {
	light: "#FFFFD3",
	main: "#FFE2A7",
	dark: "#D1B67D",
};

export const successColor = {
	light: "#78FF9A",
	main: "#48E674",
	dark: "#00BD4F",
};

export const errorColor = {
	light: "#FF645F",
	main: "#E94848",
	dark: "#CB2932",
};

export const warningColor = {
	light: "#FFE65C",
	main: "#F5BF33",
	dark: "#CA9900",
};

export const fontColor = "#302d2d";

export const theme = createTheme({
	palette: {
		primary: {
			...primaryColor,
		},
		secondary: {
			...secondaryColor,
		},
		success: {
			...successColor,
		},
		error: {
			...errorColor,
		},
		warning: {
			...warningColor,
		},
	},
	typography: {
		allVariants: {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			color: fontColor,
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				variant: "contained",
			},
			styleOverrides: {
				root: {
					borderRadius: "3.125rem",
					fontWeight: 600,
					padding: "0.625rem 3.25rem 0.625rem 3.25rem",
				},
			},
		},
	}
});
