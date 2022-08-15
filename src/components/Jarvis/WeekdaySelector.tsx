import { WEEKDAYS } from "mockData";
import { WeekdaySelectorProps } from "types";
import { classNames } from "../../utils/helpers";

export const WeekdaySelector = ({
  activeWeekdays,
  dispatch,
  ...props
}: WeekdaySelectorProps) => {
  return (
    <>
      <div className="flex items-center gap-4">
        {WEEKDAYS.map(({ dayValue, initial }) => {
          const isSelected = activeWeekdays.includes(dayValue);
          return (
            <button
              {...props}
              key={dayValue}
              onClick={() =>
                dispatch({
                  type: isSelected ? "remove" : "add",
                  payload: dayValue,
                })
              }
              className={classNames(
                isSelected
                  ? "bg-tide-blue text-white"
                  : "bg-blue-50/50 text-tide-blue hover:bg-blue-50",
                "disabled: grid h-10 w-10 place-items-center rounded-full text-base font-bold transition-colors duration-50 disabled:bg-gray-300 disabled:text-secondary"
              )}
            >
              {initial}
            </button>
          );
        })}
      </div>
    </>
  );
};
