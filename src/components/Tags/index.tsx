import { classNames } from "utils/helpers";

type TagPropsWithText = { text: string };

export const CouponTag = ({
  text,
  isInactive = false,
}: TagPropsWithText & { isInactive?: boolean }) => {
  return (
    <span
      className={classNames(
        isInactive
          ? "bg-gray-200 text-gray-secondary"
          : "bg-tag-yellow text-orange",
        "max-w-min flex-grow-0 whitespace-nowrap rounded border px-2 py-1 font-bold uppercase shadow-sm"
      )}
    >
      {text}
    </span>
  );
};

export const SpecialServicesTag = ({ text }: TagPropsWithText) => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded bg-tag-purple px-2 py-1 font-bold capitalize text-white shadow">
      {text}
    </span>
  );
};

export const GroupNameTag = ({ text }: TagPropsWithText) => {
  return (
    <span className="inline-flex max-w-min flex-grow-0 items-center whitespace-nowrap rounded-pill bg-blue-primary px-2 pt-[3px] pb-[1px] text-sm font-normal capitalize text-white shadow">
      {text}
    </span>
  );
};

export const DefaultTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded-tiny bg-tag-green px-1 py-0.5 text-xs font-bold leading-5 text-white shadow">
      DEFAULT
    </span>
  );
};

export const TaxExemptTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded-tiny bg-blue-primary px-[3px] py-[1px] text-tiny font-bold leading-[11px] text-white shadow">
      TE
    </span>
  );
};

export const WashFoldTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded-tiny bg-orange px-[3px] py-[1px] text-tiny font-bold leading-[11px] text-white shadow">
      WF
    </span>
  );
};

export const LostTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded bg-error px-2 pt-[2px] pb-[1px] text-[11px] leading-4 text-white shadow">
      LOST
    </span>
  );
};

export const DryCleanTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded-tiny bg-black px-[3px] py-[1px] text-tiny font-bold leading-[11px] text-white shadow">
      DC
    </span>
  );
};

export const NewGuestTag = () => {
  return (
    <span className="inline-flex h-7 max-w-min flex-grow-0 items-center whitespace-nowrap rounded border border-tag-green bg-transparent px-2 text-sm font-bold text-tag-green shadow-sm">
      I&apos;m New!
    </span>
  );
};

export const LeadTag = () => {
  return (
    <span className="inline-flex h-7 max-w-min flex-grow-0 items-center whitespace-nowrap rounded border border-tag-green bg-transparent px-2 text-sm font-bold text-tag-green shadow-sm">
      Lead
    </span>
  );
};

export const GroupDot = () => {
  return (
    <span className="inline-block h-2 w-2 rounded-full bg-blue-primary shadow"></span>
  );
};

export const SpecialServiceDot = () => {
  return (
    <span className="inline-block h-2 w-2 rounded-full bg-tag-purple shadow"></span>
  );
};

export const CouponDot = () => {
  return (
    <span className="inline-block h-2 w-2 rounded-full border-[0.5px] border-error bg-tag-yellow shadow"></span>
  );
};

export const DriverTaskDot = ({ status }: { status: 0 | 1 | 2 }) => {
  return (
    <span
      className={classNames(
        "inline-block h-2 w-2 rounded-full border-[0.5px] shadow",
        status === 0
          ? "border-gray-secondary bg-gray-300"
          : status === 1
          ? "border-success bg-success"
          : "border-error bg-error"
      )}
    ></span>
  );
};

export const GenericDot = ({ color }: { color: string }) => {
  return (
    <span
      className="inline-block h-2 w-2 rounded-full border-[0.5px] shadow"
      style={{ backgroundColor: color, borderColor: color }}
    />
  );
};
