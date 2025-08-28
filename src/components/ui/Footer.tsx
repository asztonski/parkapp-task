import LocationIcon from '../../assets/location-icon.svg?react';
import ScanIcon from '../../assets/scan-icon.svg?react';
import CarIcon from '../../assets/car-icon.svg?react';
import WalletIcon from '../../assets/wallet-icon.svg?react';
import MenuIcon from '../../assets/menu-icon.svg?react';

type FooterItem = {
  id: 'location' | 'scan' | 'car' | 'wallet' | 'menu';
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string; // tooltip
  aria: string; // nazwa akcji dla przycisku
  className?: string; // indywidualny kolor/rozmiar
};

const items: FooterItem[] = [
  {
    id: 'location',
    Icon: LocationIcon,
    label: 'Location',
    aria: 'Open location',
    className: 'text-slate-400',
  },
  {
    id: 'scan',
    Icon: ScanIcon,
    label: 'QR Scanner',
    aria: 'Open QR scanner',
    className: 'text-slate-400',
  },
  {
    id: 'car',
    Icon: CarIcon,
    label: 'Vehicle',
    aria: 'Go to vehicles',
    className: 'text-slate-400',
  },
  {
    id: 'wallet',
    Icon: WalletIcon,
    label: 'Wallet',
    aria: 'Wallet and payments',
    className: 'text-slate-400',
  },
  { id: 'menu', Icon: MenuIcon, label: 'Menu', aria: 'Open menu', className: 'text-blue-900' }, // np. aktywna
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-4">
      <nav aria-label="Primary actions" className="w-full">
        <ul className="flex items-center justify-between gap-2">
          {items.map(({ id, Icon, label, aria, className }) => (
            <li key={id}>
              <button
                type="button"
                title={label}
                aria-label={aria}
                className="group grid h-12 w-12 place-items-center rounded-xl transition-colors duration-200 ease-in-out hover:text-blue-900"
              >
                <Icon
                  aria-hidden="true"
                  className={`h-6 w-6 ${className ?? ''} transition-colors duration-200 ease-in-out`}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
