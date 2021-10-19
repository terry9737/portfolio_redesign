import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineUser,
  HiBriefcase,
  HiAnnotation,
} from "react-icons/hi";

export const icons = [
  {
    icon: <HiOutlineHome className="text-2xl dark:text-gray-200" />,
    id: 0,
    path: "/",
  },
  {
    icon: <HiOutlineDocumentText className="text-2xl dark:text-gray-200" />,
    id: 1,
    path: "/Education",
  },
  {
    icon: <HiBriefcase className="text-2xl dark:text-gray-200" />,
    id: 3,
    path: "/Work",
  },
  {
    icon: <HiOutlineUser className="text-2xl dark:text-gray-200" />,
    id: 2,
    path: "/Portfolio",
  },
  {
    icon: <HiAnnotation className="text-2xl dark:text-gray-200" />,
    id: 5,
    path: "/Contact",
  },
];
