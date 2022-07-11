
interface ICardText {
    title: string;
    subTitle: string;
  }

export const CardText = ({
    title,
    subTitle,
    ...props
  }: ICardText) => {
    return (
      <div {...props}>
        <p className="text-left text-sm">{title}</p>
        <p className="text-left text-lg pt-1.5 text-blue-200 font-bold">{subTitle}</p>
      </div>
    );
  };
