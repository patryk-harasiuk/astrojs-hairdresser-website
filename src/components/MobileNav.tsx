import { useState } from "react";
import { HamburgetButton } from "./HamburgerButton";
import { Menu } from "./Menu";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgetButton onClick={() => setIsOpen((prevState) => !prevState)} />
    </>
  );
};
