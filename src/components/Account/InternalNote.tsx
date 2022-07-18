import { Dialog } from "@headlessui/react";
import { Button } from "components/Button";
import { TextArea } from "components/Forms/TextArea";
import { ButtonSpinner } from "components/Loaders/ButtonSpinner";
import { Modal } from "components/Modals/Modal";
import { useState } from "react";
import { Form } from "react-final-form";
import { sleep } from "utils/helpers";

export const InternalNote = () => {
  const [open, setOpen] = useState(false);

  async function saveNote(value: string) {
    await sleep(2000);
    console.log(value);
    setOpen(false);
  }

  return (
    <div className="flex justify-between">
      <p className="max-w-[80%] text-secondary">
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
            <Dialog.Title as="h2">👀 Edit Internal Note</Dialog.Title>
          </header>
          <Form
            onSubmit={saveNote}
            initialValues={{ internalNote: "abc123" }}
            render={({ handleSubmit, submitting, pristine }) => (
              <form onSubmit={handleSubmit} className="pt-6">
                <p className="mb-1">✅ Only employees can read this note.</p>
                <div className="mb-6">
                  <TextArea name="internalNote" label="Internal Note" />
                </div>
                <div className="flex items-center justify-end space-x-3 text-right">
                  <Button
                    disabled={submitting}
                    variant="secondary"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={submitting || pristine}
                    type="submit"
                    variant="primary"
                  >
                    {submitting ? "Saving..." : "Save"}
                    {submitting && (
                      <span className="-mr-1 ml-2">
                        <ButtonSpinner />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          />
        </>
      </Modal>
    </div>
  );
};
