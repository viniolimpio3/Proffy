//Pagina de listagem de professores
import React from 'react';
import {PageStudy, SearchTeachers} from './style';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList = () =>{
    const descTemp = "Entusiasta das melhores tecnologias de química avançada.<br /> <br />Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.";
    return(
        <PageStudy className="container">
            <PageHeader message="Estes são os proffys disponíveis.">
                <SearchTeachers>
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input id="subject" type="text" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dias da Semana</label>
                        <input id="week-day" type="text" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input id="subject" type="text" />
                    </div>
                </SearchTeachers>
            </PageHeader>
            <main>
                <TeacherItem
                    nameTeacher="Vinícius Olímpio"
                    descTeacher={descTemp}
                    priceHourTeacher={'R$10,00'}
                    subject={'Física'}
                    wpTeacher={'(11)99999-9999'}
                    srcImage={'https://avatars0.githubusercontent.com/u/56204477?s=400&u=c28c1517802d462612ae345b0c992cbf4f825637&v=4'}
                />
            </main>
        </PageStudy>
    );
}

export default TeacherList;