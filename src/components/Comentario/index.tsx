import { useState } from 'react';
import { FaCat, FaDog, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { Container, CircleUser, Usuario, HeaderPost, BodyPost } from './styles';

interface ComentarioProps{
    username: string,
    texto: string
}

export function Comentario({ 
    username,
    texto
} : ComentarioProps){

    return(
        <Container>
            <HeaderPost>
                <Usuario>
                    <CircleUser>
                        {username[0].toUpperCase()}
                    </CircleUser> 
                    <span>{username}</span>
                </Usuario>
            </HeaderPost>
            <BodyPost>
                <div>
                    {texto}
                </div>
            </BodyPost>
        </Container>
    );
}