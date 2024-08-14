"use client";
import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { recipeAutoComplete } from "helpers/recipes";

export interface RecipesAutoCompleteProps {}

export interface OptionProps {
  id: number;
  title: string;
  imageType: string;
}

const RecipesAutoComplete: React.FC<RecipesAutoCompleteProps> = ({
  ...props
}) => {
  const [options, setOptions] = React.useState<OptionProps[]>([]);

  const handleChange = async (e: any) => {
    try {
      const res = await recipeAutoComplete(e.target.value);
      setOptions(res);
    } catch (error) {}
  };

  return (
    <>
      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search For Recipes..."
            onChange={handleChange}
          />
        )}
        getOptionKey={(options) => options.id}
        getOptionLabel={(options) => options.title}
        fullWidth
        sx={{ bgcolor: "background.paper", maxWidth: 600, borderRadius: 3 }}
        onClose={() => setOptions([])}
      />
    </>
  );
};

export default RecipesAutoComplete;
