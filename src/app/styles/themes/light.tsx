import { createTheme, Theme } from "@mui/material/styles";

const normalTheme: Theme = createTheme({
    palette: {
        primary: {
            light: "#fff", //изменен секция about
            main: "#807d85", // изменен appbar
            dark: "#1565c0",
            contrastText: "#fff",
        },
        secondary: {
            light: "#0eb0e1", // изменен цвет иконок, кнопка гитхаб
            main: "#172746", // изменен фон иконок, кнопка демо
            dark: "#7b1fa2",
            contrastText: "#fff",
        },
        error: {
            light: "#ef5350",
            main: "#d32f2f",
            dark: "#c62828",
            contrastText: "#fff",
        },
        // background: {
        //     paper: '#d1cfcb', //изменен  appbar
        // },
        mode: "light",
    },
});

export default normalTheme;
