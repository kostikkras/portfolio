import { createTheme, Theme } from "@mui/material/styles";

// A custom theme for this app
const darkTheme: Theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#1C2536", //изменен секция about
            main: "#1C2536",
        },
        secondary: {
            light: "#d8d4e3", // изменен цвет иконок, кнопка гитхаб
            main: "#4b628f", // изменен фон иконок, кнопка демо
            dark: "#7b1fa2",
        },
        background: {
            paper: "#001c3c",
        },
    },
});

export default darkTheme;
