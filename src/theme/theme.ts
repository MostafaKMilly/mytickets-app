import { createTheme, PaletteColorOptions } from "@mui/material";

export const primary: Color = {
    main: "#ab2fd6",
    light: "#e065ff",
    dark: "#7700a4"
}

export const secondary: Color = {
    main: "#ffe2a7",
    light: "#ffffd9",
    dark: "#cbb078"
}


export const theme = createTheme({
    palette: {
        primary,
        secondary,
    },
    typography: {
        allVariants: {
            fontFamily: "Inter",
        },
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h5: {
            fontWeight: "bold"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
                variant: "contained"
            },
            styleOverrides: {
                contained: ({ ownerState }) => ({
                    color: ownerState.color === "primary" ? "white" : "#3F2525",
                }),
                root: {
                    borderRadius: "50px",
                    textTransform: "initial"
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "html , body": {
                    margin: 0,
                    padding: 0
                },
                "&": {
                    scrollbarWidth: "thin",
                    scrollbarColor: "#bfbfbf transparent",
                },
                "&::-webkit-scrollbar": {
                    width: "7px",
                    height: "7px",
                },
                "&::-webkit-scrollbar-track": {
                    background: "transparent",
                    borderRadius: "20px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#bfbfbf",
                    borderRadius: "20px",
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: "standard"
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#302D2D !important",
                }
            }
        }
    }
})

type Color = PaletteColorOptions