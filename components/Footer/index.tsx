import styles from './styles.module.css';

const Footer = (): JSX.Element => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer>
      <div className={`${styles.body} container colour-bg py-12`}>
        test
      </div>
      <div className={`${styles.copyright} container colour-bg py-4 text-sm text-center`}>
        &copy; {currentYear} Wellman Counselling Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



