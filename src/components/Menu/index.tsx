import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { Container, Content, ItemMenu } from './styles';

interface MenuProps{
    option: string
}

export function Menu({ option }: MenuProps){
    const context = useContext(AuthContext);
    
    function handleLogout(){
        context.Logout();
    }

    return(
        <Container>
            <Content>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <ItemMenu selected={option === 'home'}>
                        Home
                    </ItemMenu>
                </Link>
                <Link to='/filtro' style={{ textDecoration: 'none' }}>
                    <ItemMenu selected={option === 'filtro'}>
                        Filtro
                    </ItemMenu>
                </Link>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <ItemMenu selected={option === 'sair'} onClick={handleLogout}>
                        Sair
                    </ItemMenu>
                </Link>
                
                
            </Content>
        </Container>
    );
}