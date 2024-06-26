import { ComponentPropsWithoutRef } from "react";
import { classNames } from "utils/helpers";

interface LaundryLoaderProps extends ComponentPropsWithoutRef<"div"> {
  bubbles?: boolean;
  color?: string;
}

export const LaundryLoader = ({
  bubbles = false,
  color = "text-blue-primary",
  ...props
}: LaundryLoaderProps) => {
  return (
    <svg
      className={classNames(
        "h-4 w-4 animate-spin-pulse",
        color,
        props.className
      )}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1424 33.365C6.0066 33.8927 2.31309 23.9114 1.65353 18.1952C3.6322 16.2166 5.61087 15.557 8.2491 15.557C11.5803 15.557 17.4829 18.8548 22.7593 20.1739C26.9805 21.2292 32.6527 19.0747 33.9718 17.5357C33.7519 22.5923 30.2782 32.8374 18.1424 33.365Z"
        fill="#17DBE4"
      />
      <path
        d="M17.4951 35C20.9569 35.001 24.3412 33.9752 27.2199 32.0524C30.0986 30.1296 32.3424 27.3963 33.6674 24.198C34.9924 20.9999 35.3391 17.4806 34.6636 14.0853C33.9881 10.69 32.3209 7.57142 29.8726 5.1239C27.4244 2.67638 24.3053 1.00996 20.9099 0.335428C17.5144 -0.339102 13.9952 0.00857053 10.7974 1.33446C7.59955 2.66036 4.86681 4.9049 2.94485 7.78416C1.0229 10.6634 -0.00193898 14.0481 2.75411e-06 17.5098C0.00779396 22.147 1.85368 26.5919 5.1331 29.8703C8.41251 33.1489 12.8579 34.9935 17.4951 35ZM17.4951 32.5456C13.6666 32.5405 9.98375 31.0776 7.19529 28.4542C4.40686 25.8308 2.72222 22.244 2.48387 18.4229C7.77068 15.0554 11.7518 16.8962 16.3366 18.9825C19.0807 20.2391 22.0701 21.6087 25.413 21.6087C27.2397 21.6018 29.0422 21.1894 30.69 20.4011C31.1809 20.2097 31.7847 19.9102 32.3737 19.655C31.8531 23.2314 30.0637 26.5013 27.3322 28.8678C24.6007 31.2343 21.1091 32.5397 17.4951 32.5456ZM17.4951 2.45933C21.3806 2.46249 25.1143 3.96768 27.9156 6.66012C30.7169 9.35256 32.3689 13.0238 32.5259 16.906L31.4067 17.3969C30.8029 17.6669 30.1598 17.9614 29.7033 18.1529L29.4726 18.2461C25.0106 20.2097 21.2994 18.526 17.3724 16.7293C13.1115 14.8198 8.37448 12.6452 2.58205 15.5463C3.06123 11.9287 4.83716 8.60807 7.57995 6.20113C10.3227 3.79419 13.8459 2.46459 17.4951 2.45933Z"
        fill="#0D4B9F"
      />
      {bubbles && (
        <>
          <circle
            cx="24.9302"
            cy="13.13"
            r="2"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="20.9999"
            r="2"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="18.4302"
            cy="8.63001"
            r="2.5"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
          />
        </>
      )}
    </svg>
  );
};
