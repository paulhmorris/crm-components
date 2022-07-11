import { useState } from "react";
import { Form } from "react-final-form";
import { mustBeAlphanumeric } from "utils/inputValidations";
import { Button } from "./Button";
import { CardText } from "./CardText";
import { Checkbox } from "./Forms/Checkbox";
import { Select } from "./Forms/Select";
import { SelectOption } from "./Forms/SelectOption";
import { TextArea } from "./Forms/TextArea";
import { TextInput } from "./Forms/TextInput";
import { Toggle } from "./Forms/Toggle";
import { EmptyModal } from "./Modals/EmptyModal";
import { SearchBox } from "./SearchBox";
import {
  CouponTag,
  DefaultTag,
  DryCleanTag,
  GroupNameTag,
  NewLeadTag,
  SpecialServicesTag,
  TaxExemptTag,
  WashFoldTag,
} from "./Tags";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

export const ComponentDisplay = () => {
  const [emptyModalOpen, setEmptyModalOpen] = useState(false);

  return (
    <div className="space-y-8">
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
        <Button variant="card">
          <CardText title="Campus" subTitle="Tufts University"/>
        </Button>
        <Button variant="card">
          <CardText title="Tide Cleaners" subTitle="Tide Cleaners Boston"/>
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="tertiary" disabled>
          Tertiary
        </Button>
      </div>
      <div>
        <p>
          Here is some{" "}
          <a className="inline-block" href="#">
            link text
          </a>{" "}
          in a sentence
        </p>

        <p className="text-error">Error text</p>
        <p className="font-bold text-success">Success text</p>
      </div>
      <Form
        onSubmit={() => console.log("hello")}
        initialValues={{
          firstName: "Hello",
          lastNameDisabled: "Can't touch this",
          errors: "Darknes$",
          mySelect: null,
          textarea: "My old friend",
          myBoolean: true,
          myBoolean2: false,
          myDisabledBoolean: true,
          myDisabledBoolean2: false,
          checkbox: true,
          checkbox2: false,
          checkbox3: true,
          checkbox4: false,
          disabledWithValue: "I've got some notes here you can't change...",
        }}
        render={({ values }) => (
          <div className="space-y-8">
            <Select name="mySelect" label="My peeps">
              {people.map((person) => (
                <SelectOption
                  key={person.id}
                  value={person.name}
                  displayText={person.name}
                />
              ))}
            </Select>
            <TextInput
              label="Basic field"
              name="firstName"
              type="text"
              fieldProps={{
                validate: (v) => mustBeAlphanumeric(v),
              }}
              required
            />
            <TextInput
              label="Errored field"
              name="errors"
              type="text"
              description="This is my field description"
              fieldProps={{
                validate: (v) => mustBeAlphanumeric(v),
              }}
            />
            <TextInput
              label="Disabled field"
              name="lastName"
              type="text"
              disabled
            />
            <TextInput
              label="Disabled field with text"
              name="lastNameDisabled"
              type="text"
              disabled
            />
            <TextArea name="textarea" label="regular" />
            <TextArea name="disabled" label="disabled" disabled />
            <TextArea name="disabledWithValue" label="disabled" disabled />
            <SearchBox name="mySearch" placeholder="Search..." />
            <Toggle name="myBoolean" label="Toggle me!" />
            <Toggle name="myBoolean2" label="And me!" />
            <Toggle
              name="myDisabledBoolean"
              label="I'm disabled and on 👋🏼"
              disabled
            />
            <Toggle
              name="myDisabledBoolean2"
              label="Disabled and off 🥺"
              disabled
            />
            <Checkbox name="checkbox" label="Check me off" type="checkbox" />
            <Checkbox name="checkbox2" label="Check me off" />
            <Checkbox name="checkbox3" label="Check me off" disabled />
            <Checkbox name="checkbox4" label="Check me off" disabled />
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
          <p>
            Press <code>Esc</code>, click the X, or click outside the modal to
            close me.
          </p>
        </div>
      </EmptyModal>
      <div className="flex flex-col space-y-4">
        <h2>Tags</h2>
        <CouponTag text="Coupon" />
        <SpecialServicesTag text="alteration - hem" />
        <DefaultTag />
        <div className="flex space-x-2">
          <TaxExemptTag />
          <WashFoldTag />
          <DryCleanTag />
        </div>
        <GroupNameTag text="group name" />
        <NewLeadTag />
      </div>
    </div>
  );
};
