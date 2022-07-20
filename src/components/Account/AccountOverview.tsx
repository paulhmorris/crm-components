import { AutopayIcon } from "icons";
import { mockAccountData } from "mockData";
import { formatCurrency, formatPhone, getAutopayStatus } from "utils/helpers";

export const AccountOverview = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-x-20 gap-y-4 p-6">
      <div>
        <p className="font-bold">Phone</p>
        <p className="text-secondary">{formatPhone(mockAccountData.phone)}</p>
      </div>
      <div>
        <p className="font-bold">Detergent</p>
        <p className="capitalize text-secondary">{mockAccountData.detergent}</p>
      </div>
      <div>
        <p className="font-bold">Balance</p>
        <p
          className={`
            ${mockAccountData.balance < 0 ? "text-error" : "text-secondary"}`}
        >
          {formatCurrency(mockAccountData.balance, 2)}
        </p>
      </div>
      <div>
        <p className="font-bold">Email</p>
        <a href="#" className="lowercase">
          {mockAccountData.email}
        </a>
      </div>
      <div>
        <p className="font-bold">Starch</p>
        <p className="capitalize text-secondary">{mockAccountData.starch}</p>
      </div>
      <div>
        <p className="font-bold">Cleaning Credits</p>
        <a href="#">{formatCurrency(mockAccountData.creditBalance, 2)}</a>
      </div>
      <div>
        <p className="font-bold">Plan</p>
        <p className="text-secondary">{mockAccountData.planTitle}</p>
      </div>
      <div>
        <p className="font-bold">Service Location</p>
        <a href="#">{mockAccountData.serviceLocation}</a>
      </div>
      <div>
        <p className="flex items-center font-bold">
          <AutopayIcon className="inline-block h-4 w-4" /> Autopay
        </p>
        <p className="text-secondary">
          {getAutopayStatus(mockAccountData.autoPayIsOn)}
        </p>
      </div>
    </section>
  );
};
