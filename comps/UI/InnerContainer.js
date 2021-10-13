const InnerContainer = ({ children }) => {
  return (
    <div className="max-w-9xl mx-auto bg-header-default overflow-hidden">
      <div className="flex relative justify-between">{children}</div>
    </div>
  );
};

export default InnerContainer;
