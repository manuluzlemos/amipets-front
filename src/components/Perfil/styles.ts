import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
    background-color: #fff;

    border-radius: 0.25rem;
    padding: 1rem;
    margin-top: 3rem;
`;

export const Usuario = styled.div`
    margin: 0 auto;
    text-align: center;

    .nomeUsuario{
        font-size: 1.5rem;
        font-weight: 900;
    }

    .username{
        font-size: 1.2rem;
    }
`;

export const CircleUser = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin: 0.5rem auto;

    font-weight: 900;
    text-align: center;
    font-size: 7rem;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--orange);

    &:hover{
        cursor: pointer
    }
`;

export const MenuPerfil = styled.div`
    margin-top: 2rem;
    text-align: center;
    font-size: 1.2rem;

`;

export const ItemPerfil = styled.div`
    padding: 1rem 0;
    border-style: solid;
    border-width: 1px 0;
    border-color: var(--orange);
    border-radius: 0.25rem;
    &:hover{
        cursor: pointer;
        background-color: ${transparentize(0.7, '#dc9348')};
    }
`;