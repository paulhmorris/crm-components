import { Button } from "components/Button";
import { BagActivationModal } from "components/Modals/BagActivationModal";
import { GenericDot } from "components/Tags";
import dayjs from "dayjs";
import { mockBags } from "mockData";
import { useState } from "react";

export const AccountBags = () => {
  const [activateModalOpen, setActivateModalOpen] = useState(false);

  return (
    <section className="flex w-full flex-col">
      <BagActivationModal
        isOpen={activateModalOpen}
        setIsOpen={setActivateModalOpen}
      />
      <div className="flex items-end justify-between border-b border-gray-200 px-6 py-3">
        <h4>Bags</h4>
        <Button
          variant="tertiary"
          className="-mb-2 -mr-2"
          onClick={() => setActivateModalOpen(true)}
        >
          + Activate Bag
        </Button>
      </div>
      {mockBags.map((bag) => (
        <div
          key={bag.id}
          className="flex items-center justify-between border-b border-gray-200 p-6 text-sm"
        >
          <div className="space-y-0.5">
            <p className="font-bold">
              {bag.typeId === 1 ? "Dry Clean" : "Bundled Wash & Fold"}
            </p>
            <p>
              <GenericDot color={bag.hex} />
              <span className="ml-2 capitalize">{bag.colorName}</span>
            </p>
          </div>
          <div className="flex flex-col items-end justify-center space-y-0.5">
            <p className="font-bold">{bag.barCode}</p>
            {bag.lastScanned && (
              <p className="text-gray-secondary">
                Last scanned on {dayjs(bag.lastScanned).format("MM/DD/YYYY")}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
