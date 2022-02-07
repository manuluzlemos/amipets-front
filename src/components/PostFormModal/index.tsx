import { useContext, useEffect, useState } from "react";
import Modal from 'react-modal';

import { Container } from "./styles"

import closeImage from '../../assets/close.svg';
import { group } from "console";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";

interface PostFormModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function PostFormModal({isOpen, onRequestClose} : PostFormModalProps){
    const [texto, setTexto] = useState('');
    const [especie, setEspecie] = useState('Gato');
    const [categoria, setCategoria] = useState('Perdido');
    const [imagem, setImagem] = useState('');

    const context = useContext(AuthContext);

    function handlePostPublic(){
        async function publicarPost(){
            let id_usuario = context.usuario !== null ? context.usuario.id_usuario : 1;

            const response = await api.post("/postagem/publicar", {
                texto: texto,
                especie: especie || null,
                categoria: categoria || null,
                status: "Aberto",
                imagem: imagem,
                id_usuario: id_usuario
            });
        }
    
        publicarPost();
        setTexto('');
        onRequestClose(); 
    }

    return (
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
                <form>
                    <h2>Publicação</h2>                  
                
                    <input 
                        type="text" 
                        placeholder="Texto da postagem" 
                        value={texto}
                        onChange={(event) => setTexto(event.target.value)}
                    />

                    <select onChange={(event) => setEspecie(event.target.value)}>
                        <option value="Gato">Gato</option>
                        <option value="Cachorro">Cachorro</option>
                    </select>

                    <select onChange={(event) => setCategoria(event.target.value)}>
                        <option value="Perdido">Eu perdi um pet</option>
                        <option value="Encontrado">Eu encontrei um pet</option>
                        <option value="Adoção">Estou divulgando um pet disponível para adoção</option>
                    </select>

                    <input 
                        type="text" 
                        placeholder="Link da imagem" 
                        value={imagem}
                        onChange={(event) => setImagem(event.target.value)}
                    />

                    <div className="button" onClick={handlePostPublic}>
                        Publicar
                    </div>
                </form>
            </Container>
        </Modal>
    );
}