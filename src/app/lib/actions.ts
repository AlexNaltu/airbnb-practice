import { AnimeClient } from "@tutkli/jikan-ts";

const animeClient = new AnimeClient();

export const getRecommendations = async () => {
  const recommendations = await animeClient.getAnimeRecommendations(1);
  return recommendations;
};

export const getNews = async () => {
  const news = await animeClient.getAnimeNews(1, 1);
  return news;
};

export const getAnimeFullById = async () => {
  const animeFullById = await animeClient.getAnimeFullById(1);
  return animeFullById;
};

export const getAnimeCharactersStaff = async () => {
  const animeCharactersStaff = await animeClient.getAnimeStaff;
  return animeCharactersStaff;
};

export const getAnimeEpisodes = async () => {
  const animeEpisodes = await animeClient.getAnimeEpisodes(1, 1);
  return animeEpisodes;
};

export const getRelations = async () => {
  const relations = await animeClient.getAnimeRelations(1);
  return relations;
};
