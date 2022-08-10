import { ComponentsForm } from "components/ComponentsForm";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { SignInForm } from "components/Forms/SignInForm";
import { MarketCard } from "components/Markets/MarketCard";
import { OrderPill } from "components/Orders/OrderPill";
import { useState } from "react";
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
      <div className="max-w-sm border-y border-gray-400 pb-12 pt-6">
        <h2>React hook Form testing</h2>
        <ComponentsForm />
      </div>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} title="tester">
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
      <div className="max-w-sm rounded-lg border border-gray-200 p-8">
        <SignInForm />
      </div>
    </div>
  );
}
