import { useState } from "react";
import { Form } from "react-final-form";
import { mustBeAlphanumeric } from "utils/inputValidations";
import { Button } from "./Button";
import { DropdownMenu } from "./DropdownMenu";
import { Datalist } from "./Forms/Datalist";
import { Select } from "./Forms/Select";
import { TextArea } from "./Forms/TextArea";
import { TextInput } from "./Forms/TextInput";
import { Toggle } from "./Forms/Toggle";
import { EmptyModal } from "./Modals/EmptyModal";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const ComponentDisplay = () => {
  const [emptyModalOpen, setEmptyModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <Datalist />
      <DropdownMenu />
      <div className="flex space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="primary" disabled>
          Primary
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="tertiary" disabled>
          Tertiary
        </Button>
      </div>
      <Form
        onSubmit={() => console.log("hello")}
        initialValues={{
          firstName: "Hello",
          errors: "()!@#4",
          textarea: "My old friend",
          myBoolean: true,
          myBoolean2: false,
          myDisabledBoolean: true,
          myDisabledBoolean2: false,
          mySelect: null,
        }}
        render={({ values }) => (
          <div className="space-y-8">
            <Select name="mySelect" label="My peeps" options={people} />
            <TextInput
              label="Basic field"
              name="firstName"
              type="text"
              required
              validate={mustBeAlphanumeric}
            />
            <TextInput
              label="Errored field"
              name="errors"
              type="text"
              validate={mustBeAlphanumeric}
            />
            <TextInput
              label="Disabled field"
              name="lastName"
              type="text"
              disabled
            />
            <TextArea name="textarea" label="regular" />
            <TextArea name="disabled" label="disabled" disabled />
            <Toggle name="myBoolean" label="Toggle me!" />
            <Toggle name="myBoolean2" label="Toggle me!" />
            <Toggle name="myDisabledBoolean" label="I'm disabled 🥺" disabled />
            <Toggle
              name="myDisabledBoolean2"
              label="I'm disabled 🥺"
              disabled
            />
            <div>
              <Button onClick={() => console.log(values)}>
                Log Form values
              </Button>
            </div>
          </div>
        )}
      />
      <Button variant="primary" onClick={() => setEmptyModalOpen(true)}>
        Open Modal
      </Button>
      <EmptyModal isOpen={emptyModalOpen} setIsOpen={setEmptyModalOpen}>
        <div className="grid h-48 w-full place-items-center">
          <p>Hello, I am your children.</p>
        </div>
      </EmptyModal>
    </div>
  );
};
