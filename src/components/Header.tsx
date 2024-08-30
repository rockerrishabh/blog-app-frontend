import { Link } from "@tanstack/react-router";

function Header() {
  return (
    <header className="border-b border-slate-600">
      <Link to="/">
        <img
          className="h-10 w-40"
          alt="Logo"
          height={32}
          width={32}
          src="/images/Logo.svg"
        />
      </Link>
    </header>
  );
}

export default Header;
