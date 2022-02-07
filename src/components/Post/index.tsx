import { useContext, useEffect, useState } from 'react';
import { FaCat, FaDog, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';
import { PostModal } from '../PostModal';
import { Container, CircleUser, Usuario, InfoPost, HeaderPost, BodyPost, FooterPost } from './styles';

interface PostProps{
    id_postagem: number,
    username: string,
    texto: string,
    imagem: string,
    categoria: string,
    status: string,
    especie: string
}

export function Post({ 
    id_postagem,
    username,
    texto,
    imagem,
    categoria,
    status,
    especie
} : PostProps){

    const [postSalvo, setPostSalvo] = useState(false);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);

    const context = useContext(AuthContext);

    function handleOpenPostModal(){
        setIsPostModalOpen(true);
    }

    function handleClosePostModal(){
        setIsPostModalOpen(false);
    }

    useEffect(() => {
        async function verificarSalvo(){
            const response = await api.post("/salvos/verificar", {
                id_usuario: context.usuario !== null ? context.usuario.id_usuario : 100000,
                id_postagem: id_postagem
            });
            console.log(context.usuario !== null ? context.usuario.id_usuario : 100000, id_postagem, response);
            setPostSalvo(response.data.salvo);
        }

        verificarSalvo();
        console.log(postSalvo);
    }, []);

    useEffect(() => {
        async function salvarPost(){
            const response = await api.post("/salvos/salvar", {
                id_usuario: context.usuario !== null ? context.usuario.id_usuario : 100000,
                id_postagem: id_postagem
            });
        }

        async function retirarPost(){
            const response = await api.post("/salvos/retirar", {
                id_usuario: context.usuario !== null ? context.usuario.id_usuario : 100000,
                id_postagem: id_postagem
            });
        }

        if(postSalvo === true) salvarPost();
        if(postSalvo === false) retirarPost();
    }, [postSalvo]);

    return(
        <Container>
            <HeaderPost>
                    <Usuario>
                    <CircleUser>
                        {username[0].toUpperCase()}
                    </CircleUser> 
                    <span>{username}</span>
                </Usuario>
                <InfoPost>
                    <span>
                        {especie === 'Gato' ? (<FaCat />) : (<FaDog />)} {especie}
                    </span> 
                    <span>|</span> 
                    <span>{categoria}</span>
                </InfoPost>
            </HeaderPost>
            <BodyPost>
                <img onClick={handleOpenPostModal} src={imagem} alt="Abrir" />
                <div>
                    {texto}
                </div>
            </BodyPost>
            <FooterPost>
                <span>{status}</span>
                <span className='savePost' onClick={(event) => setPostSalvo(!postSalvo)}>
                    {postSalvo ? (<FaBookmark />) : (<FaRegBookmark />)} {}
                </span>
            </FooterPost>

            <PostModal
                id_postagem={id_postagem}
                username={username}
                categoria={categoria}
                status={status}
                especie={especie}
                imagem={imagem}
                isOpen={isPostModalOpen}  
                onRequestClose={handleClosePostModal}
            />
        </Container>
    );
}