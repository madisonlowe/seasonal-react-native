export type RootStackParamList = {
  Home: undefined;
  Details: { title: string; content: string; stock: number };
  About: undefined;
  SearchResults: undefined; // should have params for routing with search???
  SingleResultScreen: {
    ingredient: {
      id: number;
      name: string;
      imageurl: string;
      description: string;
      family: string;
      foodtype: string;
      usedas: string;
      month: [];
      allergens: string;
    };
  }; // same as above???
};
