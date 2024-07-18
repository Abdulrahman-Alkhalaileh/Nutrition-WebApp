"use client";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import React from "react";

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
      const res = await axios.get(
        `${process.env.REACT_APP_MAIN_DOMAIN}/recipes/autocomplete?number=5&query=${e.target.value}&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setOptions(res.data);
      console.log(options);
    } catch (error) {
      console.log(error);
    }
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
        sx={{ bgcolor: "background.default", maxWidth: 600, borderRadius: 3 }}
        onClose={() => setOptions([])}
      />
    </>
  );
};

export default RecipesAutoComplete;
