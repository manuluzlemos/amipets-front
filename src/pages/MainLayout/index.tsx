import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { GlobalStyle } from "../../styles/global";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../contexts/auth";

export function MainLayout() {
  return (
    <AuthProvider>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />    
      <GlobalStyle />
    </AuthProvider>
  );
}