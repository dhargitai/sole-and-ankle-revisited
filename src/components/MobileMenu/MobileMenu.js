/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <Content aria-label="Menu">
                <UpperPart>
                    <UnstyledButton onClick={onDismiss}>
                      <VisuallyHidden>Dismiss menu</VisuallyHidden>
                      <Icon id="close" />
                    </UnstyledButton>
                </UpperPart>
                <Nav>
                    <Link href="/sale">Sale</Link>
                    <Link href="/new">New&nbsp;Releases</Link>
                    <Link href="/men">Men</Link>
                    <Link href="/women">Women</Link>
                    <Link href="/kids">Kids</Link>
                    <Link href="/collections">Collections</Link>
                </Nav>
                <Footer>
                    <Link href="/terms">Terms and Conditions</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/contact">Contact Us</Link>
                </Footer>
            </Content>
        </Overlay>
    );
};

/* const Button = styled.button`
    background: 0;
    border: 0;
    cursor: pointer;
    width: 40px;
    height: 40px;
    position: relative;
` */

const Overlay = styled(DialogOverlay)`
    background-color: var(--color-gray-700-transparent);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
`;

const Content = styled(DialogContent)`
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    padding: 32px 22px 32px 32px;
    position: relative;
    width: 80%;
`;

const UpperPart = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-start;
`;

const Footer = styled.footer`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: ${14 / 16}rem;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: ${22 / 16}rem;
`;

const Link = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;
  font-size: ${14/16}rem;
  
  ${Nav} & {
    font-size: ${18/16}rem;
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-900);
    text-transform: uppercase;
  }
  
  &:hover {
    color: var(--color-secondary);
  }
`

export default MobileMenu;
