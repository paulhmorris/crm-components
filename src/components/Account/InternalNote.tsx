import { Button } from "components/Button";
import { InternalNoteModal } from "components/Modals/InternalNoteModal";
import { useState } from "react";

export const InternalNote = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between">
      <InternalNoteModal isOpen={open} setIsOpen={setOpen} />
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
    </div>
  );
};
