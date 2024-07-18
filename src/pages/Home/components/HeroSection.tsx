import React from "react";
import { Box, Stack, StackProps, Typography } from "@mui/material";
import RecipesAutoComplete from "./RecipesAutoComplete";

export interface HeroSectionProps extends StackProps {}

const HeroSection: React.FC<HeroSectionProps> = ({ ...props }) => {
  return (
    <>
      <Stack
        alignItems="center"
        color="text.primary"
        spacing={15}
        {...props}
        sx={{
          p: 4,
          pb:8,
          backgroundPosition: "center",
          backgroundSize: "auto",
          backgroundImage: `linear-gradient(45deg, rgba(52, 1, 0, 0.75), rgba(255, 255, 255, 0.66)), url(
          'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          ...props.sx,
        }}
      >
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography
            variant="h1"
            fontSize={{sm: '3rem',md:"4rem"}}
            textAlign='center'
            color="#ffffff"
            sx={{ textShadow: "-2px 5px 2px #000000" }}
            gutterBottom
          >
            DISCOVER DELICIOUS RECIPES
          </Typography>
          <Typography
            variant="h1"
            color="#ededed"
            fontWeight={500}
            sx={{ textShadow: "-4px 2px 0px #000000" }}
            textAlign="center"
            maxWidth={800}
            fontSize={{xs: '1rem',sm: '1.5rem',md:"2.5rem"}}
            gutterBottom
          >
            Explore thousands of recipes, find the perfect ingredients, and
            start cooking today!
          </Typography>
        </Box>
        <RecipesAutoComplete />
      </Stack>
    </>
  );
};

export default HeroSection;
