const Container = ({ children }) => {
  return (
    <div className=" bg-header-default dark:bg-dark-main sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-4xl mx-auto relative">
      {children}
    </div>
  );
};

export default Container;
