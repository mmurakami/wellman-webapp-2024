import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container flex">
        <Link href="/"  className={`${styles.logo} block`}>
          <Image src="/images/logo.svg" alt="Wellman Counselling Services Logo" width={186} height={32} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
