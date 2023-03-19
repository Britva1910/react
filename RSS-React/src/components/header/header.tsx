import React from 'react';
import { NavLink } from 'react-router-dom';
import { s } from 'vitest/dist/env-afee91f0';
import { withRouter } from '../../utils/withRouter';
import styles from './header.module.scss';

type LocationProps = {
  location: {
    pathname: string;
  };
};

class Header extends React.Component<LocationProps> {
  constructor(props: LocationProps) {
    super(props);
  }

  getCurrentPageName(currentURL: string): string {
    switch (currentURL) {
      case '/':
        return 'Main page';
        break;
      case '/about-us':
        return 'About us page';
        break;

      default:
        return 'Ooops...';
        break;
    }
  }

  render(): React.ReactNode {
    return (
      <header className={styles.wrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.menu}>
            <li className={styles.list}>
              <NavLink to="./about-us">About us</NavLink>
            </li>
            <li className={styles.list}>
              <NavLink to="./">Main page</NavLink>
            </li>
          </ul>
        </nav>
        <span className={styles.current_page}>
          {this.getCurrentPageName(this.props.location.pathname)}
        </span>
      </header>
    );
  }
}
export default withRouter((props) => <Header {...props} />);
