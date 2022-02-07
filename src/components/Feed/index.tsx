import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";

import { Post } from "../Post";
import { Container } from "./styles";

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

interface FeedProps {
    page: string;
}

export function Feed({ page } : FeedProps){
    const [posts, setPosts] = useState<PostProps[]>([]);

    let context = useContext(AuthContext);

    useEffect(() => {
        async function carregarPosts(){
            const response = await api.post("/postagem/listar", {
                categoria: null,
                especie: null,
                status: null
            });
            setPosts(response.data.postagens);
        }

        async function carregarPostsSalvos(){
            const response = await api.post("/postagem/salvos", {
                id_usuario: context.usuario !== null ? context.usuario.id_usuario : 1
            });
            setPosts(response.data.postagens);
        }

        async function carregarPostsPublicados(){
            const response = await api.post("/postagem/publicados", {
                id_usuario: context.usuario !== null ? context.usuario.id_usuario : 1
            });
            setPosts(response.data.postagens);
        }

        if(page === "home") carregarPosts();
        if(page === "salvos") carregarPostsSalvos();
        if(page === "publicados") carregarPostsPublicados();

    }, []);

    return (
        <Container>
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
        </Container>
    );
}
