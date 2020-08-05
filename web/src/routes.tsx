import React from 'react';

import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/landing';
import TeacherList from './pages/Study';
import TeacherForm from './pages/TeacherForm';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;