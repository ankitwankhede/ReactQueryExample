import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHero = () => {
  const { heroId } = useParams();
  const { isLoding, data, isError, error } = useSuperHeroData(heroId);

  if (isLoding) return <h2>Loading . . . </h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h1>{data?.data.name}</h1>
      <h1>{data?.data.alterEgo}</h1>
    </>
  );
};
