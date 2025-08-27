import React from 'react';
import pilotHeader from '../../assets/pilot-header.svg';

type HeaderProps = {
  children?: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header
      className={`header-gradient relative h-[280px] rounded-b-2xl pt-16 pl-19 shadow-lg shadow-gray-200`}
    >
      <img
        src={pilotHeader}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-1 -bottom-2 select-none"
        loading="eager"
        decoding="async"
      />
      {children}
    </header>
  );
}
