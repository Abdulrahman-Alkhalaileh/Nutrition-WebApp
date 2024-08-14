import axios from "axios";
import { RandomRecipesType, RecipeAutoCompleteResponse } from "./types/recipe";

export const getRandomRecipes = async (
  number: number
): Promise<RandomRecipesType> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_MAIN_DOMAIN}/recipes/random?number=${number}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const recipeAutoComplete = async (
  query: string
): Promise<RecipeAutoCompleteResponse> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_MAIN_DOMAIN}/recipes/autocomplete?number=5&query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
