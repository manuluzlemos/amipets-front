import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';
import { Container } from './styles';

export function CreateCountForm(){
    const [nome, setNome] = useState('');
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');    
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    const [dadosNulos, setDadosNulos] = useState('naoMostrar');
    const [erroDadoExiste, setErroDadoExiste] = useState('naoMostrar');
    const [erroCriarConta, setErroCriarConta] = useState('naoMostrar');
    const [contaCriada, setContaCriada] = useState('naoMostrar');

    let navigate = useNavigate();
    const context = useContext(AuthContext);
    useEffect(() => {
        if(context.logado === true)
            navigate("/home");
    }, []);

    async function criarConta(){
        if(nome === '' || username === '' || senha === '' || email === '' || telefone === ''){
            setDadosNulos('mostrarErro');
            setErroDadoExiste('naoMostrar');
            setContaCriada('naoMostrar');
            setErroCriarConta('naoMostrar');
        }else{
            setDadosNulos('naoMostrar');
            setErroDadoExiste('naoMostrar');
            const response = await api.post("/usuario/cadastrar", {
                nome: nome,
                username: username,
                senha: senha,
                telefone: telefone,
                email: email
            });

            if(response.data.registro === false){
                if(response.data.error === "Username já existe" || response.data.error === "Email já existe")
                    setErroDadoExiste('mostrarErro');
                setErroCriarConta('mostrarErro');
            }else{
                setContaCriada('mostrarSucesso');
            }
        }        
    }
    
    return(
        <Container>
            <form>
                <h2>Cadastro da conta</h2>

                <span>Nome: </span>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />

                <span>Username: </span>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <span>Senha: </span>
                <input 
                    type="password" 
                    placeholder="Senha"  
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                />

                <span>Telefone: </span>
                <input 
                    type="text" 
                    placeholder="Telefone" 
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
                />

                <span>E-mail: </span>
                <input 
                    type="text" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <div className={dadosNulos}>
                    Por favor, preencha todos os campos!
                </div>

                <div className={erroCriarConta}>
                    Não foi possível criar a conta.
                </div>

                <div className={erroDadoExiste}>
                    Username ou e-mail já estão cadastrados!
                </div>

                <div className={contaCriada}>
                    Conta criada com sucesso!
                </div>

                <div className='button' onClick={criarConta}>
                    Criar conta
                </div>
            </form>
            <p>
            Já tem uma conta? <Link to='/login' style={{ textDecoration: 'none' }}>Faça login.</Link>
            </p>
        </Container>
    );
}