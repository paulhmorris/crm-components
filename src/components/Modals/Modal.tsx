import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { GenericModalProps } from "types";

export const Modal = ({
  isOpen,
  setIsOpen,
  title,
  description,
  size = "sm",
  children,
}: GenericModalProps) => {
  function closeModal() {
    setIsOpen(false);
  }

  const sizes = {
    xs: "max-w-sm",
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    full: "max-w-full",
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-75"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-x-0 top-0 bottom-1/3 overflow-y-visible">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`${sizes[size]} w-full min-w-[400px] transform overflow-visible rounded-lg bg-white px-10 py-6 text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title className="mb-6" as="h2">
                  {title}
                </Dialog.Title>
                {description && (
                  <Dialog.Description className="px-2 text-gray-secondary">
                    {description}
                  </Dialog.Description>
                )}
                <div className="absolute top-0 right-0 z-50 hidden pt-5 pr-5 sm:block">
                  <button
                    type="button"
                    className="rounded bg-transparent text-gray-300 transition-colors hover:text-blue-primary focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
