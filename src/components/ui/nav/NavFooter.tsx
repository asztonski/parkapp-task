import { useState } from 'react';
import LocationIcon from '../../../assets/location-icon.svg?react';
import ScanIcon from '../../../assets/scan-icon.svg?react';
import CarIcon from '../../../assets/car-icon.svg?react';
import WalletIcon from '../../../assets/wallet-icon.svg?react';
import MenuIcon from '../../../assets/menu-icon.svg?react';

type NavFooterItemId = 'location' | 'scan' | 'car' | 'wallet' | 'menu';

type NavFooterItem = {
  id: NavFooterItemId;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string; // tooltip
  aria: string; // nazwę akcji czytnikom ekranu nada przycisk (aria-label)
};

const items: NavFooterItem[] = [
  { id: 'location', Icon: LocationIcon, label: 'Location', aria: 'Open location' },
  { id: 'scan', Icon: ScanIcon, label: 'QR Scanner', aria: 'Open QR scanner' },
  { id: 'car', Icon: CarIcon, label: 'Vehicle', aria: 'Go to vehicles' },
  { id: 'wallet', Icon: WalletIcon, label: 'Wallet', aria: 'Wallet and payments' },
  { id: 'menu', Icon: MenuIcon, label: 'Menu', aria: 'Open menu' },
];

export default function NavFooter() {
  // domyślnie aktywne "menu" (zmień jeśli chcesz inny start)
  const [activeId, setActiveId] = useState<NavFooterItemId>('menu');

  return (
    <footer className="flex items-center justify-between px-6">
      <nav aria-label="Primary actions" className="w-full">
        <ul className="flex items-center justify-between gap-2">
          {items.map(({ id, Icon, label, aria }) => {
            const isActive = id === activeId;
            return (
              <li key={id}>
                <button
                  type="button"
                  title={label}
                  aria-label={aria}
                  aria-pressed={isActive}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setActiveId(id)}
                  className="group grid h-12 w-12 place-items-center rounded-xl transition-colors duration-200 ease-in-out"
                >
                  <Icon
                    aria-hidden="true"
                    focusable="false"
                    className={`h-6 w-6 transition-colors duration-200 ease-in-out ${
                      isActive
                        ? 'text-[var(--color-foreground)]'
                        : 'text-slate-400 group-hover:text-[var(--color-foreground)]'
                    } `}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
