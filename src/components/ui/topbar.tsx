import LOGO from "../../../public/DALLE2023-09-2812.12.09.png";
import Image from "next/image";
import Link from "next/link";

export const ToolBar = () => {
  return (
    <nav className="border-gray-200 bg-white align-middle dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 align-middle">
        <a href="#" className="flex items-center">
          <Image
            src={LOGO}
            className="mr-3 h-8"
            alt="Sponsor M3"
            height={200}
            width={40}
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            SponsorM3
          </span>
        </a>

        <div
          className="vertical-align w-full align-middle md:block md:w-auto"
          id="navbar-dropdown"
        >
          <ul className="vertical-align mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 align-middle align-middle align-middle align-middle font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <Link
                href="/"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/add-content"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Add Content
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Balance
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Sign in Youtube
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
