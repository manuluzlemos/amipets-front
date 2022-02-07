import { useState } from "react";
import { AuthContext } from "../../contexts/auth";

import { Feed } from "../Feed";
import { Filtro } from "../Filtro";
import { Home } from "../Home";
import { Menu } from "../Menu";
import { MenuLateral } from "../MenuLateral";
import { Container } from "./styles";

interface DashboardProps {
    page: string
}

export function Dashboard({ page } : DashboardProps){
    return (
        <Container>
            <Menu option={page} />
            {page === "home"  && <Home page="home" />}
            {page === "filtro"  && <Filtro />}
            {page === "salvos"  && <Home page="salvos" />}
            {page === "publicados"  && <Home page="publicados" />}
        </Container>
    );
}