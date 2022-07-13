import { ComponentPropsWithoutRef } from "react";

interface ICardText extends ComponentPropsWithoutRef<"div"> {
  title: string;
  subTitle: string;
}

export const CardText = ({ title, subTitle, ...props }: ICardText) => {
  return (
    <div {...props}>
      <p className="text-left text-sm">{title}</p>
      <p className="pt-1.5 text-left text-lg font-bold text-blue-200">
        {subTitle}
      </p>
    </div>
  );
};
