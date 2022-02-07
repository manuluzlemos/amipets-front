import { useContext, useState } from 'react';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { PostFormModal } from '../PostFormModal';
import { Container, ItensMenuLateral, ItemMenuLateral } from './styles';

export function MenuLateral(){
    const [isPostFormModalOpen, setIsPostFormModalOpen] = useState(false);
    let context = useContext(AuthContext);

    function handleOpenPostFormModal(){
        setIsPostFormModalOpen(true);
    }

    function handleClosePostFormModal(){
        setIsPostFormModalOpen(false);
    }

    return(
        <Container>
            <span className="hello">
                Olá, {context.usuario !== null ? context.usuario.nome.split(' ')[0] : 'Usuário'}!
            </span>
            <ItensMenuLateral>
                <Link to='/publicados' style={{ textDecoration: 'none' }}>
                    <ItemMenuLateral> MEUS POSTS </ItemMenuLateral>
                </Link>
                <Link to='/salvos' style={{ textDecoration: 'none' }}>
                    <ItemMenuLateral> POSTS SALVOS </ItemMenuLateral>
                </Link>
            </ItensMenuLateral> 
            <div className="postar">
                <button onClick={handleOpenPostFormModal}>
                    Divulgar caso <FaComment />
                </button>
                <PostFormModal
                    isOpen={isPostFormModalOpen}  
                    onRequestClose={handleClosePostFormModal}
                />
            </div>
        </Container>
    );
}