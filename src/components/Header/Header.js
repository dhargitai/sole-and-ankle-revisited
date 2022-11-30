import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <HeaderWrapper>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Another</NavLink>
          <NavLink href="/collections">One</NavLink>

          <MobileNavLink>
            <Icon id="shopping-bag" />
          </MobileNavLink>
          <MobileNavLink>
            <Icon id="search" />
          </MobileNavLink>
          <MobileNavLink>
            <Icon id="menu" onClick={() => setShowMobileMenu(true)} />
          </MobileNavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
overflow: auto;
`

const MobileNavLink = styled.a`
  display: none;

  @media ${QUERIES.tablet} {
    display: block;
  }
`

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tablet} {
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1.2rem,
    8.5vw - 4.25rem,
    3.5rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    gap: 40px;
    margin: 0;
  }

  @media ${QUERIES.mobile} {
    gap: 20px;
  }
`;

const Side = styled.div`
  flex: 1;

  &:last-of-type {
    @media ${QUERIES.tablet} {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-secondary);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

export default Header;
