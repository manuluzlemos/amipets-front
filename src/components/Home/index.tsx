import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { Feed } from "../Feed";
import { MenuLateral } from "../MenuLateral";
import { Container } from "./styles";

interface HomeProps{
    page: string;
}

export function Home({ page } : HomeProps){
    let navigate = useNavigate();
    const context = useContext(AuthContext);
    useEffect(() => {
        if(context.logado === false)
            navigate("/login");
    }, []);

    return (
        <Container>            
            <Feed page={page} />
            <MenuLateral />    
        </Container>
    );
}