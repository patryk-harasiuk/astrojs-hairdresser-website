import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export const Menu = ({ isOpen, children }: Props) => (
  <div
    aria-hidden={!isOpen}
    className={clsx(
      "flex left-0 top-0 fixed transition-transform duration-150 h-[100dvh] w-full max-w-[280px] flex-col gap-y-4 bg-white px-8 py-6 pl-10",
      {
        "translate-x-0": isOpen,
        "translate-x-full invisible": !isOpen,
      }
    )}
  >
    {children}
  </div>
);
