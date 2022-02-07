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
    especie: string,
    page: string
}

export function Post({ 
    id_postagem,
    username,
    texto,
    imagem,
    categoria,
    status,
    especie,
    page
} : PostProps){

    const [postSalvo, setPostSalvo] = useState(false);
    const [statusPublicacao, setStatusPublicacao] = useState('');
    const [mudarStatus, setMudarStatus] = useState('naoMostrar');
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);

    const context = useContext(AuthContext);

    function handleOpenPostModal(){
        setIsPostModalOpen(true);
    }

    function handleClosePostModal(){
        setIsPostModalOpen(false);
    }

    async function salvarPost(){
        if(postSalvo === false){
            const response = await api.post("/salvos/salvar", {
                id_usuario: context.usuario !== null ? context.usuario.id_usuario : 100000,
                id_postagem: id_postagem
            });
        }else{
            const response = await api.post("/salvos/retirar", {
                id_usuario: context.usuario !== null ? context.usuario.id_usuario : 100000,
                id_postagem: id_postagem
            });
        }
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
        if(page === "publicados") setMudarStatus("mostrar");
    }, []);

    useEffect(() => {
        async function mudarStatus(){
            const response = await api.post("/salvos/salvar", {
                id_postagem: id_postagem,
                novo_status: statusPublicacao
            });
            console.log(response);
        }
        mudarStatus();
    }, [statusPublicacao]);


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
                <span>{page !== "publicados" && status}</span>

                <select className={mudarStatus} onChange={(event) => setStatusPublicacao(event.target.value)}>
                    <option value="Aberto">Aberto</option>
                    <option value="Fechado">Fechado</option>
                </select>
                <span className='savePost' onClick={(event) => {
                    setPostSalvo(!postSalvo);
                    salvarPost();
                }}>
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