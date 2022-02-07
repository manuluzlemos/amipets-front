import styled from "styled-components";
import { darken, transparentize } from 'polished';

interface ItemMenuProps {
    selected: boolean
}

export const Container = styled.header`
    margin: -1rem auto;
    position: fixed;
    right: 0;
    
`;

export const Content = styled.div`
    max-width: 1120px;

    position: relative;
    display: flex;
    justify-content: flex-end;
    
    font-size: 1.5rem;
    font-weight: 900;
    color: #fff;

`;

export const ItemMenu = styled.div<ItemMenuProps>`
    padding: 0 1rem;
    transition: text-decoration 0.2s;

    color: ${(props) => props.selected 
        ? darken(0.15   , '#fff')
        : '#fff'};

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;