"use client";
import { Grid, Stack, StackProps, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../../../components/Cards/CustomCard";
import axios from "axios";

export interface FeaturedRecipesProps extends StackProps{}

const FeaturedRecipes: React.FC<FeaturedRecipesProps> = ({ ...props }) => {
  const [recipes, setRecipes] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_MAIN_DOMAIN}/recipes/random?number=4&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setRecipes(res.data.recipes));
  }, []);

  return (
    <>
      <Stack color="text.primary" spacing={6} {...props}>
        <Typography variant="h1" textAlign="center">
          FEATURED RECIPES
        </Typography>
        <Grid container rowGap={5} display='flex' justifyContent='center'>
          {recipes[0] &&
            recipes?.map((card) => (
              <Grid
                item
                key={card.id}
                xl={3}
                lg={4}
                md={6}
                sm={12}
                display="flex"
                justifyContent="center"
                p={2}
              >
                <CustomCard
                  title={card.title}
                  description={card.summary}
                  imageUrl={card.image}
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </>
  );
};

export default FeaturedRecipes;
