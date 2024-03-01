import { Drawer } from './Drawer';
import { useToggle } from '../../hooks/useToggle';
import { MenuSVG } from './MenuSVG';
import VisuallyHidden from '../../components/VisuallyHidden';
import clsx from 'clsx';

const MENU_ITEMS = [
  { text: 'O mnie', href: '#o-mnie' },
  { text: 'Moja oferta', href: '#moja-oferta' },
  { text: 'Cennik', href: '#cennik' },
  { text: 'Kontakt', href: '#kontakt' },
];

type Props = {
  className?: string;
  listItemClassName?: string;
  onClick?: VoidFunction;
};

export const MenuList = ({ className, listItemClassName, onClick }: Props) => (
  <ul className={clsx('flex gap-4', className)}>
    {MENU_ITEMS.map(({ href, text }, index) => {
      return (
        <li key={index}>
          <a
            onClick={onClick}
            href={href}
            className={clsx(
              'py-1 text-sm font-medium transition-all duration-150 border-b-transparent border-b-2',
              listItemClassName,
            )}
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
    <header className="sticky top-0 w-full flex flex-col items-center justify-center bg-black py-[10px] px-4">
      <div className="flex w-full items-center justify-between py-4 md:items-center md:justify-center md:px-8">
        <div className="flex-[revert] md:flex md:flex-1" />

        <nav
          aria-label="Main menu"
          role="navigation"
          className="font-600 mx-12 hidden gap-12 text-lg text-gray-700 md:flex"
        >
          <MenuList className="text-slate-100 uppercase" listItemClassName="hover:border-b-white" />
        </nav>

        <div className="flex gap-8 md:hidden">
          <button
            aria-expanded={isMenuOpen}
            onClick={toggleIsMenuOpen}
            className="bg-transparent text-white border-none p-0 m-0 w-8 h-8 grid place-content-center cursor-pointer transition-transform duration-200 hover:scale-110"
          >
            <MenuSVG />
            <VisuallyHidden>Open main menu</VisuallyHidden>
          </button>
        </div>

        {isMenuOpen && (
          <Drawer handleDismiss={toggleIsMenuOpen}>
            <nav>
              <MenuList
                className="flex-col text-black"
                listItemClassName="hover:border-b-black"
                onClick={toggleIsMenuOpen}
              />
            </nav>
          </Drawer>
        )}

        <div className="hidden md:flex md:flex-1" />
      </div>
    </header>
  );
};
