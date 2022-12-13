import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";

const NavLink = ({ href, children, delegated }) => {
    // const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    
    return (
        <NavLinkWrapper href={href} {...delegated}>
            <NavLinkText>{children}</NavLinkText>
            <NavLinkHoverText>{children}</NavLinkHoverText>
        </NavLinkWrapper>
    );
};

const NavLinkWrapper = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-secondary);
    font-weight: var(--font-weight-medium);
    display: flex;
    flex-direction: column;
    height: 1.5rem;
    overflow: hidden;
`;

const NavLinkText = styled.span`
    ${NavLinkWrapper}:hover & {
        transform: translateY(-100%);
    }

    @media (prefers-reduced-motion: no-preference) {
        transition: transform 400ms ease;

        ${NavLinkWrapper}:hover & {
            transition: transform 300ms ease;
        }
    }
`;

const NavLinkHoverText = styled.span`
    font-weight: 700;

    ${NavLinkWrapper}:hover & {
        transform: translateY(-100%);
    }

    @media (prefers-reduced-motion: no-preference) {
        transition: transform 400ms ease;

        ${NavLinkWrapper}:hover & {
            transition: transform 300ms ease;
        }
    }
`;

export default NavLink;
