import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import {
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Switcher } from "../../../app/Switcher";

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    { label: "О себе", link: "about" },
    { label: "Проекты", link: "projects" },
    { label: "Контакты", link: "contact" },
];

export function ResponsiveAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleCloseDrawer = () => {
        setMobileOpen(false);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                PORTFOLIO
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <Link
                                to={item.link}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                onClick={handleCloseDrawer}
                            >
                                <ListItemText primary={item.label} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar
                sx={{ backgroundColor: "secondary.main", boxShadow: "none" }}
                component="nav"
                position="sticky"
            >
                <Container>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            Portfolio
                        </Typography>
                        <Box
                            display="flex"
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                alignItems: "center",
                            }}
                        >
                            {navItems.map((item) => (
                                <Link
                                    to={item.link}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}
                                >
                                    <Button
                                        key={item.label}
                                        // color="primary.contrastText"
                                        sx={{ color: "primary.contrastText" }}
                                    >
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                            <Switcher />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            backdropFilter: "blur(30px)",
                        },
                    }}
                >
                    {drawer}
                    <Box sx={{ textAlign: "center", display: "inline-block" }}>
                        <Switcher />
                    </Box>
                </Drawer>
            </Box>
        </>
    );
}
