import { NavLink } from "react-router-dom";
import styled from "styled-components";

import "./Navigation.css";

function Navigation({ currPage, changePage }) {
  return (
    <footer>
      <nav>
        <ul className="navbar">
          <li>
            <StyledNavLink to="/" end>
              <Icon
                alt="home-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </Icon>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/bookmarks">
              <Icon
                alt="bookmarks-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z" />
              </Icon>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/add">
              <Icon
                alt="add-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" />
              </Icon>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/profile">
              <Icon
                alt="profile-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </Icon>
            </StyledNavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navigation;

const StyledNavLink = styled(NavLink)`
  height: 2.5rem;
  &.active {
    border-bottom: solid 3px var(--color-card);
  }
`;

const Icon = styled.svg`
  height: 100%;
  fill: var(--color-background);
`;
