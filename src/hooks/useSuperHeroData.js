import { SUPERHEROES_URL } from "../constant";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`${SUPERHEROES_URL}/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  //   return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId));
  return useQuery(["super-hero", heroId], fetchSuperHero); //can get heroId from array passed to the usequery
};
