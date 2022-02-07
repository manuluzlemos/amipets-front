import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --orange: #dc9348;
        --green: #04a777;
        --red: #c14953;
        --blue: #388697;
        --gray: #6d6875;
    
        --text-title: #050404;
        --text-body: #969cb3;

        --background: #f0f2f5;        
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        height: 100%;
        
        @media (max-width: 1080px){
            font-size: 93   .75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--background);
        height: 100%;
    }

    body, :-ms-input-placeholder, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        cursor: not-allowed;
        opacity: 0.7;
    }

    #root{
        min-height: 100%;
        position: relative;
    }

    .react-modal-overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .react-modal-content{
        width: 100%;
        max-width: 1120px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s ;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;