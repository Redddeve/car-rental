import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <a href="/">Logo</a>
      <nav>
        <ul>
          <li>
            <NavLink to="/" aria-label="Go to homepage">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" aria-label="Go to catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" aria-label="Go to favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
