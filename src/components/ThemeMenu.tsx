import { Theme } from "@/contexts/ThemeContext";
import { useTheme } from "@/hooks/useTheme";
import { ChevronDownIcon, MoonIcon, SunIcon, SystemIcon } from "@/assets/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

const ThemeMenuItem: { name: Theme; icon: JSX.Element }[] = [
  {
    name: "light",
    icon: <SunIcon />,
  },
  {
    name: "dark",
    icon: <MoonIcon />,
  },
  {
    name: "system",
    icon: <SystemIcon />,
  },
];

export default function ThemeMenu() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-slate-200 px-3 py-1.5 text-sm/6 font-semibold text-slate-800 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-slate-300 data-[open]:bg-gray-300 data-[focus]:outline-1 data-[focus]:outline-slate-200 dark:bg-slate-600 dark:text-slate-200">
          {theme === "dark" && <SunIcon />}
          {theme === "light" && <MoonIcon />}
          {theme === "system" && <SystemIcon />}
          <ChevronDownIcon />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="ml-1 mt-1 w-20 origin-top-right rounded-xl border bg-slate-200 p-1 text-sm/6 text-slate-800 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-200"
        >
          {ThemeMenuItem.map((item) => (
            <MenuItem key={item.name}>
              <Button
                onClick={() => setTheme(item.name)}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-slate-300 dark:data-[focus]:bg-slate-600"
              >
                {item.icon}
              </Button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
