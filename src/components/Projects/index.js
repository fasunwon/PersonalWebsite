import React from 'react';
import {ProjectsWrapper, ProjectsCard, ProjectsIcon,
ProjectsContainer, ProjectsH1, ProjectsH2,
ProjectsP} from './projectElements';
import Icon1 from '../../img/todolist.svg';
import Icon2 from '../../img/whack.svg';
import Icon3 from '../../img/workout.svg';
import Icon4 from '../../img/amazon.svg';
import Icon5 from '../../img/tracker.svg';
import Icon6 from '../../img/WhatsApp.png';


const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Individual and Group Projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard href="https://github.com/fasunwon/Project1" target="_blank">
                <ProjectsIcon src={Icon1} />
                <ProjectsH2>React To Do List</ProjectsH2>
                <ProjectsP>Simple React Todo List using hooks</ProjectsP>
            </ProjectsCard>
            <ProjectsCard href="https://github.com/fasunwon/Whack-a-mole" target="_blank">
                <ProjectsIcon src={Icon2}/>
                <ProjectsH2>Whack-a-Mole</ProjectsH2>
                <ProjectsP>Mini game using Arm Assembly language</ProjectsP>
            </ProjectsCard>
            <ProjectsCard href="https://github.com/Logi-Ps/Progress-MVP-Code-" target="_blank">
                <ProjectsIcon src={Icon3}/>
                <ProjectsH2>Workout Website</ProjectsH2>
                <ProjectsP>Create custom workouts and browse workouts</ProjectsP>
            </ProjectsCard>
            <ProjectsCard href="https://github.com/fasunwon/Covid-19-Tracking" target="_blank">
                <ProjectsIcon src={Icon5}/>
                <ProjectsH2>COVID-19 Tracker</ProjectsH2>
                <ProjectsP>Tracking website that fetches info from an API</ProjectsP>
            </ProjectsCard>
            <ProjectsCard href="https://github.com/fasunwon/AmazonClone">
                <ProjectsIcon src={Icon4}/>
                <ProjectsH2>Amazon Clone</ProjectsH2>
                <ProjectsP>Website with Payment and user Authentication</ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon6}/>
                <ProjectsH2>WhatsApp MERN Clone</ProjectsH2>
                <ProjectsP>Coming Soon...</ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
