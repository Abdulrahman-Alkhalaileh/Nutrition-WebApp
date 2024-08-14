import axios from "axios";

export const getIngredients = async (number: number,query: string): Promise<any> => {
  return axios.get(
    `${
      process.env.REACT_APP_MAIN_DOMAIN
    }/food/ingredients/search?query=${query}&number=${number}&apiKey=${
      process.env.REACT_APP_API_KEY
    }`
  );
};

