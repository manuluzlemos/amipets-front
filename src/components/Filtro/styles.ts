import styled from "styled-components";

export const Container = styled.main`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 0.5rem;
`;

export const PostsLista = styled.div`
    padding: 1rem;
`;

export const Filtros = styled.div`
    margin: 0rem 1rem;
    margin-top: 3rem;
    font-size: 1rem;

    h2{
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    form{
        font-size: 1rem;

        select{
            width: 100%;
            padding: 0 1.5rem;
            height: 2.5rem;
            border-radius: 0.25rem;
            border: 1px solid #d7d7d7;
            background: #e7e9ee;

            font-weight: 400;

            &::placeholder{
                color: var(--text-body);
            }
        }
    }

`;
