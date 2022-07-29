import { DropdownMenuItem } from "components/DropdownMenuItem";
import { Form } from "components/Forms/Form";
import { FormConnector } from "components/Forms/FormConnector";
import { TextArea } from "components/Forms/TextArea";
import { TextInput } from "components/Forms/TextInput";
import { MarketCard } from "components/Markets/MarketCard";
import { OrderPill } from "components/Orders/OrderPill";
import { useState } from "react";
import { sleep } from "utils/helpers";
import { required } from "utils/inputValidations";
// import { SelectOptionProps } from "types";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { DropdownMenu } from "../components/DropdownMenu";
import { Modal } from "../components/Modals/Modal";
import {
  CouponDot,
  CouponTag,
  DefaultTag,
  DryCleanTag,
  GroupDot,
  GroupNameTag,
  LostTag,
  NewGuestTag,
  SpecialServiceDot,
  SpecialServicesTag,
  TaxExemptTag,
  WashFoldTag,
} from "../components/Tags";

// const people: SelectOptionProps[] = [
//   { value: 1, label: "Wade Cooper" },
//   { value: 2, label: "Arlene Mccoy" },
//   { value: 3, label: "Devon Webb" },
//   { value: 4, label: "Tom Cook" },
//   { value: 5, label: "Tanya Fox" },
//   { value: 6, label: "Hellen Schmidt" },
// ];

export default function ComponentDisplay() {
  const [modalOpen, setModalOpen] = useState(false);

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
      >
        <DropdownMenuItem>Route</DropdownMenuItem>
        <DropdownMenuItem>Route Stop</DropdownMenuItem>
        <DropdownMenuItem>Submarket</DropdownMenuItem>
      </DropdownMenu>
      <div className="border-y border-gray-400 pb-12 pt-6">
        <h2>React hook Form testing</h2>
        <Form
          onSubmit={async (data) => {
            await sleep(3000);
            console.dir(data);
          }}
          defaultValues={{ myInput: "" }}
        >
          <div className="mt-4 space-y-4">
            <TextInput
              name="myInput"
              label="First name"
              description="Hide me when there's an error"
              controllerProps={{
                rules: {
                  validate: required,
                },
              }}
              required
              disabled
            />
            <TextInput
              name="myInput2"
              label="Last name"
              description="Required, but no error until touched"
              controllerProps={{
                rules: {
                  validate: required,
                },
              }}
              required
            />
            <TextArea
              name="myTextArea"
              label="A long message"
              description="Check it out!"
              controllerProps={{
                rules: {
                  validate: required,
                },
              }}
              disabled
            />
          </div>
          <FormConnector>
            {({ formState: { isSubmitting } }) => (
              <Button
                variant="primary"
                type="submit"
                className="mt-4"
                disabled={isSubmitting}
              >
                Log Values
              </Button>
            )}
          </FormConnector>
        </Form>
      </div>
      {/* <Form
        onSubmit={() => console.log("hello")}
        initialValues={{
          bestTeam: "scarlet",
          firstName: "Hello",
          lastNameDisabled: "Can't touch this",
          errors: "Darknes$",
          myListbox: 3,
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
              <div className="max-w-xs space-y-4">
                <Select
                  label="Select"
                  name="mySelect"
                  options={people}
                  description="I'm a custom select component!"
                />
                <Typeahead
                  label="Typeahead"
                  name="myTypeAhead"
                  options={people}
                  description="try me out!"
                />
                <TextInput
                  label="Basic field"
                  name="firstName"
                  type="text"
                  fieldProps={{
                    validate: validateMultiple(mustBeAlphanumeric, required),
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
              </div>
              <TextArea name="textarea" label="regular" />
              <TextArea name="disabled" label="disabled" disabled />
              <TextArea name="disabledWithValue" label="disabled" disabled />
              <SearchBox name="mySearch" placeholder="Search..." />
              <div className="space-y-4">
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
              </div>
              <fieldset>
                <legend>Best dev team</legend>
                <div className="mt-1 space-y-1">
                  <Radio name="bestTeam" label="Scarlet" value="scarlet" />
                  <Radio name="bestTeam" label="Atlas" value="atlas" />
                  <Radio name="bestTeam" label="Steam" value="steam" />
                </div>
              </fieldset>
              <div className="space-y-2">
                <Checkbox
                  name="checkbox"
                  label="Check me off"
                  type="checkbox"
                />
                <Checkbox name="checkbox2" label="Check me off" />
                <Checkbox name="checkbox3" label="Check me off" disabled />
                <Checkbox name="checkbox4" label="Check me off" disabled />
              </div>
              <div>
                <Button variant="secondary" onClick={() => console.log(values)}>
                  Log Form values
                </Button>
              </div>
            </div>
          </form>
        )}
      /> */}
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <div className="grid h-48 w-full place-items-center">
          <p>Hello, I am your children.</p>
          <p>
            Press <code>Esc</code>, click the X, or click outside the modal to
            close me.
          </p>
        </div>
      </Modal>
      <div className="flex flex-col space-y-4">
        <h2>Tags</h2>
        <CouponTag text="Coupon" />
        <SpecialServicesTag text="alteration - hem" />
        <DefaultTag />
        <div className="flex items-center space-x-2">
          <TaxExemptTag />
          <WashFoldTag />
          <DryCleanTag />
          <LostTag />
        </div>
        <div className="flex space-x-2">
          <GroupDot />
          <SpecialServiceDot />
          <CouponDot />
        </div>
        <div className="grid max-w-[220px] grid-cols-2 gap-4">
          <OrderPill status="request" pillType="dryClean" />
          <OrderPill status="request" pillType="washFold" />
          <OrderPill status="active" pillType="dryClean" text="O-54693" />
          <OrderPill status="active" pillType="washFold" text="O-54693" />
          <OrderPill status="finished" pillType="dryClean" text="O-21213" />
          <OrderPill status="canceled" pillType="washFold" />
          <OrderPill status="canceled" pillType="dryClean" />
          <OrderPill pillType="ticket" text="DT67683" />
        </div>
        <GroupNameTag text="group name" />
        <NewGuestTag />
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
