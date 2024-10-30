import axios from "axios";
import { SUPERHEROES_URL } from "../constant";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`${SUPERHEROES_URL}/${heroId}`);
};

export const DynamicParallel = ({ heroIds }) => {
  const queryResuts = useQueries(
    heroIds.map((id) => {
      return {
        querykey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  console.log({ queryResuts });
  return <div>DynamicParallel</div>;
};
