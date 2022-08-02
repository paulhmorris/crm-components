type TagPropsWithText = { text: string };

export const CouponTag = ({ text }: TagPropsWithText) => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded bg-tag-yellow px-2 py-1 font-bold text-tide-orange">
      {text}
    </span>
  );
};

export const SpecialServicesTag = ({ text }: TagPropsWithText) => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded bg-tag-purple px-2 py-1 font-bold capitalize text-white">
      {text}
    </span>
  );
};

export const GroupNameTag = ({ text }: TagPropsWithText) => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded-pill bg-blue-200 px-2 py-0.5 text-sm capitalize text-white">
      {text}
    </span>
  );
};

export const DefaultTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded-tiny bg-tag-green px-1 py-0.5 text-xs font-bold leading-5 text-white">
      Default
    </span>
  );
};

export const TaxExemptTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded-tiny bg-blue-200 px-[3px] py-[1px] text-tiny font-bold leading-[11px] text-white">
      TE
    </span>
  );
};

export const WashFoldTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded-tiny bg-tide-orange px-[3px] py-[1px] text-tiny font-bold leading-[11px] text-white">
      WF
    </span>
  );
};

export const LostTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded bg-error px-2 py-[1px] text-[11px] leading-4 text-white">
      LOST
    </span>
  );
};

export const DryCleanTag = () => {
  return (
    <span className="max-w-min flex-grow-0 whitespace-nowrap rounded-tiny bg-black px-[3px] py-[1px] text-tiny font-bold leading-[11px] text-white">
      DC
    </span>
  );
};

export const NewGuestTag = () => {
  return (
    <span className="inline-flex h-7 max-w-min flex-grow-0 items-center whitespace-nowrap rounded border border-tag-green bg-transparent px-2 text-sm font-bold text-tag-green">
      I&apos;m New!
    </span>
  );
};

export const LeadTag = () => {
  return (
    <span className="inline-flex h-7 max-w-min flex-grow-0 items-center whitespace-nowrap rounded border border-tag-green bg-transparent px-2 text-sm font-bold text-tag-green">
      Lead
    </span>
  );
};

export const GroupDot = () => {
  return (
    <span className="inline-block h-2 w-2 rounded-full bg-tide-blue"></span>
  );
};

export const SpecialServiceDot = () => {
  return (
    <span className="inline-block h-2 w-2 rounded-full bg-tag-purple"></span>
  );
};

export const CouponDot = () => {
  return (
    <span className="inline-block h-2 w-2 rounded-full border-[0.5px] border-error bg-tag-yellow"></span>
  );
};

export const GenericDot = ({ color }: { color: string }) => {
  return (
    <span
      className="inline-block h-2 w-2 rounded-full border-[0.5px]"
      style={{ backgroundColor: color, borderColor: color }}
    />
  );
};
