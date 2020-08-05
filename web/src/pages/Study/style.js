import styled from 'styled-components';

export const PageStudy = styled.div`
    width:100vw !important;
    height:100vh;


    @media(min-width:700px){
        max-width:100%;
        main{
            padding:3.2rem 0;
            max-width:740px;
            margin:0 auto;
        }

    }


    main{
        margin:3.2rem auto;
        width:90%;
    }

`;

export const SearchTeachers = styled.form`
    margin-top:3.2rem;

    label{
        color:var(--color-text-in-primary);
    }

    .input-block{
        position:relative;
        label{
            font-size:1.4rem; 
        }
        input{
            width:100%;
            height:5.6rem;
            margin-top:0.8rem;
            border-radius:0.8rem;
            background:var(--color-input-background);
            border:1px solid var(--color-line-in-white);
            outline:0;
            padding:0 1.6rem;
            font:1.6rem Archivo;
        }
        margin-top:1.4rem;
        &:first-child{
            margin-top:0;
        }

        &:focus-within{/*quando qualquer campo estiver com foco dentro da div, estilizar a própria div*/
            transition:.6s;
            &::after{/*após o focus*/
                width:calc(100% - 3.2rem);
                height:2px;
                content:'';/*OBRIGATÓRIO COM PSEUDO ELEMENTOS*/

                background:var(--color-primary-light);
                position:absolute;
                left:1.6rem;
                right:1.6rem;
                bottom:0;
            }
        }
    }

    @media(min-width:700px){
        display:grid;
        grid-template-columns:repeat(3,1fr);
        column-gap:16px;
        position:absolute;
        bottom:-25px;

        .input-block{
            margin-top:0 ;
        }
    }
`;

