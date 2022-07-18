import { AutopayIcon } from "icons";
import { formatCurrency, formatPhone, getAutopayStatus } from "utils/helpers";

const mockData = {
  phone: "5555555555",
  detergent: "free and gentle",
  balance: -150.0,
  email: "guest@gmail.com",
  starch: "medium starch",
  creditBalance: 10.0,
  planTitle: "Perpetual 20lbs",
  serviceLocation: "Dale Henderson Hall",
  autoPayIsOn: true,
};

export const AccountOverview = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-x-20 gap-y-4 p-6">
      <div>
        <p className="font-bold">Phone</p>
        <p className="text-secondary">{formatPhone(mockData.phone)}</p>
      </div>
      <div>
        <p className="font-bold">Detergent</p>
        <p className="capitalize text-secondary">{mockData.detergent}</p>
      </div>
      <div>
        <p className="font-bold">Balance</p>
        <p
          className={`
            ${mockData.balance < 0 ? "text-error" : "text-secondary"}`}
        >
          {formatCurrency(mockData.balance, 2)}
        </p>
      </div>
      <div>
        <p className="font-bold">Email</p>
        <a href="#" className="lowercase">
          {mockData.email}
        </a>
      </div>
      <div>
        <p className="font-bold">Starch</p>
        <p className="capitalize text-secondary">{mockData.starch}</p>
      </div>
      <div>
        <p className="font-bold">Cleaning Credits</p>
        <a href="#">{formatCurrency(mockData.creditBalance, 2)}</a>
      </div>
      <div>
        <p className="font-bold">Plan</p>
        <p className="text-secondary">{mockData.planTitle}</p>
      </div>
      <div>
        <p className="font-bold">Service Location</p>
        <a href="#">{mockData.serviceLocation}</a>
      </div>
      <div>
        <p className="flex items-center font-bold">
          <AutopayIcon className="inline-block h-4 w-4" /> Autopay
        </p>
        <p className="text-secondary">
          {getAutopayStatus(mockData.autoPayIsOn)}
        </p>
      </div>
    </section>
  );
};
