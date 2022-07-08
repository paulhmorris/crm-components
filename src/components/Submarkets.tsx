import { GetSubmarkets } from "apiResponseTypes";
import { useQuery } from "react-query";

export const Submarkets = () => {
  const { isLoading, error, data } = useQuery(
    "submarkets",
    (): GetSubmarkets =>
      fetch(
        "https://consumer.qa.tidelaundry.com/v2/submarket?submarketType=0"
      ).then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>An error has occurred</div>;

  const first = data[0];

  return (
    <div>
      <div key={first.id}>
        <h1>{first.name}</h1>
        <p>{first.shortName}</p>
        <p>{first.marketId}</p>
      </div>
    </div>
  );
};
