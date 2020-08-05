import React from 'react';
import {TeacherItemStyle} from './style';
import wpIcon from '../../assets/img/icons/whatsapp.svg';


interface PropsTeacherItem {
    nameTeacher:string;
    priceHourTeacher:string;
    wpTeacher:string;
    descTeacher:string;
    srcImage?:string;//não obrigatório
    subject:string;
}
const TeacherItem: React.FunctionComponent<PropsTeacherItem> = ({nameTeacher, priceHourTeacher, wpTeacher, srcImage, descTeacher, subject}) =>{
    return(
        <TeacherItemStyle>
            <header>
                <img src={srcImage} alt={nameTeacher}/>
                <div>
                    <strong>{nameTeacher}</strong>
                    <span>{subject}</span>
                </div>
            </header>

            <p> 
                {descTeacher}                
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>{priceHourTeacher}</strong>
                </p>
                <button type="button">
                    <img src={wpIcon} alt="Whatsapp-icon"/>
                    Entrar em contato
                </button>
            </footer>
        </TeacherItemStyle>
    );
}

export default TeacherItem;