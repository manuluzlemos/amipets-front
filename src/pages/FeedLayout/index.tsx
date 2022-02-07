import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { GlobalStyle } from "../../styles/global";
import { Outlet } from "react-router-dom";
import { MenuLateral } from "../../components/MenuLateral";
import { Menu } from "../../components/Menu";

interface FeedLayoutProps{
  page: string
}

export function FeedLayout({ page } : FeedLayoutProps) {
  return (
    <>
      <Header />
      <Container>
        <Menu option={page} />
            <div className="content">
                <Outlet />
                <MenuLateral />
            </div>
            <Menu option={page} />
      </Container>
      <Footer />    
      <GlobalStyle />
    </>
  );
}