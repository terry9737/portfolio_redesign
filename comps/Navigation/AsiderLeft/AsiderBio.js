const AsiderBio = () => {
  return (
    <section>
      <div className="flex flex-col space-y-5 border-b-2 border-gray-400 dark:border-gray-300 border-opacity-40 pb-7">
        <span className="flex justify-between items-center mt-7">
          <p className="px-2 py-1 sm:px-3 sm:py-1 bg-header-yellow text-header-black font-light dark:text-gray-100">
            Age:
          </p>
          <p className="text-sm text-header-black font-normal dark:text-gray-100">
            24
          </p>
        </span>
        <span className="flex justify-between">
          <p className="px-3 py-1 bg-header-yellow text-g text-header-black font-light dark:text-gray-100">
            Residence:
          </p>
          <p className="text-sm text-header-black font-normal dark:text-gray-100">
            Moldova
          </p>
        </span>
      </div>
    </section>
  );
};

export default AsiderBio;
