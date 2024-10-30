import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroes = () => {
  const onSuccess = (data) => console.log(`Success  ${data}`);
  const onError = (error) => console.log(`Error ${error}`);

  const { data, isLoading, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) return <h2>Loading . . </h2>;

  if (isError) return <h2>{error}</h2>;
  return (
    <>
      <h2>RQ Super heroes</h2>
      <button onClick={refetch}>Refresh</button>
      {/* {data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))} */}
      {data?.map((hero, index) => (
        <div key={index}>{hero}</div>
      ))}
    </>
  );
};
