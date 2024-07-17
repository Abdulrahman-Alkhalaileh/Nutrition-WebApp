import { Box, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import MainLogo from "../Svg/MainLogo";

const headerLinksStyle = {
  fontSize: 15,
  fontWeight: "bold",
  color: '#953838'
};

const Header = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        py={1}
        border={1}
        bgcolor={"background.default"}
      >
        <Link to="./">
          <MainLogo />
        </Link>
        <Stack direction="row" spacing={3} alignItems="center">
          <Link to="./" style={headerLinksStyle}>
            HOME
          </Link>
          <Link to="./Recipes" style={headerLinksStyle}>
            RECIPES
          </Link>
          <Link to="./contact-us" style={headerLinksStyle}>
            CONTACT US
          </Link>
          <ThemeSwitch />
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default Header;
