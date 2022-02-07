import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';

export function LoginForm(){
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');    
    const [erroLogin, setErroLogin] = useState('naoMostrar');

    const context = useContext(AuthContext);
    let navigate = useNavigate();

    async function handleLogin(){
        setErroLogin('mostrarErro');
        console.log(username, senha);
        const a = await context.Login(username, senha);
        
        if(context.usuario === null){
            setErroLogin('mostrarErro');
        }else{
            navigate('/home');
        }    

        
    }
    
    return(
        <Container>
            <form>
                <h2>Acessar a conta</h2>
                <input 
                    type="text" 
                    placeholder="Usuário" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                />

                <div className={erroLogin}>
                    Os dados estão incorretos
                </div>

                <div className='button' onClick={handleLogin}>
                    Acessar
                </div>
            </form>
            <p>
                Não tem uma conta? <Link to='/create' style={{ textDecoration: 'none' }}>Cadastre-se.</Link>
            </p>
        </Container>
    );
}