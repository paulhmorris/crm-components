import { SearchIcon } from "@heroicons/react/outline";
import { ComponentPropsWithoutRef, useState } from "react";
import { classNames } from "utils/helpers";

// export const SearchBox = (props: UseControllerProps) => {
export const SearchBox = (props: ComponentPropsWithoutRef<"input">) => {
  // const { field } = useController(props);
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div className="relative inline-flex w-full items-center justify-between">
      <div className="absolute inset-y-0 left-0 grid place-items-center pl-3">
        <SearchIcon
          // className={classNames(
          //   hasFocus || field.value ? "text-blue-200" : "text-gray-300",
          //   "h-5 w-5 transition-colors"
          // )}
          className={classNames(
            hasFocus ? "text-blue-200" : "text-gray-300",
            "h-5 w-5 transition-colors"
          )}
        />
      </div>
      <input
        // {...field}
        {...props}
        type="search"
        className={classNames(
          "w-full rounded border-0 bg-white py-3.5 pl-10 text-sm leading-4 ring-1 ring-gray-300 transition placeholder:text-gray-300 hover:ring-gray-400 focus:ring-gray-400",
          props.className
        )}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
    </div>
  );
};
