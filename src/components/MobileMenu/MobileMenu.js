/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import {
    animated,
    useTransition,
    config,
    useSpringRef,
    useChain,
} from "@react-spring/web";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const AnimatedDialogOverlay = animated(DialogOverlay);
const AnimatedDialogContent = animated(DialogContent);

const MobileMenu = ({ isOpen, onDismiss }) => {
    const contentTransApi = useSpringRef();
    const contentTransition = useTransition(isOpen, {
        ref: contentTransApi,
        from: { x: 100 },
        enter: { x: 0 },
        config: config.stiff,
    });

    const mainMenuItems = [
        { href: "/sale", label: "Sale" },
        { href: "/new", label: "New Releases" },
        { href: "/men", label: "Men" },
        { href: "/women", label: "Women" },
        { href: "/kids", label: "Kids" },
        { href: "/collections", label: "Collections" },
    ];

    const mainMenuItemsTransApi = useSpringRef();
    const mainMenuItemsTransition = useTransition(mainMenuItems, {
        ref: mainMenuItemsTransApi,
        trail: 800 / mainMenuItems.length,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        config: config.gentle,
    });

    const footerMenuItems = [
        { href: "/terms", label: "Terms and Conditions" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/contact", label: "Contact Us" },
    ];

    const footerMenuItemsTransApi = useSpringRef();
    const footerMenuItemsTransition = useTransition(footerMenuItems, {
        ref: footerMenuItemsTransApi,
        trail: 800 / footerMenuItems.length,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        config: config.gentle,
    });

    useChain(
        [contentTransApi, mainMenuItemsTransApi, footerMenuItemsTransApi],
        [0, 0.3, 1.1]
    );

    /* const transitions = useTransition(isOpen, {
        from: { x: 100 },
        enter: { x: 0 },
        leave: { x: 100 },
        config: config.stiff,
    }); */

    if (!isOpen) {
        return null;
    }

    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <BackDrop />
            {contentTransition(
                ({ x }, item) =>
                    item && (
                        <Content
                            aria-label="Menu"
                            style={{
                                transform: x.to(
                                    (value) => `translateX(${value}%)`
                                ),
                            }}
                        >
                            <UpperPart>
                                <CloseButton onClick={onDismiss}>
                                    <VisuallyHidden>
                                        Dismiss menu
                                    </VisuallyHidden>
                                    <Icon id="close" />
                                </CloseButton>
                            </UpperPart>

                            <Nav>
                                {mainMenuItemsTransition(
                                    (style, item) =>
                                        item && (
                                            <Link
                                                as={animated.a}
                                                style={{ ...style }}
                                                href={item.href}
                                                key={item.href}
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                )}
                            </Nav>
                            <Footer>
                                {footerMenuItemsTransition(
                                    (style, item) =>
                                        item && (
                                            <Link
                                                as={animated.a}
                                                style={{ ...style }}
                                                href={item.href}
                                                key={item.href}
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                )}
                            </Footer>
                        </Content>
                    )
            )}
        </Overlay>
    );
};

const CloseButton = styled(UnstyledButton)`
    padding: 16px;
    position: relative;
    top: -20px;
    left: -8px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .8;
  }
`;

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-gray-700);
    opacity: 0.8;
    animation: ${fadeIn} 150ms ease;
`;

const Overlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
`;

const Content = styled(AnimatedDialogContent)`
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
    font-size: ${14 / 16}rem;

    ${Nav} & {
        font-size: ${18 / 16}rem;
        font-weight: var(--font-weight-medium);
        color: var(--color-gray-900);
        text-transform: uppercase;

        &:first-of-type {
            color: var(--color-secondary);
        }
    }
`;

export default MobileMenu;
