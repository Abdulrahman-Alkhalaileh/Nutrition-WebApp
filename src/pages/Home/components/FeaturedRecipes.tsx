"use client";
import { Button, Grid, Stack, StackProps, Typography } from "@mui/material";
import React from "react";
import CustomCard from "components/Cards/CustomCard";
import { getRandomRecipes } from "helpers/recipes";
import { RecipeType } from "helpers/types/recipe";

export interface FeaturedRecipesProps extends StackProps {}

const FeaturedRecipes: React.FC<FeaturedRecipesProps> = ({ ...props }) => {
  const [recipes, setRecipes] = React.useState<RecipeType[]>([]);

  React.useEffect(() => {
    getRandomRecipes(4).then((res) => setRecipes(res.recipes));
  }, []);

  return (
    <>
      <Stack color="text.primary" spacing={6} {...props}>
        <Typography variant="h1" textAlign="center">
          FEATURED RECIPES
        </Typography>
        <Grid container rowGap={5} display="flex" justifyContent="center">
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
                  actions={
                    <Button
                      size="small"
                      variant="outlined"
                      fullWidth
                      sx={{ maxWidth: 150,m:2 }}
                      color="error"
                    >
                      Read More
                    </Button>
                  }
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </>
  );
};

export default FeaturedRecipes;
