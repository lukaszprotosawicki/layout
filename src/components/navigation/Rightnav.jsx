import React from 'react';
import styled from 'styled-components';
import logo from "../../img/logo.png"

const UL = styled.ul `
  display: none;
    }
    @media (max-width: 450px) {
      display: block;
        .menu-hamburger {
        }
        img {
        padding-top: 10px;
        }
        padding-left: 0px;
        scroll-behavior: smooth;
        flex-flow: column nowrap;
        background-color: rgb(50, 50, 50);
        position: fixed;
        transform: ${({open}) => open ? 'translateY(0)' : 'translateY(-100%)'};
        padding-bottom: 20px;
        top: 0px;
        width: 100vw;
        height: min-content;

        text-align: center;
        text-decoration: none;
        z-index: 5;
        transition: transform 0.6s ease-in-out;
        div {
            text-decoration: none;
          display: block;
          margin: 5px 0 10px;
        }
        scroll-behavior: smooth;
        li {
            list-style: none;
            margin: 13px 0.6vw;
          }
          a {
            text-decoration: none;
            color: white;
          }
          a:hover {
            cursor: pointer;
            color: rgb(46, 179, 152);
            transition: 0.5s;
          }
          .nav-menu {
            margin-top: 11px;
          }
          li:hover {
            cursor: pointer;
            color: rgb(209, 105, 45);
            transition: 0.5s;
          }
    }
    .menu-burger {
        text-decoration: none;
        list-style: none;
        margin: 13px 0.6vw;
        text-shadow: rgb(180, 151, 21) 0.1em 0.1em 0.1em;
        color: white;
    }
    .menu-burger:hover {
        cursor: pointer;
        color: rgb(209, 105, 45);
        transition: 0.5s;
      }
`;

const Rightnav = ({open, closeNavigation}) => {

    return (
         <UL id="ocultars" open={open} >
             <div className="menu-hamburger">

                <div onClick={closeNavigation}>
                <a href="/">
              <img src={logo} alt="Adios Pizza" />
            </a>
                    <li>
                    <a  href="#portfolio">
                        PORTFOLIO
                        </a>
                    </li>               
                    <li >
                      <a href="#about" >ABOUT</a>
                      </li>
                    <li>
                        <a  href="#blog">
                        BLOG
                        </a>
                    </li>
                    <li>
                        <a  href="#getintouch">
                        GET IN TOUCH
                        </a>
                    </li>

                </div>
            </div>
          </UL>
    )
}

export default Rightnav

