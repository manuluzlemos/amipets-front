import { useState, FormEvent, useEffect, useContext } from 'react';
import Modal from 'react-modal';

import { FaCat, FaDog, FaBookmark, FaRegBookmark } from 'react-icons/fa';

import closeImage from '../../assets/close.svg';

import { Postagem, ComentariosLista, CircleUser, HeaderPost, InfoPost, Usuario, BodyPost, FooterPost, ComentarioForm } from '../PostModal/styles';
import { Container } from './styles';
import { Comentario } from '../Comentario';
import { api } from '../../services/api';
import { AuthContext } from '../../contexts/auth';

interface PostModalProps{
    id_postagem: number,
    username: string,
    imagem: string,
    categoria: string,
    status: string,
    especie: string,
    salvo: boolean
    isOpen: boolean,
    onRequestClose: () => void
}

interface ComentarioProps{
    id_comentario: number,
    username: string,
    texto: string
}

export function PostModal({ 
    isOpen, 
    onRequestClose,
    id_postagem,
    username,
    imagem,
    categoria,
    status,
    especie,
    salvo
}: PostModalProps){

    const [postSalvo, setPostSalvo] = useState(salvo);
    const [textoComentario, setTextoComentario] = useState('');
    const [comentarios, setComentarios] = useState<ComentarioProps[]>([]);
    const [recarregar, setRecarregar] = useState(false);

    const context = useContext(AuthContext);

    useEffect(() => {
        async function carregarComentarios(){
            const response = await api.post("/comentario/listar", {
                id_postagem: id_postagem
            });
            setComentarios(response.data.comentarios);
        }

        carregarComentarios();
    }, [recarregar]);

    function handlePublicarComentario(){
        async function publicarComentario(){
            let id_usuario = context.usuario !== null ? context.usuario.id_usuario : 1;

            const response = await api.post("/comentario/publicar", {
                texto: textoComentario,
                id_postagem: id_postagem,
                id_usuario: id_usuario
            });
        }
    
        publicarComentario();  
        let comentario = {
            id_comentario: 0,
            texto: textoComentario,
            username: context.usuario !== null ? context.usuario.username : ''
        };

        setRecarregar(!recarregar);
        setTextoComentario('');
    }

    return(
        <Modal 
            isOpen={isOpen} onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImage} alt="Fechar" />
            </button>

            <Container>
                <Postagem>
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
                        <img src={imagem} />
                    </BodyPost>
                    <FooterPost>
                        <span>{status}</span>
                        <span className='savePost' onClick={(event) => setPostSalvo(!postSalvo)}>
                            {postSalvo ? (<FaBookmark />) : (<FaRegBookmark />)} {}
                        </span>
                    </FooterPost>
                </Postagem>
                <ComentariosLista>
                    <span className='title'>COMENTÁRIOS</span>
                    <div className='postComentario'>        
                        <ComentarioForm>
                            <input 
                                type="text" 
                            placeholder="Texto da postagem" 
                                value={textoComentario}
                                onChange={(event) => setTextoComentario(event.target.value)}
                            />

                            <div className="button" onClick={handlePublicarComentario}>
                                Comentar
                            </div>
                        </ComentarioForm>
                    </div>
                    <div className='listComents'>
                        {comentarios.map(comentario => (
                            <Comentario 
                                key={comentario.id_comentario}
                                username={comentario.username} 
                                texto={comentario.texto}
                            />
                        ))}                        
                    </div>
                </ComentariosLista>
            </Container>
        </Modal>
    );
}