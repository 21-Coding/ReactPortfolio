import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Projects from './projects';
import Resume from './resume';
import Skills from './skills';

import { Switch, Route } from 'react-router-dom';
const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/skills" component={Skills} />
    </Switch>
)


export default Main;