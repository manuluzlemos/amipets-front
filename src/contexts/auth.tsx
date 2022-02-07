import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface AuthContextData{
    logado: boolean;
    usuario: UsuarioProps | null;
    Login: (_username : string, _senha : string) => void;
    Logout: () => void;
}

interface UsuarioProps{
    id_usuario: number;
    username: string;
    email: string;
    nome: string;
    telefone: string;
}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [usuario, setUsuario] = useState<UsuarioProps | null>(null);

    useEffect(() => {
        const storagedUser = sessionStorage.getItem('@App:user');
        const storagedToken = sessionStorage.getItem('@App:token');
    
        if (storagedToken && storagedUser) {
          setUsuario(JSON.parse(storagedUser));
          //api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
      }, []);

    async function Login(_username: string, _senha: string){
        const response = await api.post("/usuario/login", {
            username: _username,
            senha: _senha
        }); 

        if(response.data.usuario){
            setUsuario({
                id_usuario: response.data.usuario.id_usuario,
                username: response.data.usuario.username,
                email: response.data.usuario.email,
                nome: response.data.usuario.nome,
                telefone: response.data.usuario.telefone,
            });
        }
        
        //api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        sessionStorage.setItem('@App:user', JSON.stringify({
            id_usuario: response.data.usuario.id_usuario,
            username: response.data.usuario.username,
            email: response.data.usuario.email,
            nome: response.data.usuario.nome,
            telefone: response.data.usuario.telefone,
        }));
        sessionStorage.setItem('@App:token', response.data.token);
    }

    function Logout() {
        setUsuario(null);
    }

    return(
        <AuthContext.Provider value={{logado: Boolean(usuario), usuario, Login, Logout}}>
            { children }
        </AuthContext.Provider>
    );
}

