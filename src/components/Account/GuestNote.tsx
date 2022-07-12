import { Button } from "components/Button";
import { TextArea } from "components/Forms/TextArea";
import { EmptyModal } from "components/Modals/EmptyModal";
import { useState } from "react";
import { Form } from "react-final-form";

export const GuestNote = () => {
  const [open, setOpen] = useState(false);

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

      <EmptyModal isOpen={open} setIsOpen={setOpen}>
        <h2>👤 Edit Guest Note</h2>
        <Form
          onSubmit={() => console.log("Saved note")}
          render={() => <TextArea name="guestNote" label="Guest Note" />}
        />
      </EmptyModal>
    </div>
  );
};
