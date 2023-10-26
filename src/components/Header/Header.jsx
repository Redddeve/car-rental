import { StyledHeader, StyledList, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledList>
          <li>
            <StyledNavLink to="/" aria-label="Go to homepage">
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/catalog" aria-label="Go to catalog">
              Catalog
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/favorites" aria-label="Go to favorites">
              Favorites
            </StyledNavLink>
          </li>
        </StyledList>
      </nav>
    </StyledHeader>
  );
};

export default Header;
