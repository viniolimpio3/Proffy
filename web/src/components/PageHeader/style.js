import styled from 'styled-components';


export const PageHeaderDiv = styled.header`
    display:flex;
    flex-direction:column;
    background:var(--color-primary);
    width:100vw;

    @media(min-width:700px){
        height:340px;

    }
`;

export const TopbarContainer = styled.div`
    
    width:90%;
    margin:0 auto;

    display:flex;
    justify-content:space-between;
    align-items:center;
    color:var(--color-text-in-primary);
    padding:1.6rem 0;

    > img{/*apenas a child img (não pegar a img dentro do Link)*/
        height:1.6rem;
    }

    a{
        transition:opacity 0.2s;
        &:hover{
            opacity:.6;
        }
    }
    @media(min-width:700px){
        max-width:1100px;
    }

`;

export const HeaderContent = styled.div`
    @media(min-width:700px){
        flex:1;
        max-width:740px;
        margin:0 auto;
        padding-bottom:48px;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;

        strong{
            max-width:350px;
        }
    }
    width:90%;
    margin:0 auto;
    position: relative;
    margin:3.2rem auto;
    strong{
        font:700 3.6rem Archivo;
        color:var(--color-title-in-primary);
        line-height:4.2rem;
    }
`;
