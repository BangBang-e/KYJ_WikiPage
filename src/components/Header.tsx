import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import wikiLogo from "../assets/wikiLogo.png";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate(`/`);
  };

  return (
    <HeaderContainer>
      <Logo onClick={onClickLogo}>
        <img className="logo_img" alt="Coding Hub Wiki Logo Image" src={wikiLogo} />
      </Logo>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border-bottom: 1.4px solid var(--black-075);
  background-color: var(--white);
`;
const Logo = styled.div`
  margin-left: 1.2rem;
  overflow: hidden;
  cursor: pointer;
  .logo_img {
    height: 25px;
    margin-right: 4rem;
  }
`;
