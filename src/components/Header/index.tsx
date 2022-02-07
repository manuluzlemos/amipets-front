import { FaCat } from 'react-icons/fa';

import { Container, Content } from './styles';

export function Header(){
    return(
        <Container>
            <Content>
                <div>
                    <FaCat />
                    <span>amipets</span>
                </div>
            </Content>
        </Container>
    );
}