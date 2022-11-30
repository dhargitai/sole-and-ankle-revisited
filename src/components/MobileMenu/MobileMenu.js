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
                    <CloseButton onClick={onDismiss}>
                      <VisuallyHidden>Dismiss menu</VisuallyHidden>
                      <Icon id="close" />
                    </CloseButton>
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

const CloseButton = styled(UnstyledButton)`
    padding: 16px;
    position: relative;
    top: -20px;
    left: -8px;
`

const Overlay = styled(DialogOverlay)`
    background-color: var(--color-backdrop);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    
    &:first-of-type {
      color: var(--color-secondary);
    }
  }
  
`

export default MobileMenu;
