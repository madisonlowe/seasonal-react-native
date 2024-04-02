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
  SearchResults: { ingredients: Ingredient[] }; // should have params for routing with search???
  SingleResultScreen: {
    title: string;
    ingredient: Ingredient;
  }; // same as above???
};
