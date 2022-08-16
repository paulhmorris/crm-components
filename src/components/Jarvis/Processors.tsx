import { ProcessorDetails } from "./ProcessorDetails";
import { ToggleBulkWF } from "./ToggleBulkWF";

export const Processors = () => {
  return (
    <>
      <section>
        <div className="mb-10">
          <h4 className="border-b border-gray-300 px-6 py-3 text-sm">
            Processor Settings
          </h4>
          <div className="mt-4 flex flex-col space-y-4 px-6">
            <ToggleBulkWF defaultValues={{ bulkWF: true }} />
          </div>
        </div>

        <h4 className="border-b border-gray-300 py-3 px-6 text-sm">
          Processors
        </h4>
        <ul>
          <li className="cursor-pointer border-b border-gray-300 bg-white px-6 py-3 text-xs hover:bg-blue-50/20">
            <p className="mb-2 text-sm font-bold text-tide-blue">
              TDC Los Angeles
            </p>
            <p className="text-gray-secondary">Bundled and Dry Cleaning</p>
            <p className="text-gray-secondary">Tide Cleaners Los Angeles</p>
          </li>
        </ul>
      </section>
      <div className="mt-40">
        <ProcessorDetails />
      </div>
    </>
  );
};
