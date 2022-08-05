import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { DefaultTag, GroupNameTag } from "components/Tags";
import dayjs from "dayjs";
import { mockPlansData } from "mockData";
import toast from "react-hot-toast";
import { sleep } from "utils/helpers";

export const AccountPlans = () => {
  return (
    <>
      {/* Active Plans */}
      <section className="flex w-full flex-col">
        <div className="flex items-end justify-between border-b border-gray-200 px-6 py-3">
          <h4>Active</h4>
          <Button
            onClick={() => console.log("Add plan")}
            variant="tertiary"
            className="-mb-2"
          >
            + Add
          </Button>
        </div>
        <ul>
          {mockPlansData
            .filter((plan) => plan.isActive)
            .map((plan) => (
              <PayPerUsePlanCard key={plan.id} plan={plan} />
            ))}
        </ul>
      </section>

      {/* Canceled Plans */}
      <section>
        <div className="border-b border-gray-200 px-6 pb-3 pt-6">
          <h4>Canceled</h4>
        </div>
        <ul className="opacity-50">
          {mockPlansData
            .filter((plan) => !plan.isActive)
            .map((plan) => (
              <PayPerUsePlanCard key={plan.id} plan={plan} />
            ))}
        </ul>
      </section>
    </>
  );
};

const PayPerUsePlanCard = ({ plan }: { plan: typeof mockPlansData[0] }) => {
  const makeDefault = async () => {
    await toast.promise(
      sleep(1000),
      {
        loading: (
          <span className="text-secondary">Updating default plan...</span>
        ),
        success: <span>Default plan updated</span>,
        error: <span className="text-error">Error updating plan</span>,
      },
      {
        style: {
          minWidth: "200px",
        },
      }
    );
    console.log(`Made plan ${plan.id} default`);
  };

  return (
    <li className="flex border-b border-gray-200 py-4 px-6 even:bg-gray-100">
      <div className="font-bold leading-4 text-secondary">
        <div className="mb-4">
          <p className="text-sm leading-5 text-primary">
            {plan.market}
            {plan.isDefault && (
              <span className="ml-2">
                <DefaultTag />
              </span>
            )}
          </p>
          <p className="text-xs">{plan.name}</p>
        </div>
        <div className="text-xs">
          <p className="text-primary">{plan.interactionType}</p>
          <p>{plan.servicePoint}</p>
          {plan.routes.length > 0 &&
            plan.routes.map((route) => (
              <>
                <p>{`Route ${route.id}, Stop ${route.stop}, Guest ${route.stop}`}</p>
              </>
            ))}
        </div>
        {plan.group && (
          <div className="mt-2">
            <GroupNameTag text={plan.group.name} />
          </div>
        )}
      </div>
      <p className="ml-auto mr-4 pt-2 text-right text-xs text-secondary">
        Created {dayjs(plan.created).format("MMMM D, YYYY")}
      </p>
      {plan.isActive && (
        <div>
          <DropdownMenu variant="kebab">
            <DropdownMenuItem onClick={makeDefault}>
              Make Default
            </DropdownMenuItem>
          </DropdownMenu>
        </div>
      )}
    </li>
  );
};
