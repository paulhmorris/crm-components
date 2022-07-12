import { Tab } from "@headlessui/react";
import { GuestNote } from "./GuestNote";
import { InternalNote } from "./InternalNote";

export const AccountNotesTabs = () => {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="tab-list">
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          👀 Internal Notes
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          👤 Guest Note
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="p-6">
            <InternalNote />
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <GuestNote />
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
