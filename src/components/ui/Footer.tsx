import CarIcon from '../../assets/car-icon.svg';
import LocationIcon from '../../assets/location-icon.svg';
import WalletIcon from '../../assets/wallet-icon.svg';
import ScanIcon from '../../assets/scan-icon.svg';
import MenuIcon from '../../assets/menu-icon.svg';

type FooterItem = {
  id: 'location' | 'scan' | 'car' | 'wallet' | 'menu';
  src: string;
  label: string;
  alt: string;
};

const items: FooterItem[] = [
  { id: 'location', src: LocationIcon, label: 'Location', alt: 'Location' },
  { id: 'scan', src: ScanIcon, label: 'QR Scanner', alt: 'QR scanner' },
  { id: 'car', src: CarIcon, label: 'Vehicle', alt: 'Vehicle' },
  { id: 'wallet', src: WalletIcon, label: 'Wallet', alt: 'Wallet' },
  { id: 'menu', src: MenuIcon, label: 'Menu', alt: 'Menu' },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between">
      <nav aria-label="Primary actions" className="w-full">
        <ul className="flex items-center justify-between gap-2">
          {items.map(({ id, src, label, alt }) => (
            <li key={id}>
              <button
                type="button"
                title={label}
                className="grid h-12 w-12 place-items-center rounded-xl opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100"
              >
                <img src={src} alt={alt} className="pointer-events-none select-none" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
