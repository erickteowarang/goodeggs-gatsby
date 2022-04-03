import React, { useEffect, useState } from "react"
import { Menu, X } from "react-feather"
import styled from "styled-components"
import BrandLogo from "../Brand/brand-logo"
import Container, { ContainerProps } from "../Container"
import Flex from "../Flex"
import Spacing from "../Spacing"
import {
  InteractiveIcon,
  VisuallyHidden,
} from "../Utils"
import { 
  media
} from "../../theme/media"
import NavLink from "./NavLink"

const data = {
  navItems: [
    {
      id: 0,
      navItemType: "Link",
      href: "#!",
      text: "Products",
    },
    {
      id: 1,
      navItemType: "Link",
      href: "#!",
      text: "Pricing",
    },
    {
      id: 2,
      navItemType: "Link",
      href: "#!",
      text: "About",
    },
    {
      id: 3,
      navItemType: "Link",
      href: "#!",
      text: "Blog",
    },
  ],
}

const DesktopNavWrapper = styled(Container)`
  position: relative;
  z-index: 1;
  display: none;

  @media ${media.small} {
    display: block;
    padding-top: ${({ theme }) => theme.space[4]};
  }
`

const MobileNavWrapper = styled(Container)<ContainerProps & {
  isOpen?: boolean
}>`
  display: block;
  position: relative;
  padding-top: ${({ theme }) => theme.space[3]};
  background: ${({ theme, isOpen }) => isOpen ? theme.colors.primary : 'default' };

  @media ${media.small} {
    display: none;
  }
`

const MobileNavOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  padding-top: ${({ theme }) => theme.space[4]};
  background: ${({ theme }) => theme.colors.primary};
  z-index: 1;

  @media ${media.small} {
    display: none;
  }
`

const MobileNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[4]};
  padding-right: ${({ theme }) => theme.space[4]};
`

const MobileSVGColorWrapper = styled.span<{ isOpen?: boolean}>`
  color: ${({ theme, isOpen }) => isOpen ? theme.colors.primary : theme.colors.background };
`

const Header = () => {
  const { navItems } = data
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <header>
      <DesktopNavWrapper>
        <Spacing size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <nav>
            <Flex list gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    <NavLink to={navItem.href}>{navItem.text}</NavLink>
                  </li>
                ))}
            </Flex>
          </nav>
        </Flex>
      </DesktopNavWrapper>
      <MobileNavWrapper isOpen={isOpen}>
        <Spacing size={2} />
        <Flex variant="spaceBetween">
          <MobileSVGColorWrapper>
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </MobileSVGColorWrapper>
          <Flex>
            <Spacing />
            <InteractiveIcon
              title="Toggle menu"
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </InteractiveIcon>
          </Flex>
        </Flex>
      </MobileNavWrapper>
      {isOpen && (
        <MobileNavOverlay>
          <nav>
            <Flex list responsive alignItems="stretch">
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  <MobileNavLink to={navItem.href}>
                    {navItem.text}
                  </MobileNavLink>
                </li>
              ))}
            </Flex>
          </nav>
        </MobileNavOverlay>
      )}
    </header>
  )
}

export default Header;
