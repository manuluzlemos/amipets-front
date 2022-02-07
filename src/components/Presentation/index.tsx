import React, { useState } from "react";
import { Footer } from "../Footer";
import { Container } from "./styles";
import { Header } from "../Header";

import { GlobalStyle } from "../../styles/global";

export function Presentation() {
  return (
    <>
      <Header />
      <Container>
        <h1>Conheça o nosso site! </h1>
      </Container>
      <Footer />    
      <GlobalStyle />
    </>
  );
}