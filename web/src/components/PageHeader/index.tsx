import React from 'react';

import {PageHeaderDiv, TopbarContainer, HeaderContent} from './style';
import { Link } from 'react-router-dom';

import backIcon  from '../../assets/img/icons/back.svg';
import logo from '../../assets/img/logo.svg';


interface PageHeaderProps {
    message: string;
}

//O componente PageHeader é do tipo Function Component do react - e recebe tipo PageHeaderProps - que é a interface!
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) =>{
    return(
        <PageHeaderDiv>
            <TopbarContainer>
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logo} alt="Proffy"/>
            </TopbarContainer>

            <HeaderContent>
                <strong> {props.message} </strong>
                {props.children}
            </HeaderContent>

        </PageHeaderDiv>
    );
}

export default PageHeader;