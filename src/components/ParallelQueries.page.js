import axios from "axios";
import { FRIENDS_URL, SUPERHEROES_URL } from "../constant";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get(SUPERHEROES_URL);
};

const fetchFriends = () => {
  return axios.get(FRIENDS_URL);
};

export const ParallelQueries = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div>ParallelQueries</div>;
};
