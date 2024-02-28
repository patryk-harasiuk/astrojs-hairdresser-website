import { MenuList } from './SiteHeader';

export const Footer = () => (
  <footer className=" bg-black w-full flex flex-col">
    <div className="container py-14">
      <MenuList listItemClassName="text-white" />
    </div>

    <div className="w-full text-white text-sm font-normal flex items-center py-5 justify-center border-t border-t-[rgba(255,255,255,.1)]">
      <span>&copy; {new Date().getFullYear()}</span>
    </div>
  </footer>
);
