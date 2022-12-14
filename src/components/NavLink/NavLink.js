import React from "react";
import styled from "styled-components/macro";

const NavLink = ({ href, children, delegated }) => {
    
    return (
        <NavLinkWrapper href={href} data-hover={children} {...delegated}>
            {children}
        </NavLinkWrapper>
    );
};

const NavLinkWrapper = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: var(--font-weight-medium);
    position: relative;
    border-top: 2px solid var(--color-gray-900);
    display: inline-block;
    
    &::before {
        transition: max-width 0.5s;
        content: attr(data-hover);
        color: var(--color-secondary);
        max-width: 0;
        overflow: hidden;
        position: absolute;
        border-bottom: 2px solid var(--color-secondary);
    }

    &:hover::before {
        max-width: 100%;
    }
`;

/* const NavLinkText = styled.span`
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
`; */

export default NavLink;
