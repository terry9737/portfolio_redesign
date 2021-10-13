const InnerContainer = ({ children }) => {
  return (
    <div className="max-w-9xl mx-auto bg-header-default">
      <div className="flex relative justify-between h-screen">{children}</div>
    </div>
  );
};

export default InnerContainer;
