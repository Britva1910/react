import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <span>{this.getCurrentPageName(this.props.location.pathname)}</span>
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
      </header>
    );
  }
}
export default withRouter((props) => <Header {...props} />);
