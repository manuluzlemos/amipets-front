import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;

    border-radius: 0.25rem;
    padding: 1rem;
    margin-top: 2rem;
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
    
    font-size: 1rem;

    &:hover{
        cursor: pointer
    }
`;

export const CircleUser = styled.div`
    display: flex;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    margin-right: 0.5rem;

    font-weight: 900;
    font-size: 1.2rem;
    color: #fff;

    justify-content: center;
    align-items: center;

    background: var(--orange);
`;

export const BodyPost = styled.div`
    font-size: 1rem;

    div{
        width: 100%;
        padding: 0.5rem 0;
    }
`;