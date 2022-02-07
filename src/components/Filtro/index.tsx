
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";

import { Post } from "../Post";
import { Container, Filtros, PostsLista } from "./styles";

interface PostProps{
    id_postagem: number,
    texto: string,
    especie: string,
    categoria: string,
    status: string,
    imagem: string,
    createdAt: Date,
    id_usuario: number,
    username: string
}

export function Filtro(){
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [especie, setEspecie] = useState('');
    const [categoria, setCategoria] = useState('');
    const [status, setStatus] = useState('');

    let navigate = useNavigate();
    const context = useContext(AuthContext);

    useEffect(() => {
        if(context.logado === false)
            navigate("/login");
    }, []);

    useEffect(() => {

        async function carregarPosts(){
            const response = await api.post("/postagem/listar", {
                categoria: categoria,
                especie: especie,
                status: status
            });
            setPosts(response.data.postagens);
        }

        carregarPosts();
    }, [especie, categoria, status]);

    return (
        <Container>
            <PostsLista>
                {posts.map(post => (
                    <Post
                        key={post.id_postagem}
                        id_postagem={post.id_postagem}
                        username={post.username}
                        categoria={post.categoria}
                        status={post.status}
                        especie={post.especie}
                        texto={post.texto}
                        imagem={post.imagem}
                    />
                ))}
            </PostsLista>
            <Filtros>
                    <h2>Selecione o filtro</h2>
                    <form>
                        <select onChange={(event) => setEspecie(event.target.value)}>
                            <option value="">Todas as espécies</option>
                            <option value="Gato">Gato</option>
                            <option value="Cachorro">Cachorro</option>
                        </select>
                        <select onChange={(event) => setCategoria(event.target.value)}>
                            <option value="">Todas as categorias</option>
                            <option value="Perdido">Pets perdidos</option>
                            <option value="Encontrado">Pets encontrados</option>
                            <option value="Adoção">Pets disponíveis para adoção</option>
                        </select>

                        <select onChange={(event) => setStatus(event.target.value)}>
                            s<option value="">Todos os status</option>
                            <option value="Aberto">Aberto</option>
                            <option value="Fechado">Fechado</option>
                        </select>
                    </form>
                </Filtros>
        </Container>
    );
}