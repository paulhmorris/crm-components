import { randPastDate } from "@ngneat/falso";
import dayjs from "dayjs";
import { formatCurrency } from "utils/helpers";

export const mockProcessor = {
  name: "TDC Los Angeles",
  type: "Bundled & Dry Cleaning",
  bulkWF: true,
  address: "300 Ocean Front Walk Los Angeles, CA 90291",
  softwares: [
    "Raiders 10.1.2 - Device 34135353351",
    "Raiders 10.1.5 - Device 34135353351",
    "Ricky Bobby 10.1.2 - Device 35135135",
  ],
  isStorefront: false,
  minOrderWeight: 1,
  wholesaleCost: 1.5,
  linenCost: 2.0,
  bedbugCost: 4.0,
  markets: ["Tide Cleaners Los Angeles", "Tide Cleaners San Diego"],
};

export const ProcessorDetails = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="border-b border-gray-200 px-6 pt-3 pb-10">
        <h1>{mockProcessor.name}</h1>
        <p className="mt-1 text-xs text-secondary">
          Last updated {dayjs(randPastDate()).format("M/D/YY h:mma")}
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Processor Type</p>
        <p className="text-right">{mockProcessor.type}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-secondary">Address</p>
        <p className="text-right">{mockProcessor.address}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Software</p>
        <ul>
          {mockProcessor.softwares.map((software) => (
            <p key={software} className="text-right">
              {software}
            </p>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-secondary">Is a Storefront?</p>
        <p className="text-right">
          {mockProcessor.isStorefront ? "Yes" : "No"}
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Minimum Order Weight</p>
        <p className="text-right">{mockProcessor.minOrderWeight}lbs</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-secondary">Wholesale Cost per lb</p>
        <p className="text-right">
          {formatCurrency(mockProcessor.wholesaleCost, 2)}
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Linen Cost per lb</p>
        <p className="text-right">
          {formatCurrency(mockProcessor.linenCost, 2)}
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-secondary">Bedbug Removal Cost per lb</p>
        <p className="text-right">
          {formatCurrency(mockProcessor.bedbugCost, 2)}
        </p>
      </div>

      <h2 className="mt-10 border-b border-gray-200 px-6 py-3">
        Markets Served
      </h2>
      <ul>
        {mockProcessor.markets.map((market) => (
          <li
            key={market}
            className="flex items-center justify-between border-b border-gray-200 p-6 odd:bg-gray-100"
          >
            <p className="text-left text-secondary">Market</p>
            <p className="text-right text-tide-blue">{market}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
