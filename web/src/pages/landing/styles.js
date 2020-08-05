import styled from 'styled-components';

export const PageLanding = styled.div`
    width:100vw;
    height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;

    color:var(--color-text-in-primary); 
    background:var(--color-primary);
`;

PageLanding.content = styled.div`
    .totalConnections{
        font-size:1.4rem;
        display:flex;
        align-items:center;
        justify-content:center;
        @media(min-width:1100px){
            grid-area:total;
        }
    }
    .totalConnections img{
        margin-left:0.8rem;
    }

    @media(min-width:1100px){
        max-width:1100px;
        
        display:grid;
        grid-template-rows:350px 1fr;
        grid-template-columns:2fr 1fr 1fr;
        grid-template-areas:
            'logo hero hero'
            'buttons buttons total'
        ;

    }
`;

export const LogoContainer = styled.div`

    @media(min-width:1100px){
        grid-area:logo;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    
    text-align:center;
    margin-bottom:3.2rem;


    img{
        height:10rem;
        max-width:100%;
    }

    h2{
        font-weight:500;
        font-size:2.4rem;
        line-height:4.6rem;
        margin-top:0.8rem;
    }

`;


export const HeroImg = styled.img`

    @media(min-width:1100px){
        grid-area: hero;
    }


    width:100%;    

`;


export const ButtonsContainer = styled.div`
    @media(min-width:1100px){
        grid-area:buttons;
        justify-content:left;
    }

    display:flex;
    justify-content:center;
    align-items:center;
    margin: 3.2rem 0;

    a{
        width:30rem;
        height:10.4rem;
        border-radius:0.8rem;
        font:700 2rem 'Archivo';

        display:flex;
        align-items:center;
        justify-content:center;

        text-decoration:none;
        color:var(--color-button-text);

        transition:.6s;
    }
    a:first-child{
        margin-right:1.6rem;
    }
    a img{
        width:4rem;
    }

    a.study{
        background:var(--color-primary-lighter);
        &:hover{
            background:var(--color-primary-light);
        }
    }

    a.giveClasses{
        background:var(--color-secundary);

        &:hover{
            background:var(--color-secundary-dark); 
        }
    }

`;

