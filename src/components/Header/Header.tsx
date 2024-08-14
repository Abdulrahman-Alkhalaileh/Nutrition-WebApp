import { Box, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import MainLogo from "../Svg/MainLogo";
// import SideNav from "./SideNav";

const headerLinksStyle = {
  fontSize: 15,
  fontWeight: 800,
  color: "inherit",
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
        boxShadow='black 0px 0px 5px 0px'
        bgcolor="background.default"
      >
        <Link to="./">
          <MainLogo />
        </Link>
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          color="text.primary"
        >
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
      {/* <SideNav /> */}
      <Outlet />
    </>
  );
};

export default Header;
