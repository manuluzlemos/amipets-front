import styled from "styled-components";

export const Container = styled.main`
    max-width: 1120px;
    margin: 1rem auto;
    padding: 0 1rem;

    .content{
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 0.5rem;
    }
`;