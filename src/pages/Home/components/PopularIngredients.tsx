"use client";
import React from "react";
import { Grid, Stack, StackProps, Typography } from "@mui/material";
import CustomCard from "components/Cards/CustomCard";
import { getIngredients } from "helpers/ingredient";
import { useQuery } from "@tanstack/react-query";

export interface PopularIngredientsProps extends StackProps {}

const PopularIngredients: React.FC<PopularIngredientsProps> = ({
  ...props
}) => {
  const { isPending, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => getIngredients(4, "wing"),
  });

  if (isPending) return <h1>Loading...</h1>;

  return (
    <>
      <Stack
        color="text.primary"
        spacing={5}
        m={{ xs: 0, sm: 2, md: 3 }}
        p={3}
        borderRadius={3}
        bgcolor="background.default"
        display="flex"
        flexDirection="column"
        alignItems="center"
        {...props}
      >
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ textShadow: "-1px 1px 2px #000000" }}
        >
          POPULAR INGREDIENTS
        </Typography>
        <Typography
          variant="h3"
          maxWidth={600}
          textAlign="center"
          px={3}
          color="text.secondary"
          sx={{ textShadow: "-1px 0px 0px #000000" }}
          fontSize={{ xs: "1rem", sm: "1.5rem" }}
        >
          You Can Choose Between Ingredients To See What Recipes You Can Do With
          them
        </Typography>
        <Grid container rowGap={5} display="flex" justifyContent="center">
          {data.data.results?.map((card: any) => (
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
                sx={{ minWidth: 300 }}
                title={card.name}
                description={card.summary}
                imageUrl={`${process.env.REACT_APP_IMAGE_URL}/ingredients_100x100/${card.image}`}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default PopularIngredients;
