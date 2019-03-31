import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import { getEmSize, trans } from '../styles/mixins'
// import Container from './Container'

interface HeaderProps {
  title: string
}
interface MenuList {
  name: string
  path: string
}
interface NavItem {
  path: string
  name: string
}

// const toggleMenu: React.FunctionComponent<any> = e => {
//   console.log(e.target)
//   e.target.classList.contains('isOpen')
//     ? ((e.target.textContent = 'close.'), e.target.classList.remove('isOpen'))
//     : ((e.target.textContent = 'menu.'), e.target.classList.add('isOpen'))

//   return
// }

const MenuList: Array<object> = [
  {
    name: 'home.',
    path: '/'
  },
  {
    name: 'about.',
    path: '/about'
  },
  {
    name: 'projects.',
    path: '/projects'
  },
  {
    name: 'work.',
    path: '/work'
  },
  {
    name: 'contact.',
    path: '/contact'
  }
]

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <StyledHeader>
      <HeaderFixed>
        <HeaderLogo>
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 226.86">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path className="cls-1" d="M106.94,22.24,19.24,59l87.7,37v22.24L0,71.71V46.48L106.94,0Z" />
                  <path className="cls-2" d="M243.06,204.62l87.7-36.73-87.7-37V108.67L350,155.15v25.24L243.06,226.86Z" />
                  <path
                    className="cls-3"
                    d="M242.6,0Q151.42,151.75,136.33,178.45t-15.09,35.39q0,9.77,8.26,9.77,18.25,0,67-68.93,1.08-2.17,2.61-2.17a1.16,1.16,0,0,1,.87,1.3q0,1.3-2.17,3.47l-9.35,12.83q-41.09,56.74-60.64,56.74a19.19,19.19,0,0,1-15.32-7.06q-6-7.06-6-17.91A51.52,51.52,0,0,1,112,178.78q5.54-11.18,37.67-64.59Q189,48.85,215.89.87Z"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </HeaderLogo>
        <MenuLink className={`menuToggle ${isMenuOpen ? 'isOpen' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? 'close.' : 'menu.'}
        </MenuLink>
      </HeaderFixed>
      <AbsoluteNavigation className={`${isMenuOpen ? 'isOpen' : ''}`}>
        <ul>
          {MenuList.map((nav_item: any) => (
            <li className={window ? window.location.pathname === nav_item.path || window.location.pathname === '' ? 'active' : '' : ''}>
              <Link to={nav_item.path}>{nav_item.name}</Link>
            </li>
          ))}
        </ul>
      </AbsoluteNavigation>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  height: ${heights.header}px;
  color: ${transparentize(0.5, colors.white)};
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const HeaderFixed = styled.div`
  position: relative;
  z-index: 101;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* height: 80px; */
  width: 100%;
  margin: 0;
  padding: 48px;
`
const AbsoluteNavigation = styled.nav`
  position: fixed;
  top: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.white};
  background: ${colors.gradientStart}; /* Old browsers */
  background: -moz-linear-gradient(-45deg, '${colors.gradientStart}' 0%, '${colors.gradientEnd}' 100%);
  background: -webkit-linear-gradient(-45deg, '${colors.gradientStart}' 0%, '${colors.gradientEnd}' 100%);
  background: linear-gradient(135deg, '${colors.gradientStart}' 0%, '${colors.gradientEnd}' 100%);
  display: flex;
  align-items: flex-end;
  padding: 10vw;
  transition: ${trans};
  &.isOpen {
    top: 0;
    transition: ${trans};
  }
  ul {
    list-style: none;
    padding: 0;
    position: relative;
    bottom: 0;
    left: 0;
    li {
      font-size: ${getEmSize(48)}em;
      &.active {
        font-weight: bold;
        color: teal !important;
      }
      a {
        transition: ${trans};
        &:hover {
          transition: ${trans};
        }
      }
    }
  }
`

const HeaderLogo = styled.div`
  max-height: 48px;
  max-width: 72px;
  width: auto;
  svg {
    fill: ${colors.brand};
  }
`
const MenuLink = styled.p`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  color: ${colors.white};
  transition: ${trans};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover,
  &:focus {
    color: ${colors.brand};
  }
`