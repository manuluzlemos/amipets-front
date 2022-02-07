import styled from "styled-components";

var altura = (window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight);

export const Container = styled.form`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 0.5rem;
    max-height: ${altura*0.8};

    border-radius: 0.25rem;
`;

export const Postagem = styled.div`
`;

export const HeaderPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Usuario = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    font-size: 1.5rem;

    &:hover{
        cursor: pointer
    }
`;

export const CircleUser = styled.div`
    display: flex;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;

    font-weight: 900;
    font-size: 2rem;
    color: #fff;

    justify-content: center;
    align-items: center;

    background: var(--orange);
`;

export const InfoPost = styled.div`
    display: flex;
    align-items: center;
    text-align: right;
    padding: 0.5rem;
    font-size: 1.2rem;

    span{
        margin: 0 0.5rem;
    }
`;

export const BodyPost = styled.div`
    font-size: 1.5rem;
    img{
        width: 100%;
        border-radius: 22px;
        padding: 1.2rem 0;
    }
`;

export const FooterPost = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;

    span.savePost{
        font-size: 2rem;
        display: inline-block;

        &:hover{
            cursor: pointer;
        }
    }
`;

export const ComentariosLista = styled.div`
    border-radius: 0.25rem;
    max-height: ${altura*0.8}px;

    .title{
        display: block;
        font-size: 1.4rem;
        text-align: center;
        font-weight: 900;
    }

    .listComents{
        float: none;
        margin-top: 0.5rem;
        max-height: ${altura*0.5}px;
        overflow-y: auto;
    }
`;

export const ComentarioForm = styled.form`    
    input{
        width: 100%;
        padding: 1rem 1rem;
        height: 3rem;
        border-radius: 0.25rem;
        margin-top: 1rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;

        &::placeholder{
            color: var(--text-body);
        }
    }

    .button{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;
