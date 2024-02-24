import { Drawer } from './Drawer';
import { useToggle } from '../../hooks/useToggle';
import { MenuSVG } from './MenuSVG';
import VisuallyHidden from '../../components/VisuallyHidden';
import clsx from 'clsx';

const MENU_ITEMS = [
  { text: 'O mnie', href: '/' },
  { text: 'Cennik', href: '/' },
  { text: 'Kontakt', href: '/' },
];

type Props = {
  className?: string;
  listItemClassName?: string;
};

const MenuList = ({ className, listItemClassName }: Props) => (
  <ul className={clsx('flex gap-4', className)}>
    {MENU_ITEMS.map(({ href, text }, index) => {
      return (
        <li key={index}>
          <a
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
    <header className="relative w-full flex flex-col items-center justify-center bg-black gap-y-4 pt-[18px] px-4">
      <div className="flex flex-col gap-y-2">
        <a
          href="/"
          className="no-underline uppercase text-white font-extralight text-3xl tracking-[0.4em] border-l border-l-white pl-1"
        >
          estetic
          <br /> hair
          <br /> studio
          <br />
        </a>

        <p className="uppercase text-white text-sm font-sans">klaudia skubis</p>
      </div>

      <div className="max-w-[900px] w-full h-[1px] bg-[rgba(160,160,160,.2)]" />

      <div className="sticky z-50  top-0  flex w-full items-center justify-between pb-[18px] md:items-baseline md:justify-start md:px-8">
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
              <MenuList className="flex-col text-black" listItemClassName="hover:border-b-black" />
            </nav>
          </Drawer>
        )}

        <div className="hidden md:flex md:flex-1" />
      </div>
    </header>
  );
};
