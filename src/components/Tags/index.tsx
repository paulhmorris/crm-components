type TagProps = { text: string };

export const CouponTag = ({ text }: TagProps) => {
  return (
    <div className="inline-flex max-w-min items-center whitespace-nowrap rounded bg-tag-yellow px-2 py-1 align-middle font-bold text-tide-orange">
      <span>{text}</span>
    </div>
  );
};

export const SpecialServicesTag = ({ text }: TagProps) => {
  return (
    <div className="inline-flex max-w-min items-center whitespace-nowrap rounded bg-tag-purple px-2 py-1 align-middle font-bold text-white">
      <span className="capitalize">{text}</span>
    </div>
  );
};

export const GroupNameTag = ({ text }: TagProps) => {
  return (
    <div className="inline-flex max-w-min items-center whitespace-nowrap rounded-pill bg-blue-200 px-2 py-0.5 align-middle text-sm text-white">
      <span className="capitalize">{text}</span>
    </div>
  );
};

export const DefaultTag = () => {
  return (
    <div className="inline-flex max-w-min items-center whitespace-nowrap bg-tag-green px-1 align-middle text-xs font-bold leading-[18px] text-white">
      <span>DEFAULT</span>
    </div>
  );
};

export const TaxExemptTag = () => {
  return (
    <div className="inline-flex max-w-min items-center whitespace-nowrap rounded-sm bg-blue-200 px-[3px] py-[1px] align-middle text-tiny font-bold leading-[11px] text-white">
      <span>TE</span>
    </div>
  );
};

export const WashFoldTag = () => {
  return (
    <div className="inline-flex max-w-min items-center whitespace-nowrap rounded-sm bg-tide-orange px-[3px] py-[1px] align-middle text-tiny font-bold leading-[11px] text-white">
      <span>WF</span>
    </div>
  );
};

export const DryCleanTag = () => {
  return (
    <div className="inline-flex max-w-min items-center whitespace-nowrap rounded-sm bg-black px-[3px] py-[1px] align-middle text-tiny font-bold leading-[11px] text-white">
      <span>DC</span>
    </div>
  );
};

export const NewLeadTag = () => {
  return (
    <div className="inline-flex max-w-min items-center whitespace-nowrap rounded border border-tag-green bg-transparent px-2 py-[3px] align-middle text-sm font-bold text-tag-green">
      <span>I&apos;m New!</span>
    </div>
  );
};