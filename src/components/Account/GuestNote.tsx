import { Dialog } from "@headlessui/react";
import { Button } from "components/Button";
import { TextArea } from "components/Forms/TextArea";
import { Modal } from "components/Modals/Modal";
import { SubmitButton } from "components/SubmitButton";
import { useState } from "react";
import { Form } from "react-final-form";
import { sleep } from "utils/helpers";
import { required } from "utils/inputValidations";

export const GuestNote = () => {
  const [open, setOpen] = useState(false);
  async function saveNote(value: string) {
    await sleep(2000);
    console.log(value);
    setOpen(false);
  }

  return (
    <div className="flex justify-between">
      <p className="max-w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsam a
        deleniti amet quia doloremque harum fugiat eaque nostrum! Ducimus
        corporis, aperiam sit iusto praesentium vel ex! Eius, deserunt odit.
      </p>
      <div>
        <Button variant="tertiary" onClick={() => setOpen(true)}>
          Edit
        </Button>
      </div>

      <Modal isOpen={open} setIsOpen={setOpen}>
        <>
          <header className="border-b border-gray-200 pb-6">
            <Dialog.Title as="h2">👤 Edit Guest Note</Dialog.Title>
          </header>
          <Form
            onSubmit={saveNote}
            initialValues={{ guestNote: "This dude is weird!" }}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className="pt-6">
                <p className="mb-1">
                  ⛔️ You are editing a note the guest can see.
                </p>
                <div className="mb-2">
                  <TextArea
                    name="guestNote"
                    label="Guest Note"
                    fieldProps={{ validate: required }}
                  />
                </div>
                <div className="flex items-center justify-end space-x-3 text-right">
                  <Button
                    disabled={submitting}
                    variant="secondary"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <SubmitButton text="Save" submittingText="Saving..." />
                </div>
              </form>
            )}
          />
        </>
      </Modal>
    </div>
  );
};
