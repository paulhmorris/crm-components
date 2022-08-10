import { Button } from "components/Button";
import { GuestNoteModal } from "components/Modals/GuestNoteModal";
import { useState } from "react";

export const GuestNote = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between">
      <GuestNoteModal isOpen={open} setIsOpen={setOpen} />
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
