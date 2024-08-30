import { Link } from "@tanstack/react-router";
import ThemeMenu from "./ThemeMenu";

function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-20 py-3 dark:bg-slate-800">
      <Link to="/">
        <img
          className="h-10 w-40 hover:scale-105"
          alt="Logo"
          height={32}
          width={32}
          src="/images/Logo.svg"
        />
      </Link>
      <ThemeMenu />
    </header>
  );
}

export default Header;
