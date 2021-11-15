import { NEWS_API_KEY } from "./config";

export const getArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=id&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};