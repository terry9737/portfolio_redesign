const Container = ({ children }) => {
  return (
    <div className="bg-white sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
