import { HomeIcon, TideLogo } from "icons";
import { mockUser } from "mockData";

export const JarvisNav = () => {
  return (
    <nav className="fixed inset-y-0 left-0 mt-[180px] flex w-[200px] flex-col items-start justify-start border-r border-gray-200 bg-blue-jarvis p-10 pr-0">
      <div>
        <TideLogo className="h-14 w-14" aria-hidden="true" />
      </div>
      <ul className="mb-auto mt-8 flex flex-col text-sm text-blue-50">
        <li className="mb-10 flex w-full cursor-pointer items-stretch space-x-2 py-1 transition-colors duration-75 hover:text-white">
          <HomeIcon className="h-4 w-4" />
          <span>Support</span>
        </li>
        <li className="flex w-full cursor-pointer items-center space-x-2 pb-1 transition-colors duration-75 hover:text-white">
          <span>Markets</span>
        </li>
        <li className="flex w-full cursor-pointer items-center space-x-2 py-1 transition-colors duration-75 hover:text-white">
          <span>Coupons</span>
        </li>
        <li className="flex w-full cursor-pointer items-center space-x-2 py-1 transition-colors duration-75 hover:text-white">
          <span>Employees</span>
        </li>
        <li className="flex w-full cursor-pointer items-center space-x-2 py-1 transition-colors duration-75 hover:text-white">
          <span>Vehicles</span>
        </li>
        <li className="flex w-full cursor-pointer items-center space-x-2 py-1 transition-colors duration-75 hover:text-white">
          <span>Processors</span>
        </li>
      </ul>
      <section className="mt-auto text-xs text-white">
        <p className="text-sm font-bold" title="It's you! 🥳">
          {mockUser.name}
        </p>
        <a className="my-4 block text-white hover:text-blue-50" href="#">
          Log Out
        </a>
        <div className="leading-[18px]">
          <p>v1.28.0</p>
          <p>Up to Date</p>
        </div>
      </section>
    </nav>
  );
};
