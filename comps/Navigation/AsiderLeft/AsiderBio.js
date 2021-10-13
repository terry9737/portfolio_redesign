const AsiderBio = () => {
  return (
    <section>
      <div className="flex flex-col space-y-5 border-b-2 border-gray-400 border-opacity-40 pb-7">
        <span className="flex justify-between">
          <p className="px-2 py-1 sm:px-3 sm:py-1 bg-header-yellow text-header-black font-light mt-7">
            Age:
          </p>
          <p className="text-sm text-header-black font-normal">24</p>
        </span>
        <span className="flex justify-between">
          <p className="px-3 py-1 bg-header-yellow text-g text-header-black font-light">
            Residence:
          </p>
          <p className="text-sm text-header-black font-normal">Moldova</p>
        </span>
      </div>
    </section>
  );
};

export default AsiderBio;
