import { AddCircleIcon, HomeIcon, SearchIcon, TideLogo } from "icons";
import { formatCurrency } from "utils/helpers";

const mockUser = {
  name: "Bill Esquire",
  availableRefundAmount: 50.0,
  availableCreditAmount: 50.0,
};

export const PepperNav = () => {
  return (
    <nav className="fixed inset-y-0 left-0 mt-[90px] flex w-[212px] flex-col items-start justify-start border-r border-gray-200 bg-white p-10 pr-0">
      <div>
        <TideLogo className="h-14 w-14" aria-hidden="true" />
      </div>
      <ul className="mb-auto mt-8 flex flex-col text-base text-secondary">
        <li className="pepper-nav-item">
          <HomeIcon className="h-4 w-4" />
          <span>Support</span>
        </li>
        <li className="pepper-nav-item">
          <SearchIcon className="h-4 w-4" />
          <span>Search</span>
        </li>
        <li className="pepper-nav-item">
          <AddCircleIcon className="h-4 w-4" />
          <span>Driver Task</span>
        </li>
        <li className="pepper-nav-item">
          <AddCircleIcon className="h-4 w-4" />
          <span>Guest Account</span>
        </li>
        <li className="mt-10 w-full cursor-pointer py-2 transition-colors hover:text-blue-200">
          Jarvis
        </li>
      </ul>
      <section className="mt-auto text-xs text-secondary">
        <p className="text-sm font-bold" title="It's you! 🥳">
          {mockUser.name}
        </p>
        <div className="mt-2 leading-[18px]">
          <p>{formatCurrency(mockUser.availableRefundAmount, 2)} Refunds</p>
          <p>
            {formatCurrency(mockUser.availableCreditAmount, 2)} Cleaning Credits
          </p>
        </div>
        <a className="my-4 block" href="#">
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
