import { URL } from "../constant";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios.get(URL);

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 0,
    // refetchOnMou nt: true,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // refetchOnWindowFocus: true, // true | false | 'always' tab focus
    enabled: false, // false (disable on mount)
    onSuccess,
    onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};
