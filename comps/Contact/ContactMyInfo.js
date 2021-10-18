import { BiMapAlt, BiMessageSquareDetail, BiMobile } from "react-icons/bi";
const ContactMyInfo = () => {
  return (
    <div className="w-full flex flex-col font-normal text-base sm:text-sm px-5 sm:px-0">
      <h1 className="font-bold text-3xl text-gray-700 my-12 text-center md:text-left">
        Contact Information
      </h1>
      <section className="bg-white dark:bg-dark-main w-full p-5 mb-5">
        <span className="flex justify-center text-xl mb-5">
          <i className="w-10 h-10 rounded-full bg-header-yellow flex items-center justify-center">
            <BiMapAlt />
          </i>
        </span>

        <div className="flex justify-between text-navbar-default mb-5">
          <p className="dark:text-gray-400">Country:</p>
          <p className="dark:text-gray-400">Moldova</p>
        </div>
        <div className="flex justify-between text-navbar-default mb-5">
          <p className="dark:text-gray-400">City:</p>
          <p className="dark:text-gray-400">Chisinau</p>
        </div>
      </section>

      <section className="bg-white dark:bg-dark-main w-full p-5 mb-5">
        <span className="flex justify-center text-xl mb-5">
          <i className="w-10 h-10 rounded-full bg-header-yellow flex items-center justify-center">
            <BiMessageSquareDetail />
          </i>
        </span>

        <div className="flex justify-between font-normal text-sm text-navbar-default mb-5">
          <p className="dark:text-gray-400">Email:</p>
          <a
            href="mailto:adriangorgos@gmail.com"
            className="hover:text-gray-400"
          >
            adriangorgos@gmail.com
          </a>
        </div>
      </section>

      <section className="bg-white dark:bg-dark-main w-full p-5">
        <span className="flex justify-center text-xl mb-5">
          <i className="w-10 h-10 rounded-full bg-header-yellow flex items-center justify-center">
            <BiMobile />
          </i>
        </span>

        <div className="flex justify-between font-normal text-sm text-navbar-default mb-5">
          <p className="dark:text-gray-400">Personal:</p>
          <p className="dark:text-gray-400">068864690</p>
        </div>
      </section>
    </div>
  );
};

export default ContactMyInfo;
