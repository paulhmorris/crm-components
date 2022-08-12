import { randText, randUuid } from "@ngneat/falso";
import { MarketCard } from "components/Jarvis/MarketCard";
import { JarvisNav } from "components/Navigation/JarvisNav";
import { SearchBox } from "components/SearchBox";
import { useMemo, useState } from "react";

type mockMarket = {
  id: string;
  name: string;
  type: string;
};

const data: mockMarket[] = [];

export default function Jarvis() {
  useMemo(() => {
    for (let i = 0; i < 50; i++) {
      data.push({
        id: randUuid(),
        name: randText({ charCount: 20 }),
        type: Math.random() > 0.3 ? "Tide Cleaners" : "Tide Dry Cleaners",
      });
    }
  }, []);

  const [filter, setFilter] = useState("");
  const filteredOptions =
    filter === ""
      ? data
      : data.filter((market) => {
          return market.name.toLowerCase().includes(filter.toLowerCase());
        });

  return (
    <>
      <JarvisNav />
      <div className="ml-[200px]">
        <div className="border-b border-gray-200 py-6 px-10">
          <div className="mb-12">
            <h1>Markets</h1>
            <p className="mt-1 text-secondary">{data.length} Markets</p>
          </div>
          <div>
            <SearchBox
              name="searchMarkets"
              placeholder="Filter by name"
              onChange={({ target }) => setFilter(target.value)}
            />
          </div>
        </div>
        <div className="mt-12 px-6">
          {filteredOptions.length === 0 ? (
            <div className="grid place-items-center">
              <h2 className="text-secondary">You filtered them all away 🥺</h2>
            </div>
          ) : (
            <ul className="flex flex-wrap gap-8">
              {filteredOptions.map(({ id, name, type }) => (
                <MarketCard key={id} title={name} businessType={type} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
