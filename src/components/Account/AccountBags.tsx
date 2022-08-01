import { Dialog } from "@headlessui/react";
import { Button } from "components/Button";
import { TextInput } from "components/Forms/TextInput";
import { ButtonSpinner } from "components/Loaders/ButtonSpinner";
import { Modal } from "components/Modals/Modal";
import { GenericDot } from "components/Tags";
import dayjs from "dayjs";
import { mockBags } from "mockData";
import { useState } from "react";
import { Form } from "react-final-form";
import { sleep } from "utils/helpers";

export const AccountBags = () => {
  const [activateModalOpen, setActivateModalOpen] = useState(false);
  async function activateBag({
    orderType,
    lockerNumber,
  }: {
    orderType: string;
    lockerNumber: number;
  }) {
    await sleep(2000);
    // setActivateModalOpen(false);
    console.log(orderType);
    console.log(lockerNumber);
    return {
      barcode: "This bag is already in use",
    };
  }

  return (
    <section className="flex w-full flex-col">
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
          className="flex items-center justify-between border-b border-gray-200 p-6 text-xs"
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
              <p className="text-secondary">
                Last scanned on {dayjs(bag.lastScanned).format("MM/DD/YYYY")}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Bag Activation Modal */}
      {/* Order Request Modal */}
      <Modal isOpen={activateModalOpen} setIsOpen={setActivateModalOpen}>
        <div>
          <header className="border-b border-gray-200 pb-6">
            <Dialog.Title as="h2">Activate Bag</Dialog.Title>
          </header>
          <Form
            onSubmit={activateBag}
            defaultValues={{ orderType: "dryClean" }}
            render={({ submitting, valid, dirty }) => (
              <>
                <TextInput label="Barcode" name="barcode" />
                <div className="mt-4 flex items-center justify-end space-x-3 text-right">
                  <Button
                    disabled={submitting}
                    variant="secondary"
                    onClick={() => setActivateModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={submitting || !valid || !dirty}
                    type="submit"
                    variant="primary"
                  >
                    {submitting ? "Activating..." : "Activate"}
                    {submitting && (
                      <span className="-mr-1 ml-2">
                        <ButtonSpinner />
                      </span>
                    )}
                  </Button>
                </div>
              </>
            )}
          />
        </div>
      </Modal>
    </section>
  );
};
