import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg'
import loginImg from '../image/sign.svg'

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #000;
    color: #fff;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
    background-color: #000;
    border: none;
    margin-right: 15px;
`;

const LoginImg = styled.img`
    
`;

const LoginText = styled.span`
    display: block;
    color: #fff;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>BurgerUp</H1>
        </Logo>

        <Login>
            <LoginImg src={loginImg} alt="Login"/>
            <LoginText>ВОЙТИ</LoginText>
        </Login>
    </NavBarStyled>
)