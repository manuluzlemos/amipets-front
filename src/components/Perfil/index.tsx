import { useState } from 'react';
import { FaCat, FaDog, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { PostModal } from '../PostModal';
import { Container, CircleUser, Usuario, MenuPerfil, ItemPerfil } from './styles';

interface PerfilProps{
    username: string,
    nome: string
}

export function Perfil({ 
    username,
    nome
} : PerfilProps){

    return(
        <Container>
            <Usuario>
                <CircleUser>
                    {username[0].toUpperCase()}
                </CircleUser> 
                <div className="nomeUsuario">
                    {nome}
                </div>
                <div className="username">
                    {username}
                </div>
            </Usuario>
            <MenuPerfil>
                <ItemPerfil> POSTS PUBLICADOS </ItemPerfil>
                <ItemPerfil> POSTS SALVOS </ItemPerfil>
                <ItemPerfil> SAIR </ItemPerfil>
            </MenuPerfil> 
        </Container>
    );
}