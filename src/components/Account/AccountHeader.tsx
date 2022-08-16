import { Banner } from "components/Banner";
import { GroupNameTag, NewGuestTag } from "components/Tags";
import dayjs from "dayjs";

export interface AccountHeaderProps {
  fullName: string;
  createDate: string;
  groupName: string;
  groupId: number;
  isLead: boolean;
  acceptTerms: boolean;
}

export const AccountHeader = ({
  fullName,
  createDate,
  groupName,
  isLead,
  acceptTerms,
}: AccountHeaderProps) => {
  return (
    <header className="w-full">
      {!acceptTerms && (
        <Banner
          variant="info"
          message={`${fullName} has not accepted our terms and conditions`}
          className="mb-11"
        />
      )}
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mr-auto flex items-center">
            <h1>{fullName}</h1>
            {isLead && (
              <span className="ml-4">
                <NewGuestTag />
              </span>
            )}
          </div>
          <div className="ml-auto">
            <a href="#" className="font-normal">
              <GroupNameTag text={groupName} />
            </a>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-xs text-gray-secondary">
            Guest since {dayjs(createDate).format("MMMM D, YYYY")}
          </p>
        </div>
      </div>
    </header>
  );
};
