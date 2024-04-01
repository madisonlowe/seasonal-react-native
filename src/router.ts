export type RootStackParamList = {
  Home: undefined;
  Details: { title: string; content: string; stock: number };
  About: undefined;
  SearchResults: undefined; // should have params for routing with search???
  SingleResultScreen: { ingredient: { name: string } }; // same as above???
};
