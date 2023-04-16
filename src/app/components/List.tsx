const List = ({ children, className }: any) => {
  return (
    <div className={`flex flex-col justify-start ${className}`}>{children}</div>
  );
};
export default List;
