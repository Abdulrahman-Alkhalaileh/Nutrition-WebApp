import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import FeaturedRecipes from "./components/FeaturedRecipes";
import PopularIngredients from "./components/PopularIngredients";

const Home = () => {
  return (
    <>
      <Box >
        <HeroSection mb={8}/>
        <FeaturedRecipes mb={8}/>
        <PopularIngredients mb={8}/>
      </Box>
    </>
  );
};

export default Home;
