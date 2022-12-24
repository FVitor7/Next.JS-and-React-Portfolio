import { FaCss3, FaHtml5, FaJs, FaPython, FaReact, FaSass, FaGit } from 'react-icons/fa';
import { SiDjango, SiFlask, SiNestjs, SiFastapi, SiGithub, SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiApachekafka } from 'react-icons/si';
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
                        <SiTypescript />
                        <span>TypeScript</span>
                    </div>
                    <div className="Skill">
                        <FaSass />
                        <span>Sass</span>
                    </div>
                    <div className="Skill">
                        <SiNextdotjs />
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
                    <div className="Skill">
                        <SiFastapi />
                        <span>FastAPI</span>
                    </div>
                    <div className="Skill">
                        <SiNestjs />
                        <span>NestJS</span>
                    </div>
                    <div className="Skill">
                        <SiApachekafka />
                        <span>Apache Kafka</span>
                    </div>
                </div>
            </section>
        </>
    )
}