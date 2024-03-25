import Link from 'next/link';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="/"  className="header__logo">
          <Image src="/images/logo.svg" alt="Wellman Counselling Services Logo" width={186} height={48} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
