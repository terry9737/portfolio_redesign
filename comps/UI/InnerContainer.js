const InnerContainer = ({ children }) => {
  return (
    <div className="max-w-9xl mx-auto bg-header-default dark:bg-dark-mainBackground h-full relative">
      {children}
    </div>
  );
};

export default InnerContainer;
