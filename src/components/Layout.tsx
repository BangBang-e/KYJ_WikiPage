import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <MainContainer>
        <main className="main">
          <Outlet />
        </main>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding-top: 70px;
  .main {
    width: 100%;
    height: calc(100vh - 70px);
    overflow-y: scroll;
  }
`;
