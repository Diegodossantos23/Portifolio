import React from 'react'
import AboutCard from '../../components/AboutCard//AboutCard'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SkillCard from '../../components/SkillCard/SkillCard'
import ContactCard from '../../components/ContactCard/ContactCard'

const HomePage = () => {

    return(
        <React.Fragment>
            <AboutCard/>
            <ProjectCard/>
            <SkillCard/>
            <ContactCard/>
        </React.Fragment>
    )

}

export default HomePage