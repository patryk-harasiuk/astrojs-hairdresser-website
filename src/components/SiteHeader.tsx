import { Drawer } from './Drawer';
import { useToggle } from '../hooks/useToggle';
import { MenuSVG } from './MenuSVG';
import VisuallyHidden from './VisuallyHidden';
import clsx from 'clsx';

const MENU_ITEMS = [
  { text: 'O mnie', href: '/' },
  { text: 'Cennik', href: '/' },
  { text: 'Kontakt', href: '/' },
];

type Props = {
  className?: string;
};

const MenuList = ({ className }: Props) => (
  <ul className={clsx('flex gap-4', className)}>
    {MENU_ITEMS.map(({ href, text }, index) => {
      return (
        <li key={index}>
          <a
            href={href}
            className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-gray-300"
          >
            {text}
          </a>
        </li>
      );
    })}
  </ul>
);

export const SiteHeader = () => {
  const { value: isMenuOpen, toggleValue: toggleIsMenuOpen } = useToggle(false);

  return (
    <header className="flex h-[72px] w-full items-center justify-between border-b border-gray-400 p-[18px] md:items-baseline md:justify-start md:px-8">
      <div className="flex-[revert] md:flex md:flex-1">
        <a href="/">estetic hair studio</a>
      </div>

      <nav
        aria-label="Main menu"
        role="navigation"
        className="font-600 mx-12 hidden gap-12 text-lg text-gray-700 md:flex"
      >
        <MenuList />
      </nav>

      <div className="flex gap-8 md:hidden">
        <button
          aria-expanded={isMenuOpen}
          onClick={toggleIsMenuOpen}
          className="bg-transparent text-black border-none p-0 m-0 w-8 h-8 grid place-content-center cursor-pointer transition-transform duration-200 hover:scale-110"
        >
          <MenuSVG />
          <VisuallyHidden>Open main menu</VisuallyHidden>
        </button>
      </div>

      {isMenuOpen && (
        <Drawer handleDismiss={toggleIsMenuOpen}>
          <nav>
            <MenuList className="flex-col" />
          </nav>
        </Drawer>
      )}

      <div className="hidden md:flex md:flex-1" />
    </header>
  );
};
