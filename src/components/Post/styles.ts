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

        &:hover{
        cursor: pointer;
    }
    }

    div{
        width: 100%;
        padding: 1rem 0;
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