import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ overflow: "hidden", height: 800 }} border={1}>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/837/898/423/food-fruit-healthy-acorn-wallpaper-preview.jpg"
          height={800}
          width={"100%"}
          alt="banner"
        />
      </Box>
      <Box m={3}></Box>
    </>
  );
};

export default Home;
