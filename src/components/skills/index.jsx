import { FaCss3, FaHtml5, FaJs, FaPython, FaReact, FaSass, FaGit } from 'react-icons/fa';
import { SiDjango, SiFlask, SiGithub, SiMongodb, SiPostgresql } from 'react-icons/si';
import { SiNextDotJs } from 'react-icons/si'
import Title from '../title'

export default function Skills() {
    return (
        <>
            <section className="sectionsPage">
                <Title title={'Skills'} />
                <div className="Skills">
                    <div className="Skill">
                        <FaHtml5 />
                        <span>HTML</span>
                    </div>
                    <div className="Skill">
                        <FaCss3 />
                        <span>CSS</span>
                    </div>
                    <div className="Skill">
                        <FaJs />
                        <span>JAVASCRIPT</span>
                    </div>
                    <div className="Skill">
                        <FaSass />
                        <span>Sass</span>
                    </div>
                    <div className="Skill">
                        <SiNextDotJs />
                        <span>Next.Js</span>
                    </div>
                    <div className="Skill">
                        <FaReact />
                        <span>REACT</span>
                    </div>
                    <div className="Skill">
                        <SiMongodb />
                        <span>MongoDB</span>
                    </div>
                    <div className="Skill">
                        <SiPostgresql />
                        <span>PostgreSQL</span>
                    </div>
                    <div className="Skill">
                        <FaGit />
                        <span>Github</span>
                    </div>
                    <div className="Skill">
                        <FaPython />
                        <span>Python</span>
                    </div>
                    <div className="Skill">
                        <SiDjango />
                        <span>Django</span>
                    </div>
                    <div className="Skill">
                        <SiFlask />
                        <span>Flask</span>
                    </div>
                </div>
            </section>
        </>
    )
}