import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--orange);
    position: fixed;
    top: 0;
    left: 0;
    height: 7rem;
    width: 100%;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    vertical-align: middle;
    
    padding: 1.5rem 1rem 1rem;

    font-size: 2.5rem;
    color: #fff;

    span{
        display: inline-block;
        margin-left: 0.5rem;
        font-size: 2.5rem;
        font-weight: 900;
    }
`;