interface IGridRow {
  children: JSX.Element;
  className: string;
}

const GridRow = ({ children, className, ...props }: IGridRow) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

export default GridRow;
