import axios from "axios";
import { useQuery } from "react-query";
import { URL } from "../constant";

const fetchSuperHeroes = () => axios.get(URL);

export const RQSuperHeroes = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 5000,
      staleTime: 0,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) return <h2>Loading . . </h2>;

  if (isError) return <h2>{error}</h2>;
  return (
    <>
      <h2>RQ Super heroes</h2>
      {data.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );

  return <div>RQSuperHeroes</div>;
};
