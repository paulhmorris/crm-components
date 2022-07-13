import { Menu } from "@headlessui/react";
import { MarketCard } from "components/Markets/MarketCard";
import { useState } from "react";
import { Form } from "react-final-form";
import { classNames } from "utils/helpers";
import { mustBeAlphanumeric } from "utils/inputValidations";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { DropdownMenu } from "../components/DropdownMenu";
import { Checkbox } from "../components/Forms/Checkbox";
import { Select } from "../components/Forms/Select";
import { SelectOption } from "../components/Forms/SelectOption";
import { TextArea } from "../components/Forms/TextArea";
import { TextInput } from "../components/Forms/TextInput";
import { Toggle } from "../components/Forms/Toggle";
import { EmptyModal } from "../components/Modals/EmptyModal";
import { SearchBox } from "../components/SearchBox";
import {
  CouponTag,
  DefaultTag,
  DryCleanTag,
  GroupNameTag,
  NewLeadTag,
  SpecialServicesTag,
  TaxExemptTag,
  WashFoldTag,
} from "../components/Tags";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

export default function ComponentDisplay() {
  const [emptyModalOpen, setEmptyModalOpen] = useState(false);

  return (
    <div className="max-w-3xl space-y-8 p-24">
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
      <div className="flex flex-wrap gap-2">
        <MarketCard businessType="Tide Dry Cleaners" title="Tufts University" />
        <MarketCard businessType="Tide Cleaners" title="The Dude University" />
        <MarketCard
          businessType="Procter & Gamble"
          title="University of Laundry"
        />
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
      <DropdownMenu
        variant="button"
        buttonText="Add New"
        className="btn-primary"
        direction="right"
        menuWidth="w-36"
      >
        <Menu.Item>
          {({ active }) => (
            <button
              className={classNames(
                active && "bg-gray-200",
                "group flex w-full items-center py-1.5 pl-4"
              )}
            >
              Route
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={classNames(
                active && "bg-gray-200",
                "group flex w-full items-center py-1.5 pl-4"
              )}
            >
              Route Stop
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={classNames(
                active && "bg-gray-200",
                "group flex w-full items-center py-1.5 pl-4"
              )}
            >
              Submarket
            </button>
          )}
        </Menu.Item>
      </DropdownMenu>
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
        render={({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
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
                <Button variant="secondary" onClick={() => console.log(values)}>
                  Log Form values
                </Button>
              </div>
            </div>
          </form>
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
        <Banner
          variant="info"
          message="🤨 This person has not accepted our terms yet. Hmm..."
        />
        <Banner
          variant="success"
          message="🎉 Woohoo! Something good happend."
        />
        <Banner
          variant="warning"
          message="👀️ Watch out, something is happening."
        />
        <Banner variant="error" message="✋ Bummer—something bad happened." />
      </div>
    </div>
  );
}
