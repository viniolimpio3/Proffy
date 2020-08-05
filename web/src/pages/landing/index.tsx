import React from 'react';
import { PageLanding, LogoContainer, HeroImg, ButtonsContainer } from './styles';

import logo from '../../assets/img/logo.svg';
import landingImg from '../../assets/img/landing.svg';

import studyIcon from '../../assets/img/icons/study.svg';
import givesClassesIcon from '../../assets/img/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/img/icons/purple-heart.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <PageLanding>
            <PageLanding.content className="container">

                <LogoContainer>
                    <img src={logo} alt="Proffy-Logo" title="Proffy"/>
                    <h2>A sua plataforma de estudos online.</h2>
                </LogoContainer>
                
                <HeroImg 
                    src={landingImg}
                    alt="proffy-banner"
                    title="Plataforma de estudos"
                >
                </HeroImg>

                <ButtonsContainer>

                    <Link className="study" to="/study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link className="giveClasses" to="/give-classes">
                        <img src={givesClassesIcon} alt="Dar Aulas"/>
                        Dar Aulas
                    </Link>

                </ButtonsContainer>

                <span className="totalConnections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>



            </PageLanding.content>
        </PageLanding>
    );
}

export default Landing;