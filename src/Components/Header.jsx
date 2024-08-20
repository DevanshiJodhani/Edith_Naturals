import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Container>
      <Content>
        <input type="checkbox" id="click" checked={menuOpen} readOnly />
        <label htmlFor="click" className="menu-btn" onClick={toggleMenu}>
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </label>
        <Logo>
          <img src="./images/header_logo.avif" alt="" />
        </Logo>
        <NavLinks>
          <Left menuOpen={menuOpen}>
            <ul>
              <li>
                <NavLink to="/" ClassName="active" onClick={closeMenu}>
                  Home
                </NavLink>
                <NavLink to="/catlog" ClassName="active" onClick={closeMenu}>
                  Catalog
                </NavLink>
                <NavLink to="/contact" ClassName="active" onClick={closeMenu}>
                  Contact
                </NavLink>
                <Login>
                  <NavLink to="/login" ClassName="active" onClick={closeMenu}>
                    <i className="bx bx-user"></i>Login in
                  </NavLink>
                </Login>
              </li>
            </ul>
          </Left>

          <Right>
            <ul>
              <li>
                <a href="#">
                  <i className="bx bx-search"></i>
                </a>
                <a href="/login" className="login">
                  <i className="bx bx-user"></i>
                </a>
                <a href="/cart">
                  <i className="bx bx-shopping-bag"></i>
                </a>
              </li>
            </ul>
          </Right>
        </NavLinks>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 140px;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Content = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1A2B4C;
  padding: 20px 200px;

  @media screen and (max-width: 990px) {
    padding: 20px 80px;
  }

  @media screen and (max-width: 850px) {
    padding: 20px 40px;
  }
  @media screen and (max-width: 450px) {
    padding: 20px;
  }
`;

const Logo = styled.div`
  width: 130px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    width: 200px;
  }
`;

const NavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;

      a {
        color: #fff;
        text-decoration: none;
        margin-left: 30px;
        padding: 2px 0;
        position: relative;

        &::before {
          position: absolute;
          content: '';
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s ease;
        }

        &:hover::before {
          height: 2px;
          background-color: #fff;
        }

        &.active::before {
          background-color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    ul {
      position: fixed;
      top: 140px;
      left: ${({ menuOpen }) => (menuOpen ? '0' : '-100%')};
      background: #f5f5f5;
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: center;
      padding: 20px;
      transition: all 0.4s ease;
      li {
        flex-direction: column;
        text-align: center;
        margin: 20px 0;

        a {
          color: #000;
          padding: 20px;
          font-size: 22px;
          display: block;

          &:hover {
            background: #f5f5f5;
          }
          &::before {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    ul {
      position: fixed;
      top: 140px;
      left: ${({ menuOpen }) => (menuOpen ? '0' : '-100%')};
      background: #f5f5f5;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: center;
      padding: 20px;
      transition: all 0.4s ease;
      li {
        flex-direction: column;
        text-align: center;
        margin: 20px 0;

        a {
          color: #000;
          padding: 20px;
          font-size: 22px;
          display: block;

          &:hover {
            background: #f5f5f5;
          }
          &::before {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    margin-left: 0;
  }
`;

const Login = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
    position: fixed;
    bottom: 20px;

    i {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;

      a {
        font-size: 30px;
        padding: 12px 10px;
        margin-right: 25px;
        i {
          color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    ul {
      li {
        a {
          padding: 12px 8px;
          font-size: 25px;
          margin-right: 0;
        }
      }
    }

    .login {
      display: none;
    }
  }
`;

export default Header;
