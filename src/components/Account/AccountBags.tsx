import { mockBags } from "mockData";

export const AccountBags = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="flex items-end justify-between border-b border-gray-200 px-6 pb-3 pt-8">
        <h4>Bags</h4>
      </div>
      {mockBags.map((bag) => (
        <div
          key={bag.id}
          className="flex items-center justify-between border-b border-gray-200 p-6 text-xs"
        >
          <p>{bag.typeId === 1 ? "Dry Clean" : "Bundled Wash & Fold"}</p>
          <p>{bag.barCode}</p>
        </div>
      ))}
    </section>
  );
};
