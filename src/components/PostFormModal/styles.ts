import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    font-size: 1rem;

    form{
        max-width: 1120px;
        margin: 0 auto;

        h2{
            color: var(--text-title);
            font-size: 1.5rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        input, select{
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;
            margin-top: 1.5rem;

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

    }

`;