import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import NavLink from "../NavLink";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

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
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                    <NavLink href="/collections">Another</NavLink>
                    <NavLink href="/collections">One</NavLink>
                </Nav>
                <MobileNav>
                    <UnstyledButton>
                        <VisuallyHidden>Open cart</VisuallyHidden>
                        <Icon id="shopping-bag" />
                    </UnstyledButton>
                    <UnstyledButton>
                        <VisuallyHidden>Search</VisuallyHidden>
                        <Icon id="search" />
                    </UnstyledButton>
                    <UnstyledButton>
                        <VisuallyHidden>Open menu</VisuallyHidden>
                        <Icon
                            id="menu"
                            onClick={() => setShowMobileMenu(true)}
                        />
                    </UnstyledButton>
                </MobileNav>
                <Filler />
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
`;

const MobileNav = styled.a`
    display: none;

    @media ${QUERIES.tablet} {
        display: flex;
        gap: 40px;
        margin: 0;
    }

    @media ${QUERIES.mobile} {
        gap: 20px;
    }
`;

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    border-bottom: 1px solid var(--color-gray-300);
    
    @media ${QUERIES.tablet} {
      align-items: center;
      justify-content: space-between;
    }
    
    @media ${QUERIES.mobile} {
      padding: 18px 16px;
    }
`;

const Nav = styled.nav`
    display: flex;
    gap: clamp(1.2rem, 8.5vw - 4.25rem, 3.5rem);
    margin: 0px 48px;

    & > :first-of-type {
        color: var(--color-secondary);
    }

    @media ${QUERIES.tablet} {
        display: none;
    }
`;

const LogoWrapper = styled.div`
    flex: 1;

    @media ${QUERIES.tablet} {
        flex: revert;
    }
`;


const Filler = styled.div`
    flex: 1;

    @media ${QUERIES.tablet} {
      display: none;
    }
`;

export default Header;
