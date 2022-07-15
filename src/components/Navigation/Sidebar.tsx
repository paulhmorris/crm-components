import dayjs from "dayjs";

export const Sidebar = () => {
  return (
    <nav className="fixed inset-y-0 right-0 mt-[90px] flex w-[212px] flex-col items-start justify-start overflow-y-scroll border-l border-gray-200 bg-white pt-10 pl-8 pr-2">
      <h2>Tide Cleaners Dallas</h2>
      <div className="mt-4">
        <p className="text-secondary">Tide Cleaners</p>
        <p className="text-secondary">{dayjs().format("h:mm A")} Local</p>
      </div>

      <div className="mt-6">
        <h4>Vehicles</h4>
        <ul className="mt-2 space-y-1">
          <li>
            <a href="#">Vehicle 1</a>
          </li>
          <li>
            <a href="#">Vehicle 2</a>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <h4>Processors</h4>
        <ul className="mt-2 space-y-1">
          <li>
            <a href="#">Processor 1</a>
          </li>
          <li>
            <a href="#">Processor 2</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
