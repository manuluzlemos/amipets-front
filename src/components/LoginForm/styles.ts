import styled from "styled-components";

export const Container = styled.main`
    align-items: center;
    font-size: 1rem;
    margin-top: 5rem;

    form{
        max-width: 520px;
        margin: 0 auto;

        h2{
            color: var(--text-title);
            font-size: 1.5rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        input{
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;

            border: 1px solid #d7d7d7;
            background: #e7e9ee;

            font-weight: 400;

            &::placeholder{
                color: var(--text-body);
            }

            & + input{
                margin-top: 1rem;
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

        .naoMostrar{
            display: none;
        }

        .mostrarErro{
            margin-top: 1rem;
            display: block;
            text-align: center;
            font-weight: 900;
            color: var(--red);
        }
    }

    p{
        max-width: 520px;
        margin: 0 auto;
        text-align: center;
        padding: 2rem 1rem;
        text-decoration: none !important;
    }

`;