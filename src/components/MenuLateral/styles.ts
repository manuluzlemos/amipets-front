import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
    background-color: #fff;

    border-radius: 0.25rem;
    padding: 1rem;
    margin-top: 3rem;

    .hello{
        display: block;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 5rem;
    }

    .postar{
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;

        button{
            padding: 1rem 1.5rem;
            background: var(--green);
            color: #fff;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1rem;
            font-weight: 600;

            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }
    }
`;

export const ItensMenuLateral = styled.div`
    margin-top: 2rem;
    text-align: center;
    font-size: 1.2rem;
`;

export const ItemMenuLateral = styled.div`
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