import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { MarketTabs } from "components/Jarvis/MarketTabs";
import { JarvisNav } from "components/Navigation/JarvisNav";

export const Market = () => {
  return (
    <>
      <JarvisNav />
      <div className="ml-[200px] mb-12 flex items-center justify-between px-6">
        <div>
          <p className="text-gray-secondary">Tide Cleaners</p>
          <h1 className="mt-1 text-xl">Tide Cleaners Los Angeles</h1>
        </div>
        <DropdownMenu
          variant="button"
          buttonText="Add New"
          className="btn-primary"
        >
          <DropdownMenuItem>Route</DropdownMenuItem>
          <DropdownMenuItem>Service Point</DropdownMenuItem>
          <DropdownMenuItem>Group</DropdownMenuItem>
          <DropdownMenuItem>Employee</DropdownMenuItem>
          <DropdownMenuItem>Coupon</DropdownMenuItem>
          <DropdownMenuItem>Submarket</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenu>
      </div>
      <div className="ml-[200px]">
        <MarketTabs />
      </div>
    </>
  );
};
