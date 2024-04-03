export interface Ingredient {
  id: number;
  name: string;
  imageurl: string;
  description: string;
  family: string;
  foodtype: string;
  usedas: string;
  month: [];
  allergens: string;
}

export type RootStackParamList = {
  Home: undefined;
  Details: { title: string; content: string; stock: number };
  About: undefined;
  Credits: undefined;
  SearchResults: { ingredients: Ingredient[] };
  SingleResultScreen: {
    title: string;
    ingredient: Ingredient;
  };
};
