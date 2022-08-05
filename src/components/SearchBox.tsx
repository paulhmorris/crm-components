import { SearchIcon } from "@heroicons/react/outline";
import { ComponentPropsWithRef, useState } from "react";
import { useField, UseFieldConfig } from "react-final-form";
import { classNames } from "utils/helpers";

interface SearchBoxProps extends ComponentPropsWithRef<"input"> {
  name: string;
  fieldProps?: UseFieldConfig<string>;
}

export const SearchBox = ({ name, fieldProps, ...props }: SearchBoxProps) => {
  const { input } = useField(name, { ...fieldProps });
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div className="relative inline-flex w-full items-center justify-between">
      <div className="absolute inset-y-0 left-0 grid place-items-center pl-3">
        <SearchIcon
          className={classNames(
            hasFocus || input.value ? "text-blue-200" : "text-gray-300",
            "h-5 w-5 transition-colors"
          )}
        />
      </div>
      <input
        {...input}
        {...props}
        type="search"
        className="w-full rounded border-0 bg-white py-3.5 pl-10 ring-1 ring-gray-300 transition placeholder:text-gray-300 focus:ring-gray-400"
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
    </div>
  );
};
