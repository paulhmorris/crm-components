
interface IButtonText  {
    title: string;
    subTitle: string;
  }

export const ButtonText = ({
    title,
    subTitle,
    ...props
  }: IButtonText) => {
    return (
      <div {...props}>
        <p className="text-left text-sm">{title}</p>
        <p className="text-left text-lg pt-1.5 text-blue-200 font-bold">{subTitle}</p>
      </div>
    );
  };
